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
  const [isHome, setIsHome] = useState(pathname === '/')
  const [style, setStyle] = useState<CSSProperties | undefined>({})
  const { scrolledPosition, viewportHeight } = useScrollInfo()
  const taglineRatio = Math.min((scrolledPosition / viewportHeight) * 4, 1)
  const ratio = Math.min((scrolledPosition / viewportHeight) * 2, 1)

  useEffect(() => {

    const maxLogoSize = 'var(--logo-size-intro)'
    const fontSize = `calc(calc(calc(${maxLogoSize} - var(--logo-size)) * ${1 - ratio}) + var(--logo-size))`
    const marginTop = `calc(calc(calc(50vh - calc(${maxLogoSize} / 2 )) - calc(var(--navbar-height) / 2 )) * ${1 - ratio})`
    const style = { fontSize, marginTop, opacity: 1 }
    setStyle(style)

  }, [scrolledPosition])

  useEffect(() => {
    setIsHome(pathname === '/')
  }, [pathname])

  return (
    <>
      <h1
        className={cn('nav', s.logo, isHome && s.intro, ratio > 0.9 && s.black)}
        style={isHome ? style : undefined}
      >
        <Link href="/">Humaneight</Link>
      </h1>
      <div className={cn('grid', s.tagline, isHome && s.intro)}>
        <h2>{tagline.map((word, i) =>
          <span
            key={i}
            className={cn(taglineRatio > 0.1 && s.hide)}
            style={{ transitionDelay: `${Math.min(Math.random(), 0.5)}s` }} >
            {word}
          </span>
        )}</h2>
      </div >
    </>
  )
}