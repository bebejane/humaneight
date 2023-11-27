'use client'

import s from './FaqItem.module.scss'
import cn from 'classnames'
import Link from 'next/Link'
import { StructuredContent } from 'next-dato-utils';
import * as blocks from '@components/blocks';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';

export type Props = {
  faq: FaqRecord
}

export default function FaqItem({ faq }: Props) {

  const pathname = usePathname();
  const [selected, setSelected] = useState(false)

  useLayoutEffect(() => {
    const hash = window.location.hash;
    setSelected(hash === `#${faq.id}`);
  }, [faq.id]);

  useEffect(() => {

    const hashChange = () => {
      //console.log(window.location.hash)
      //setSelected(window.location.hash === `#${faq.id}`)
    };
    window.addEventListener('hashchange', hashChange)
    return () => window.removeEventListener('hashchange', hashChange)
  }, [faq.id]);


  return (
    <li id={faq.id} key={faq.id} className={s.faq}>
      <a
        className={cn('body', s.question)}
        href={`#${faq.id}`}
        //scroll={false}
        onClick={(e) => { setSelected(!selected); e.preventDefault() }}

      >
        <h3 className="body">{faq.question}</h3>
        {selected ? '-' : '+'}
      </a>
      <div className={cn(s.answer, selected && s.show, "mid")}>
        <StructuredContent id={faq.id} content={faq.answer} blocks={blocks} />
      </div>
    </li>
  )
}