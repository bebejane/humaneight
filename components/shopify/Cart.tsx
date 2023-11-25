'use client'

import React, { useEffect, useState } from 'react'
import s from './Cart.module.scss'
import cn from 'classnames'
import useCart from '@shopify/hooks/useCart'
import { apiQuery } from 'next-dato-utils'
import { parseGid } from '@shopify/utils'
import { Image } from 'react-datocms'
import { AllCartProductsDocument } from '@graphql'
import CountrySelector from './CountrySelector'
import Loader from '@components/common/Loader'
import Link from '@components//nav/Link'


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
    cartError
  ] = useCart((state) => [state.cart, state.createCart, state.removeFromCart, state.updateQuantity, state.updating, state.error])

  const [products, setProducts] = useState<AllCartProductsQuery['allProducts'] | null>(null)
  const [showCart, setShowCart] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const isEmpty = cart?.lines.edges.length === 0
  const loading = !cart || updating

  useEffect(() => { !cart && createCart() }, [cart, createCart])
  useEffect(() => {

    const ids = cart?.lines.edges.map(({ node }) => parseGid(node.merchandise.product.id).toString())
    if (!ids) return

    fetchDatoCMSProducts(ids)
      .then(({ allProducts }) => setProducts(allProducts))
      .catch((err) => setError(err.message))

  }, [cart])


  if (!showCart) {
    return (
      <div className={s.miniCart}>
        <h3 className="nav nav-hover"><Link href="/shop">Shop</Link></h3>
        <button className={cn(!isEmpty && s.inverted, loading && s.loading)} onClick={() => setShowCart(true)}>
          <div className={s.icon} >
            <Loader loading={true} className={s.loader} invert={!isEmpty} />
          </div>
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
          <CountrySelector localization={localization} label="Currency" currency={true} />
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

                <figure className={s.thumb}>
                  <img src={node.merchandise.image?.url} alt={node.merchandise.image?.altText} />
                </figure>

                <div className={s.details}>
                  <div>{node.merchandise.product.title}</div>
                  <div>{node.merchandise.selectedOptions.map(({ value }) => value).join(' ')}</div>
                  <div>
                    <button
                      className={s.minus}
                      onClick={() => updateQuantity(node.id, node.quantity - 1)}
                      disabled={node.quantity === 1}
                    >-</button>
                    {node.quantity}
                    <button
                      className={s.plus}
                      onClick={() => updateQuantity(node.id, node.quantity + 1)}
                    >+</button>
                  </div>
                </div>

                <div className={s.amount}>
                  <div className={s.price}>
                    {node.merchandise.price.amount} {node.cost.totalAmount.currencyCode}
                  </div>
                  <div>
                    <button className={s.remove} onClick={() => removeFromCart(node.id)}>
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

  return apiQuery<AllCartProductsQuery, AllCartProductsQueryVariables>(AllCartProductsDocument, {
    variables: {
      shopifyIds
    },
    revalidate: 60
  })
}
