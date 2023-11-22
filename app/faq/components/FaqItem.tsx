'use client'

import s from './FaqItem.module.scss'
import cn from 'classnames'
import Link from "next/link"
import StructuredContent from '@components/layout/StructuredContent';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export type Props = {
  faq: FaqRecord
}

export default function FaqItem({ faq }: Props) {

  const params = useParams();
  const pathname = usePathname();
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const hash = window.location.hash;
    setSelected(hash === `#${faq.id}`);
    if (!hash) window.scrollTo(0, 0);
  }, [params, faq.id]);

  return (
    <li key={faq.id} className={s.faq}>
      <div className={s.question}>
        <h3 className="body">{faq.question}</h3>
        <Link className="body" href={selected ? pathname : `#${faq.id}`} scroll={true}>
          {selected ? '-' : '+'}
        </Link>
      </div>
      <div className={cn(s.answer, selected && s.show, "mid")} id={faq.id}>
        <StructuredContent id={faq.id} content={faq.answer} />
      </div>
    </li>
  )
}