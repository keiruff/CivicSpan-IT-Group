import assert from 'node:assert/strict'
import { test } from 'node:test'
import sgMail from '@sendgrid/mail'
import { POST } from '../src/app/api/contact/route'
import { deploymentOptions, procurementOptions } from '../src/lib/hardware-quote'

const inquiry = {
  name: 'Test Buyer',
  email: 'buyer@example.test',
  subject: 'Test inquiry',
  message: 'Synthetic submission',
}
const quote = {
  ...inquiry,
  kind: 'hardware-quote',
  company: 'Test Company',
  zip: '22102',
  procurement: procurementOptions[0],
  timeline: deploymentOptions[0],
  vendors: [],
  quantity: '4',
  specifications: 'Synthetic hardware requirements',
}

function submit(payload: object) {
  return POST(new Request('https://example.test/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }))
}

test('form delivery', async (t) => {
  const config = {
    SENDGRID_API_KEY: 'SG.synthetic-test-only',
    SENDGRID_FROM: 'sender@example.test',
    SENDGRID_TO: 'inbox@example.test',
  }
  for (const [key, value] of Object.entries(config)) {
    const original = process.env[key]
    process.env[key] = value
    t.after(() => {
      if (original === undefined) delete process.env[key]
      else process.env[key] = original
    })
  }

  const sent: Array<Parameters<typeof sgMail.send>[0]> = []
  let rejectedRecipient: string | undefined
  t.mock.method(sgMail, 'send', async (message: (typeof sent)[number]) => {
    sent.push(message)
    if (!Array.isArray(message) && message.to === rejectedRecipient) {
      throw new Error('Synthetic delivery rejection')
    }
  })

  await t.test('rejects an incomplete quote before sending', async () => {
    assert.equal((await submit({ ...quote, specifications: '' })).status, 400)
    assert.equal(sent.length, 0)
  })

  await t.test('reports unavailable delivery without an explicit destination', async () => {
    delete process.env.SENDGRID_TO
    try {
      for (const payload of [inquiry, quote]) {
        const response = await submit(payload)
        assert.equal(response.status, 503)
        assert.equal((await response.json()).success, false)
      }
      assert.equal(sent.length, 0)
    } finally {
      process.env.SENDGRID_TO = config.SENDGRID_TO
    }
  })

  await t.test('sends a contact inquiry to the configured inbox', async () => {
    const response = await submit(inquiry)
    assert.equal(response.status, 200)
    assert.equal((await response.json()).success, true)
    assert.deepEqual(sent.splice(0).map((message) => !Array.isArray(message) && message.to), [config.SENDGRID_TO])
  })

  await t.test('sends the quote to the inbox and the confirmation to the buyer', async () => {
    const response = await submit(quote)
    assert.equal(response.status, 200)
    assert.equal((await response.json()).confirmationAccepted, true)
    assert.deepEqual(sent.splice(0).map((message) => !Array.isArray(message) && message.to), [
      config.SENDGRID_TO,
      quote.email,
    ])
  })

  await t.test('preserves an accepted quote when the confirmation fails', async () => {
    rejectedRecipient = quote.email
    const response = await submit(quote)
    assert.equal(response.status, 200)
    const result = await response.json()
    assert.equal(result.success, true)
    assert.equal(result.confirmationAccepted, false)
    assert.equal(sent.splice(0).length, 2)
  })

  await t.test('reports inbox failure and skips the confirmation', async () => {
    rejectedRecipient = config.SENDGRID_TO
    const response = await submit(quote)
    assert.equal(response.status, 502)
    assert.equal((await response.json()).success, false)
    assert.equal(sent.splice(0).length, 1)
  })
})
