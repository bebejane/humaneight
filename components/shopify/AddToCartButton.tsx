'use client'

import React, { useEffect } from 'react'
import useCart from '@shopify/hooks/useCart'

export type AddToCartButtonProps = {
  merchandiseId?: string
  quantity: number
  disabled?: boolean
  className?: string
  label: string
}

export default function AddToCartButton({ className, label, merchandiseId, quantity = 1, disabled = false }: AddToCartButtonProps) {
  const [cart, addToCart, updating, error] = useCart((state) => [state.cart, state.addToCart, state.updating, state.error])

  const handleAddToCart = () => {
    if (!disabled && merchandiseId) {
      addToCart({ merchandiseId, quantity });
    }
  }

  return (
    <button
      className={className}
      onClick={handleAddToCart}
      disabled={disabled ?? undefined}
      type="button"
    >
      {label}
    </button>
  )

}