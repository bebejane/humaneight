'use client'

import s from './Eight.module.scss'
import type { Menu } from "@lib/menu";
import { useEffect, useRef, useState } from 'react';
import { Image } from 'react-datocms';
import { usePathname } from 'next/navigation';
import { useWindowSize } from 'react-use';

export type Props = {
  general: GeneralQuery['general']
}

export default function Footer({ general }: Props) {

  const eightRef = useRef<HTMLDivElement>(null)
  const [randomEight, setRandomEight] = useState<{ image: any, style: any } | null>(null)
  const pathname = usePathname()
  const { width, height } = useWindowSize()

  useEffect(() => {
    const image = general?.eights.sort(_ => Math.random() > 0.5 ? 1 : -1)?.[0]
    const style = {}
    setRandomEight({ image, style })
  }, [pathname])

  useEffect(() => {
    console.log('setstyle')
    const style = {
      bottom: `${20 + (Math.random() * 10)}%`,
      left: `${(Math.random() * width)}px`,
      //transform: `rotate(${(Math.random() * 30)}deg)`
    }
    setRandomEight((prev) => prev ? ({ ...prev, style }) : null)
  }, [pathname, width, height])


  if (!randomEight?.image?.responsiveImage) return null

  return (
    <figure className={s.eight} key={pathname} style={randomEight.style} ref={eightRef}>
      <Image data={randomEight?.image?.responsiveImage} usePlaceholder={false} lazyLoad={false} />
    </figure>
  );
}