'use client'

import { useEffect, useMemo, useState } from 'react'
import type { Product, ProductCategory } from '@/data/products'
import { productCategories } from '@/data/products'

type CartItem = {
  productId: string
  quantity: number
}

type Props = {
  products: Product[]
}

const storageKey = 'civicspan-products-cart'
const requestQuoteEmail = 'info@civicspanitgroup.com'

export default function ProductCart({ products }: Props) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey)
    if (!stored) return

    try {
      const parsed = JSON.parse(stored) as CartItem[]
      setCart(parsed.filter((item) => {
        const product = products.find((candidate) => candidate.id === item.productId)
        return item.quantity > 0 && product?.category !== 'Business Hardware'
      }))
    } catch {
      window.localStorage.removeItem(storageKey)
    }
  }, [products])

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(cart))
  }, [cart])

  const productMap = useMemo(() => new Map(products.map((product) => [product.id, product])), [products])

  const visibleProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory)

  const cartLines = cart
    .map((item) => ({ ...item, product: productMap.get(item.productId) }))
    .filter((item): item is CartItem & { product: Product } => Boolean(item.product))
    .filter((item) => item.product.category !== 'Business Hardware')

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  const buildHardwareQuoteHref = (product: Product) => {
    const body = encodeURIComponent([
      `Hardware quote request: ${product.name}`,
      `Category: ${product.category}`,
      '',
      'Please share:',
      '- Quantity and user roles',
      '- Preferred Dell model or workload requirements',
      '- Deployment, onboarding, warranty, and managed support needs',
      '- Timeline, shipping, and purchase order requirements',
    ].join('\n'))

    return `mailto:${requestQuoteEmail}?subject=${encodeURIComponent(`Custom quote and spec review: ${product.name}`)}&body=${body}`
  }

  const addToCart = (productId: string) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId)
      if (existing) {
        return current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item)
      }

      return [...current, { productId, quantity: 1 }]
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((current) => {
      if (quantity <= 0) return current.filter((item) => item.productId !== productId)
      return current.map((item) => item.productId === productId ? { ...item, quantity } : item)
    })
  }

  const clearCart = () => {
    setCart([])
    setNotes('')
    window.localStorage.removeItem(storageKey)
  }

  const cartMessage = encodeURIComponent([
    'Product request:',
    ...cartLines.map((line) => `- ${line.product.name} (${line.product.category}) x ${line.quantity}`),
    notes ? `Notes: ${notes}` : '',
  ].filter(Boolean).join('\n'))

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] gap-8 items-start">
      <div className="space-y-8">
        <section className="rounded-[28px] border border-green-500/15 bg-dark-secondary/80 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-3">
                Featured Categories
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Browse Products and Quote-Ready Bundles
              </h2>
              <p className="text-neutral-light text-sm sm:text-base leading-relaxed max-w-3xl">
                Browse CivicSpan recommendations by category. Hardware is scoped as a custom quote so CivicSpan can validate specs, bundle deployment services, and support the full lifecycle instead of publishing one-size-fits-all pricing.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(['All', ...productCategories] as const).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'border-primary bg-primary text-dark'
                      : 'border-green-500/25 bg-primary/10 text-primary hover:border-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts.map((product) => {
            const quantity = cart.find((item) => item.productId === product.id)?.quantity ?? 0
            const isHardware = product.category === 'Business Hardware'

            return (
              <article key={product.id} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 overflow-hidden flex flex-col h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-dark-secondary to-dark flex items-center justify-center border-b border-white/8">
                  <div className="text-center px-6">
                    <p className="text-primary font-bold uppercase tracking-[0.16em] text-xs mb-3">Image slot</p>
                    <p className="text-white font-extrabold text-xl leading-tight">{product.name}</p>
                    <p className="text-neutral-muted text-xs mt-3 break-all">{product.image}</p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">{product.type}</p>
                  <h3 className="text-xl font-extrabold text-white mb-3">{product.name}</h3>
                  <p className="text-neutral-light text-sm leading-6 mb-4">{product.description}</p>
                  <div className="mb-6 space-y-5">
                    <div>
                      <p className="text-primary uppercase tracking-[0.16em] text-[0.7rem] font-extrabold mb-2">Recommended for</p>
                      <div className="flex flex-wrap gap-2">
                        {product.recommendedFor.map((item) => (
                          <span key={item} className="rounded-full border border-green-500/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-primary uppercase tracking-[0.16em] text-[0.7rem] font-extrabold mb-2">Why CivicSpan recommends it</p>
                      <ul className="space-y-1.5">
                        {product.whyRecommended.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-neutral-muted leading-5">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-neutral-muted text-xs leading-5">{product.fulfillment}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    {isHardware ? (
                      <span className="text-neutral-muted text-xs">Custom quote required</span>
                    ) : quantity > 0 ? (
                      <div className="flex items-center rounded-lg border border-green-500/20 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-3 py-2 text-primary hover:bg-primary/10"
                          aria-label={`Decrease ${product.name} quantity`}
                        >
                          −
                        </button>
                        <span className="px-3 py-2 text-white font-bold text-sm min-w-10 text-center">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-3 py-2 text-primary hover:bg-primary/10"
                          aria-label={`Increase ${product.name} quantity`}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <span className="text-neutral-muted text-xs">Not in cart</span>
                    )}

                    {isHardware ? (
                      <a
                        href={buildHardwareQuoteHref(product)}
                        className="rounded-lg bg-primary px-4 py-2 text-dark font-bold text-sm hover:bg-primary-dark transition-colors text-center"
                      >
                        Request Bundle Quote
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => addToCart(product.id)}
                        className="rounded-lg bg-primary px-4 py-2 text-dark font-bold text-sm hover:bg-primary-dark transition-colors"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      </div>

      <aside className="xl:sticky xl:top-28 rounded-3xl border border-green-500/20 bg-slate-950/90 p-6 shadow-xl">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-2">Product Requests</p>
            <h2 className="text-2xl font-extrabold text-white">Request List</h2>
          </div>
          <span className="rounded-full border border-green-500/25 bg-primary/10 px-3 py-1 text-primary text-sm font-bold">
            {itemCount} item{itemCount === 1 ? '' : 's'}
          </span>
        </div>

        {cartLines.length ? (
          <div className="space-y-4">
            {cartLines.map((line) => (
              <div key={line.productId} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-white font-bold text-sm">{line.product.name}</h3>
                    <p className="text-neutral-muted text-xs mt-1">{line.product.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateQuantity(line.productId, 0)}
                    className="text-neutral-muted hover:text-primary text-xs font-bold"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-neutral-muted text-xs">Quantity</span>
                  <div className="flex items-center rounded-lg border border-green-500/20 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                      className="px-3 py-1.5 text-primary hover:bg-primary/10"
                    >
                      −
                    </button>
                    <span className="px-3 py-1.5 text-white font-bold text-sm min-w-10 text-center">{line.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.productId, line.quantity + 1)}
                      className="px-3 py-1.5 text-primary hover:bg-primary/10"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <label className="block">
              <span className="block text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-2">Order notes</span>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={4}
                className="w-full rounded-xl border border-green-500/20 bg-dark-secondary p-3 text-sm text-white placeholder:text-neutral-muted focus:border-primary focus:outline-none"
                placeholder="Add sizes, colors, quantities by team, download questions, or accessory preferences. For Dell hardware, use the bundle quote button on the product card."
              />
            </label>

            <div className="space-y-3 border-t border-white/10 pt-5">
              <a
                href={`mailto:${requestQuoteEmail}?subject=CivicSpan%20product%20request&body=${cartMessage}`}
                className="block w-full rounded-lg bg-primary px-5 py-3 text-center text-dark font-bold hover:bg-primary-dark transition-colors"
              >
                Request details
              </a>
              <button
                type="button"
                onClick={clearCart}
                className="block w-full rounded-lg border border-green-500/25 px-5 py-3 text-center text-primary font-bold hover:bg-primary/10 transition-colors"
              >
                Clear list
              </button>
            </div>

            <p className="text-neutral-muted text-xs leading-5">
              Merchandise, digital downloads, and accessories can move through checkout later. Dell hardware stays quote-based so specs, deployment, support, and procurement details are validated first.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-neutral-muted text-sm leading-6">
            Your request list is empty. Add merchandise, digital products, or accessories here, or use Request Bundle Quote on Dell hardware cards for a spec review.
          </div>
        )}
      </aside>
    </div>
  )
}
