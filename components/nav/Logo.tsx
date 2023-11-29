'use client'

import { set } from 'date-fns';
import s from './Logo.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { CSSProperties, use, useEffect, useState } from 'react';

export default function Logo() {

  const pathname = usePathname()
  const [style, setStyle] = useState<CSSProperties | undefined>(undefined)

  const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo()

  useEffect(() => {
    const ratio = Math.min((scrolledPosition / viewportHeight) * 2, 1)
    const fontSize = `calc(var(--navSize) * 1.2 * ${2 - ratio})`
    const marginTop = `calc(var(--navbar-height)) - calc(50vh * ${1 - ratio}))`

    const style = pathname === '/' ? { fontSize, marginTop } : undefined
    setStyle(style)

  }, [pathname, scrolledPosition])


  return (
    <h1 className={cn('nav', s.logo)} style={style}>
      <Link href="/">Humaneight</Link>
    </h1>
  )
}