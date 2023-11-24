'use client'

import s from './FaqItem.module.scss'
import cn from 'classnames'
import Link from '@components//nav/Link'
import StructuredContent from '@components/layout/StructuredContent';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export type Props = {
  faq: FaqRecord
}

export default function FaqItem({ faq }: Props) {

  const pathname = usePathname();
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const hash = window.location.hash;
    setSelected(hash === `#${faq.id}`);
  }, [faq.id]);

  return (
    <li id={faq.id} key={faq.id} className={s.faq}>
      <Link className={cn('body', s.question)} href={selected ? pathname : `#${faq.id}`} scroll={false}>
        <h3 className="body">{faq.question}</h3>
        {selected ? '-' : '+'}
      </Link>
      <div className={cn(s.answer, selected && s.show, "mid")}>
        <StructuredContent id={faq.id} content={faq.answer} />
      </div>
    </li>
  )
}