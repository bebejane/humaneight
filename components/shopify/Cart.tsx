'use client'

import React, { useEffect, useState } from 'react'
import s from './Cart.module.scss'
import cn from 'classnames'
import useCart from '@shopify/hooks/useCart'
import { apiQuery } from 'next-dato-utils'
import { parseGID } from '@shopify/utils'
import { Image } from 'react-datocms'
import { AllCartProductsDocument } from '@graphql'
import Link from 'next/link'

export type CartProps = {}

export default function Cart({ }: CartProps) {

  const [
    cart,
    createCart,
    removeFromCart,
    updateQuantity,
    updating,
    cartError
  ] = useCart((state) => [state.cart, state.createCart, state.removeFromCart, state.updateQuantity, state.updating, state.error])

  const [products, setProducts] = useState<AllCartProductsQuery['allProducts'] | null>(null)
  const [showCart, setShowCart] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const isEmpty = (!cart || cart.lines.edges.length === 0)

  useEffect(() => { !cart && createCart() }, [cart, createCart])
  useEffect(() => {

    const ids = cart?.lines.edges.map(({ node }) => parseGID(node.merchandise.product.id).toString())
    if (!ids) return

    fetchDatoCMSProducts(ids)
      .then(({ allProducts }) => setProducts(allProducts))
      .catch((err) => setError(err.message))

  }, [cart])

  if (!showCart) {
    return (
      <div className={s.miniCart}>
        <h3 className="nav"><Link href="/shop">Shop</Link></h3>
        <button className={cn(!isEmpty && s.inverted)} onClick={() => setShowCart(true)}>
          <img className={s.icon} />
          <div className={s.count}>{cart?.lines.edges.length}</div>
        </button>
      </div>
    )
  }

  return (
    <div id="cart" className={cn(s.cart, showCart && s.show, updating && s.updating)} >
      <header>
        <h3>Cart</h3>
        <div className={s.currency}>
          <label>Currency</label>
          <form>
            <select>
              <option value="SEK">SEK</option>
            </select>
          </form>
        </div>
        <div className={s.close} onClick={() => setShowCart(false)}>×</div>
      </header>
      {isEmpty ?
        <div className={s.empty}>Your cart is empty</div>
        :
        <>
          <ul className={s.items}>
            {cart?.lines.edges.map(({ node }, idx) =>
              <li key={idx}>
                <div className={s.thumb}>
                  <ProductThumbnail
                    product={products?.find(({ shopifyId }) => shopifyId === parseGID(node.merchandise.product.id).toString()) as ProductRecord}
                  />
                </div>
                <div className={s.details}>
                  <div>{node.merchandise.product.title}</div>
                  <div>{node.merchandise.selectedOptions.map(({ value }) => value).join(' ')}</div>
                  <div>
                    <button
                      onClick={() => updateQuantity(node.id, node.quantity - 1)}
                      disabled={node.quantity === 1}
                    >-</button>
                    {node.quantity}
                    <button
                      onClick={() => updateQuantity(node.id, node.quantity + 1)}
                    >+</button>
                  </div>
                </div>

                <div className={s.amount}>
                  <div className={s.price}>
                    {node.merchandise.price.amount} {node.cost.totalAmount.currencyCode}
                  </div>
                  <button className={s.remove} onClick={() => removeFromCart(node.id)}>
                    Remove
                  </button>
                </div>

              </li>
            )}
          </ul>

          <div className={s.total}>
            <div>Total</div>
            <div className={s.price}>
              {cart?.cost.totalAmount.amount}
            </div>
          </div>

          <form action={cart.checkoutUrl} method="GET">
            <button className={s.checkout} type="submit">Checkout & pay</button>
          </form>
        </>
      }
      {error && <div className={s.error}>{error}</div>}
      {cartError && <div className={s.error}>{cartError}</div>}
    </div>
  )
}

const ProductThumbnail = ({ product }: { product?: ProductRecord }) => {

  return (
    <figure>
      {product?.image ?
        <Image data={product.image.responsiveImage} />
        :
        <div className={s.loading}>L</div>
      }
    </figure>
  )
}

const fetchDatoCMSProducts = async (shopifyIds: string[]) => {
  console.log('fetchDatoCMSProducts')
  return apiQuery<AllCartProductsQuery, AllCartProductsQueryVariables>(AllCartProductsDocument, {
    variables: {
      shopifyIds
    },
    revalidate: 0
  })
}
