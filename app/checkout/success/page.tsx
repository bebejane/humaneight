'use client'

import { useCart } from '@/shopify';
import { useEffect } from 'react';

export type AboutParams = {
  params: { about: string }
}

export default function ClearCart() {

  const [clearCart] = useCart((state) => [state.clearCart])

  useEffect(() => {
    clearCart()
    setTimeout(() => window.location.href = '/', 500)
  }, [])

  return (
    <>
      Redirecting...
    </>

  )
}