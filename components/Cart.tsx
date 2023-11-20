'use client'

import React, { useEffect } from 'react'
import styles from './Cart.module.scss'
import useCart from '@shopify/hooks/useCart'
import useCustomer from '@shopify/hooks/useCustomer'
import { useShallow } from 'zustand/react/shallow'
import Link from 'next/link'
import cn from 'classnames'

export type CartProps = {}

export default function Cart({ }: CartProps) {

  const [cart, clearCart, createCart, updateBuyerIdentity, updating, error] = useCart((state) => [state.cart, state.clearCart, state.createCart, state.updateBuyerIdentity, state.updating, state.error])
  const [customer, customerAccessToken] = useCustomer(useShallow((state) => [state.customer, state.customerAccessToken]))
  const isEmpty = (!cart || cart.lines.edges.length === 0)

  useEffect(() => {
    !cart && createCart()
  }, [cart, createCart])

  useEffect(() => {

    if (customerAccessToken && cart && cart?.buyerIdentity?.customer?.id !== customer?.id) {
      const input = { buyerIdentity: { customerAccessToken: customerAccessToken.accessToken }, cartId: cart.id } as any
      updateBuyerIdentity(input)
    } else {
      console.log('no customerAccessToken')
    }
  }, [customerAccessToken, updateBuyerIdentity, cart, customer])

  return (
    <div id="cart" className={cn(styles.cart, updating && styles.updating)} >
      <h2>Cart</h2>
      {cart?.buyerIdentity &&
        <p>
          {cart.buyerIdentity.customer?.displayName}
        </p>}
      {isEmpty && 'Empty...'}
      {error ? error : ''}

      <table>
        <tbody>
          {cart?.lines.edges.map(({ node }, idx) =>
            <tr key={idx}>
              <td>{node.quantity}</td>
              <td>X</td>
              <td>{node.merchandise.product.title}</td>
              <td>{node.cost.totalAmount.amount}</td>
            </tr>
          )}
        </tbody>
      </table>

      <button onClick={() => clearCart()}>Clear</button>
      <Link href="/cart">
        <button>Go to cart</button>
      </Link>
    </div>
  )
}