'use client'

import s from './FaqItem.module.scss'
import cn from 'classnames'
import Link from 'next/Link'
import { StructuredContent } from 'next-dato-utils';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export type Props = {
  faq: FaqRecord
}

export default function FaqItem({ faq }: Props) {

  const pathname = usePathname();
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
        <h3>
          {selected ? '-' : '+'}
        </h3>
      </a>
      <div
        className={cn(s.answer, selected && s.show, "light")}
        style={{ maxHeight: selected ? `${ref.current?.scrollHeight}px` : '0px' }}
        ref={ref}
      >
        <StructuredContent id={faq.id} content={faq.answer} />
      </div>
    </li>
  )
}