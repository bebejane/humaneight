'use client'

import s from './FaqItem.module.scss'
import cn from 'classnames'
import Content from '@components/content/Content'
import { useEffect, useRef, useState } from 'react';

export type Props = {
  faq: FaqRecord
}

export default function FaqItem({ faq }: Props) {

  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const hash = window.location.hash;
    setSelected(hash === `#${faq.id}`);
  }, [faq.id]);

  return (
    <li id={faq.id} key={faq.id} className={s.faq}>
      <a
        className={cn('body', s.question)}
        href={`#${faq.id}`}
        onClick={(e) => { setSelected(!selected); e.preventDefault() }}
      >
        <h3>{faq.question}</h3>
        <h3 className="symbol">
          {selected ? '-' : '+'}
        </h3>
      </a>
      <div
        className={cn(s.answer, selected && s.show, "light")}
        style={{
          maxHeight: selected ? `${ref.current?.scrollHeight}px` : '0px',
        }}
        ref={ref}
      >
        <Content content={faq.answer} />
      </div>
    </li>
  )
}