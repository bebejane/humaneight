'use client'

import s from './Logo.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { CSSProperties, useEffect, useState } from 'react';

export default function Logo() {

  const pathname = usePathname()
  const [style, setStyle] = useState<CSSProperties | undefined>({ opacity: 1 })
  const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo()

  useEffect(() => {
    const ratio = Math.min((scrolledPosition / viewportHeight) * 2, 1)
    const maxLogoSize = 'var(--logo-size-intro)'
    const fontSize = `calc(calc(${maxLogoSize} * ${1 - ratio}) + calc(var(--logo-size) * ${ratio})`
    const marginTop = `calc(calc(calc(50vh - calc(${maxLogoSize} / 2 )) - calc(var(--navbar-height) / 2 )) * ${1 - ratio})`

    const style = pathname === '/' ? { fontSize, marginTop } : undefined
    setStyle(style)

  }, [pathname, scrolledPosition])

  return (
    <>
      <h1 className={cn('nav', s.logo)} style={style}>
        <Link href="/">Humaneight</Link>
      </h1>
      <div className={cn('grid', s.tagline)}>
        <h2><span>For</span> <span>a</span> <span>neurodiverse</span> <span>world.</span></h2>
      </div>
    </>
  )
}