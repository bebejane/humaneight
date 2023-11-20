'use client'

import React, { useEffect } from 'react'
import useCart from '@shopify/hooks/useCart'

export type AddToCartButtonProps = {
  merchandiseId?: string
  quantity: number
  disabled?: boolean

}

export default function AddToCartButton({ merchandiseId, quantity = 1, disabled = false }: AddToCartButtonProps) {
  const [cart, addToCart, updating, error] = useCart((state) => [state.cart, state.addToCart, state.updating, state.error])

  const handleAddToCart = () => {
    if (!disabled && merchandiseId) {
      console.log('addToCart', merchandiseId, quantity)
      addToCart({ merchandiseId, quantity });
    }
  }

  return (
    <button onClick={handleAddToCart} disabled={disabled ?? undefined} type="button">
      Add to cart
    </button>
  )

}