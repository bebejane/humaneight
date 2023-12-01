'use client'

import s from './Logo.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils';
import { INSTRUMENTATION_HOOK_FILENAME } from 'next/dist/lib/constants';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { CSSProperties, useEffect, useState } from 'react';

const tagline = ['For', 'a', 'neurodiverse', 'world.']

export default function Logo() {

  const pathname = usePathname()
  const isHome = pathname === '/'
  const [style, setStyle] = useState<CSSProperties | undefined>({})
  const { scrolledPosition, viewportHeight } = useScrollInfo()
  const taglineRatio = Math.min((scrolledPosition / viewportHeight) * 4, 1)

  useEffect(() => {
    const ratio = Math.min((scrolledPosition / viewportHeight) * 2, 1)
    const maxLogoSize = 'var(--logo-size-intro)'
    const fontSize = `calc(calc(${maxLogoSize} * ${1 - ratio}) + calc(var(--logo-size) * ${ratio})`
    const marginTop = `calc(calc(calc(50vh - calc(${maxLogoSize} / 2 )) - calc(var(--navbar-height) / 2 )) * ${1 - ratio})`

    const style = pathname === '/' ? { fontSize, marginTop, opacity: 1 } : undefined
    setStyle(style)

  }, [pathname, scrolledPosition])


  return (
    <>
      <h1 className={cn('nav', s.logo, isHome && s.intro)} style={style}>
        <Link href="/">Humaneight</Link>
      </h1>
      <div className={cn('grid', s.tagline, isHome && s.intro)} style={{ opacity: 1 - taglineRatio }}>
        <h2>{tagline.map(word => <span>{word}</span>)}</h2>
      </div>
    </>
  )
}