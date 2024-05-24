'use client'

import s from './Eight.module.scss'
import { useEffect, useRef, useState } from 'react';
import { Image } from 'react-datocms';
import { usePathname } from 'next/navigation';
import { useWindowSize } from 'react-use';
import { useScrollInfo } from 'next-dato-utils/hooks';

export type Props = {
  general: GeneralQuery['general']
}

export default function Footer({ general }: Props) {

  const eightRef = useRef<HTMLDivElement>(null)
  const [randomEight, setRandomEight] = useState<{ image: any, style: any } | null>(null)
  const pathname = usePathname()
  const { width, height } = useWindowSize()
  const { isPageBottom } = useScrollInfo()

  useEffect(() => {
    const image = general?.eights.sort(_ => Math.random() > 0.5 ? 1 : -1)?.[0]
    if (!isPageBottom)
      setRandomEight(({ image, style: { opacity: 0 } }))
    else
      setRandomEight((prev) => prev ? ({ ...prev, style: { opacity: 1 } }) : null)
  }, [pathname, isPageBottom])

  useEffect(() => {
    const padding = 50;
    const imageWidth = eightRef.current?.clientWidth ?? 0
    const left = (Math.random() * width)

    const style = {
      opacity: !isPageBottom ? 0 : 1,
      bottom: `${10 + (Math.random() * 20)}%`,
      left: `${Math.min(Math.max(padding, left), (width - imageWidth - padding))}px`,
    }
    setRandomEight((prev) => prev ? ({ ...prev, style }) : null)
  }, [isPageBottom, width, height])

  if (!randomEight?.image?.responsiveImage) return null

  return (
    <figure className={s.eight} key={pathname} style={randomEight.style} ref={eightRef}>
      <Image data={randomEight?.image?.responsiveImage} usePlaceholder={false} lazyLoad={false} />
    </figure>
  );
}