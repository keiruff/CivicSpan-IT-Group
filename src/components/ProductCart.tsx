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

export default function ProductCart({ products }: Props) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey)
    if (!stored) return

    try {
      const parsed = JSON.parse(stored) as CartItem[]
      setCart(parsed.filter((item) => item.quantity > 0))
    } catch {
      window.localStorage.removeItem(storageKey)
    }
  }, [])

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

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

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
    'Product cart request:',
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
                Shop by Category
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Add products to your cart
              </h2>
              <p className="text-neutral-light text-sm sm:text-base leading-relaxed max-w-3xl">
                This cart collects the items you want. Pricing, variants, payment, delivery, and print-on-demand checkout can be connected after the provider is selected.
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
                  <p className="text-neutral-muted text-xs leading-5 mb-6">{product.fulfillment}</p>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    {quantity > 0 ? (
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

                    <button
                      type="button"
                      onClick={() => addToCart(product.id)}
                      className="rounded-lg bg-primary px-4 py-2 text-dark font-bold text-sm hover:bg-primary-dark transition-colors"
                    >
                      Add to cart
                    </button>
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
            <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-2">Cart</p>
            <h2 className="text-2xl font-extrabold text-white">Product Request</h2>
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
                placeholder="Add sizes, colors, quantities by team, preferred Dell models, or download questions."
              />
            </label>

            <div className="space-y-3 border-t border-white/10 pt-5">
              <a
                href={`mailto:info@civicspanitgroup.com?subject=CivicSpan%20product%20cart%20request&body=${cartMessage}`}
                className="block w-full rounded-lg bg-primary px-5 py-3 text-center text-dark font-bold hover:bg-primary-dark transition-colors"
              >
                Request checkout details
              </a>
              <button
                type="button"
                onClick={clearCart}
                className="block w-full rounded-lg border border-green-500/25 px-5 py-3 text-center text-primary font-bold hover:bg-primary/10 transition-colors"
              >
                Clear cart
              </button>
            </div>

            <p className="text-neutral-muted text-xs leading-5">
              This is a quote/request cart. Payment, print-on-demand checkout, digital download delivery, and exact product pricing can be connected after providers are selected.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-neutral-muted text-sm leading-6">
            Your cart is empty. Add merchandise, digital products, accessories, or business hardware to start a product request.
          </div>
        )}
      </aside>
    </div>
  )
}
