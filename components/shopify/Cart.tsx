'use client'

import React, { useEffect, useState } from 'react'
import s from './Cart.module.scss'
import cn from 'classnames'
import useCart from '@shopify/hooks/useCart'
import { parseGid } from '@shopify/utils'
import CountrySelector from './CountrySelector'
import Loader from '@components/common/Loader'
import Link from '@components//nav/Link'
import { usePathname } from 'next/navigation'

export type CartProps = {
  localization: LocalizationQuery['localization']
}

export default function Cart({ localization }: CartProps) {

  const [
    cart,
    createCart,
    removeFromCart,
    updateQuantity,
    updating,
    updatingId,
    cartError
  ] = useCart((state) => [state.cart, state.createCart, state.removeFromCart, state.updateQuantity, state.updating, state.updatingId, state.error])

  const pathname = usePathname()
  const [showCart, setShowCart] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const isEmpty = cart && cart?.lines?.edges?.length > 0 ? false : true
  const loading = !cart || updating
  const totalItems = cart?.lines.edges.reduce((total, { node: { quantity } }) => total + quantity, 0)

  useEffect(() => { !cart && createCart() }, [cart, createCart])
  useEffect(() => { setShowCart(false) }, [pathname])

  if (!showCart) {
    return (
      <div className={s.miniCart}>
        <button className={cn(!isEmpty && s.inverted, loading && s.loading)} onClick={() => setShowCart(true)}>
          <div className={s.icon} >
            <img src={`/images/cart${!isEmpty ? '_inverted' : ''}.svg`} alt="Cart" />
            {updating && <Loader loading={true} className={s.loader} invert={!isEmpty} />}
          </div>
          <div className={s.count}>{!isEmpty && totalItems}</div>
        </button>
      </div>
    )
  }

  return (
    <div id="cart" className={cn(s.cart, showCart && s.show, updating && s.updating)} >
      <header>
        <h3>Cart</h3>
        <div className={s.currency}>
          <CountrySelector localization={localization} label="Location" className={s.form} />
        </div>

        <button className={s.close} onClick={() => setShowCart(false)} >
          <img src="/images/close.svg" alt="Close" />
        </button>

      </header>
      {isEmpty ?
        <div className={s.empty}>
          Your cart is empty
        </div>
        :
        <>
          <ul className={s.items}>
            {cart?.lines.edges.map(({ node: { id, quantity, cost, merchandise } }, idx) =>
              <li key={idx} className={cn(updatingId === id && s.updating)}>

                <figure className={s.thumb}>
                  <Link href={`/products/${merchandise.product.handle}?variant=${parseGid(merchandise.id)}`}>
                    <img src={merchandise.image?.url} alt={merchandise.image?.altText} />
                  </Link>
                </figure>

                <div className={s.details}>
                  <div>{merchandise.product.title}</div>
                  <div className="light">{merchandise.selectedOptions.map(({ value }) => value).join(' ')}</div>
                  <div>
                    <button
                      className={s.minus}
                      onClick={() => updateQuantity(id, quantity - 1)}
                      disabled={quantity === 1}
                    >-</button>
                    {quantity}
                    <button
                      className={s.plus}
                      onClick={() => updateQuantity(id, quantity + 1)}
                    >+</button>
                  </div>
                </div>

                <div className={s.amount}>
                  <div className={s.price}>
                    {merchandise.price.amount} {cost.totalAmount.currencyCode}
                  </div>
                  <div>
                    <button className={cn(s.remove, "light")} onClick={() => removeFromCart(id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            )}
          </ul>

          <div className={s.total}>
            <div>Total</div>
            <div className={s.price}>
              {cart?.cost.totalAmount.amount} {cart?.cost.totalAmount.currencyCode}
            </div>
          </div>
          <div className={cn(s.extra, "light")}>Shipping and tax are added at checkout</div>
          <form action={cart?.checkoutUrl} method="GET">
            <button className={cn(s.checkout, 'full')} type="submit">Checkout & pay</button>
          </form>
        </>
      }
      {error && <div className={s.error}>{error}</div>}
      {cartError && <div className={s.error}>{cartError}</div>}
    </div>
  )
}