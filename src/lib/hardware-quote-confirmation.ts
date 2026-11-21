const subject = 'Hardware procurement request received'
const acknowledgement = 'Thank you for sending CivicSpan IT Group your hardware requirements and quantities.'
const nextSteps = 'We aim to follow up within 1–2 business days with pricing, availability, or questions about your request.'
const teaming = 'CivicSpan IT Group holds Virginia SWaM certification (ID 845315). Share any participation goals with our team so we can address them in your quote.'
const sourcing = 'Hardware sourcing includes Dell, Cisco, Epson, Ergotron, and HP through TD SYNNEX.'
const contactEmail = 'info@civicspanitgroup.com'

export const hardwareQuoteConfirmation = {
  subject,
  text: [subject, acknowledgement, nextSteps, teaming, sourcing, `CivicSpan IT Group | Fredericksburg, VA | ${contactEmail}`].join('\n\n'),
  html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${subject}</title>
</head>
<body style="margin:0;background:#f8fafc;color:#334155;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:20px auto;background:#fff;border:1px solid #e2e8f0">
    <tr><td style="padding:24px;background:#0f172a;color:#fff">
      <p style="margin:0;font-size:20px;font-weight:bold">CivicSpan IT Group</p>
      <p style="margin:6px 0 0;color:#cbd5e1;font-size:13px">Authorized hardware sourcing and procurement</p>
    </td></tr>
    <tr><td style="padding:24px;font-size:15px;line-height:1.6">
      <h1 style="margin:0 0 12px;color:#0f172a;font-size:20px">${subject}</h1>
      <p>${acknowledgement}</p>
      <p>${nextSteps}</p>
      <table role="presentation" cellpadding="12" cellspacing="0" width="100%" style="background:#f1f5f9;border-left:4px solid #2563eb">
        <tr><td><strong>Virginia SWaM teaming</strong><br>${teaming}</td></tr>
      </table>
      <p>Best regards,<br><strong>CivicSpan IT Group Procurement</strong></p>
    </td></tr>
    <tr><td style="padding:16px 24px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:13px;line-height:1.6">
      ${sourcing}<br>Fredericksburg, VA &middot; <a href="mailto:${contactEmail}" style="color:#1d4ed8">${contactEmail}</a>
    </td></tr>
  </table>
</body>
</html>`,
}
