'use client'

import s from './AddToCartButton.module.scss'
import React, { useEffect } from 'react'
import useCart from '@shopify/hooks/useCart'
import cn from 'classnames'
import useCountry from '../../shopify/hooks/useCountry'

export type AddToCartButtonProps = {
  merchandiseId?: string
  quantity: number
  disabled?: boolean
  className?: string
  label: string
}

export default function AddToCartButton({ className, label, merchandiseId, quantity = 1, disabled = false }: AddToCartButtonProps) {
  const country = useCountry()
  const [cart, addToCart, updating, error] = useCart((state) => [state.cart, state.addToCart, state.updating, state.error])

  const handleAddToCart = () => {
    if (!disabled && merchandiseId) {
      addToCart({ merchandiseId, quantity }, country);
    }
  }

  const handleMouseOver = (e: React.MouseEvent) => {
    const accessability = document.getElementById('accessiblyAppWidgetButton');

    if (e.type === 'mouseenter') {
      accessability?.setAttribute('aria-hidden', e.type === 'mouseenter' ? 'true' : 'false')
      accessability?.style.setProperty('display', e.type === 'mouseenter' ? 'none' : 'block')
    }

  }

  return (
    <button
      className={cn(s.button, className, "full")}
      onClick={handleAddToCart}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
      disabled={disabled ?? undefined}
      type="button"
    >
      {label}
    </button>
  )

}