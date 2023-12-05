'use client'

import s from './FaqItem.module.scss'
import cn from 'classnames'
import { StructuredContent } from 'next-dato-utils';
import { useEffect, useRef, useState } from 'react';

export type Props = {
  faq: FaqRecord
}

export default function FaqItem({ faq }: Props) {

  const animationDuration = 500;
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    const hash = window.location.hash;
    setSelected(hash === `#${faq.id}`);

    const maxHeight = Array.from(document.querySelectorAll(`[id^="answer-"]`)).sort((a, b) => a.scrollHeight > b.scrollHeight ? -1 : 1)[0].scrollHeight;
    setMaxHeight(maxHeight);

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
        id={`answer-${faq.id}`}
        className={cn(s.answer, selected && s.show, "light")}
        style={{
          maxHeight: selected ? `${ref.current?.scrollHeight}px` : '0px',
          transitionDuration: `${(animationDuration / maxHeight) * (ref.current?.scrollHeight ?? maxHeight)}ms`
        }}
        ref={ref}
      >
        <StructuredContent content={faq.answer} />
      </div>
    </li>
  )
}