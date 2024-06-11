'use client'
import s from './page.module.scss';
import cn from 'classnames';
import { useCart } from '../../shopify';
import useCountry from '../../shopify/hooks/useCountry';

export type LegalParams = {
  params: { legal: string }
}


export default function Test({ params }: LegalParams) {

  const [addToCart, cart] = useCart((state) => [state.addToCart, state.cart])
  const country = useCountry()

  const handleAddToCart = () => {
    const merchandiseId = "gid://shopify/ProductVariant/45738050191628"
    addToCart({ merchandiseId, quantity: 1 }, country);
  }

  return (
    <>
      <article className={cn(s.container, "grid legal structured")}>
        <p>
          <button onClick={handleAddToCart}>Add test product</button>
        </p>
      </article>
    </>
  )
}
