'use client'

import s from './Logo.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

const tagline = ['For', 'a', 'neurodiverse', 'world.']

export default function Logo({ showMenu }: { showMenu: boolean }) {

  const pathname = usePathname()
  const [isHome, setIsHome] = useState(pathname === '/')
  const [delays, setDelays] = useState<number[]>([])
  const { scrolledPosition, viewportHeight } = useScrollInfo()
  const [ratio, setRatio] = useState(0)
  const [taglineTrigger, setTaglineTrigger] = useState<boolean | null>(null)
  const [ref, { bottom: logoBottom }] = useMeasure({ scroll: true })

  useEffect(() => {
    setIsHome(pathname === '/')
  }, [pathname])

  useEffect(() => {
    const ratio = showMenu ? 1 : Math.min((scrolledPosition / viewportHeight) * 2, 1)
    setRatio(ratio)
  }, [scrolledPosition, showMenu])

  useEffect(() => {

    function genRand(min: number, max: number, decimalPlaces: number): number {
      var rand = Math.random() * (max - min) + min;
      var power = Math.pow(10, decimalPlaces);
      return Math.floor(rand * power) / power;
    }

    setDelays(new Array(tagline.length).fill(0).map(() => genRand(0.0, 0.5, 2)))

  }, [taglineTrigger])

  useEffect(() => {
    const taglineTrigger = Math.min((scrolledPosition / viewportHeight), 1) > 0
    setTaglineTrigger(taglineTrigger)
  }, [scrolledPosition, viewportHeight])

  const maxLogoSize = 'var(--logo-size-intro)'
  const heroHeight = 'calc(var(--hero-height) / 2)'
  const fontSize = `calc(calc(calc(${maxLogoSize} - var(--logo-size)) * ${1 - ratio}) + var(--logo-size))`
  const marginTop = `calc(calc(calc(${heroHeight} - calc(${maxLogoSize} / 1.8 )) + var(--navbar-height)) * ${1 - ratio})`
  const style = { fontSize, marginTop }

  return (
    <>
      <h1
        className={cn(s.logo, isHome && s.intro, ratio > 0.9 && s.black)}
        style={isHome ? style : undefined}
        ref={ref}
      >
        <Link href="/">Humaneight</Link>
      </h1>
      <div
        className={cn('grid', s.tagline, (!isHome || showMenu || taglineTrigger === null) && s.hide)}
        style={{ top: logoBottom }}
      >
        <h2>{tagline.map((word, i) =>
          <span
            key={`${i}-${taglineTrigger}`}
            className={cn(taglineTrigger && s.hide)}
            style={{ animationDelay: taglineTrigger === true ? '0s' : `${delays?.[i] ?? 0}s` }}
          >
            {word}
          </span>
        )}</h2>
      </div >
    </>
  )
}