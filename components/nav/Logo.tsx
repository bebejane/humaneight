'use client'

import s from './Logo.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { CSSProperties, useEffect, useState } from 'react';

const tagline = ['For', 'a', 'neurodiverse', 'world.']

export default function Logo() {

  const pathname = usePathname()
  const [isHome, setIsHome] = useState(pathname === '/')
  const [style, setStyle] = useState<CSSProperties | undefined>({})
  const [delays, setDelays] = useState<number[]>([])
  const { scrolledPosition, viewportHeight } = useScrollInfo()
  const taglineTrigger = Math.min((scrolledPosition / viewportHeight), 1) > 0.02
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

  useEffect(() => {

    function genRand(min: number, max: number, decimalPlaces: number): number {
      var rand = Math.random() * (max - min) + min;
      var power = Math.pow(10, decimalPlaces);
      return Math.floor(rand * power) / power;
    }

    setDelays(new Array(tagline.length).fill(0).map(() => genRand(0.0, 0.5, 2)))

  }, [taglineTrigger])

  return (
    <>
      <h1
        className={cn(s.logo, isHome && s.intro, ratio > 0.9 && s.black)}
        style={isHome ? style : undefined}
      >
        <Link href="/">Humaneight</Link>
      </h1>
      <div className={cn('grid', s.tagline, isHome && s.intro)}>
        <h2>{tagline.map((word, i) =>
          <span
            key={i}
            className={cn(taglineTrigger && s.hide)}
            style={{ transitionDelay: `${delays?.[i] ?? 0}s` }} >
            {word}
          </span>
        )}</h2>
      </div >
    </>
  )
}