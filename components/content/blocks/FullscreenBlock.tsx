'use client'

import s from './FullscreenBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms/image'
import { useInterval } from 'react-use'
import { useState } from 'react'

type Props = {
  data: FullscreenBlockRecord & { mediaMobile?: FileField, altMediaMobile?: FileField }
  className?: string
}

export default function FullscreenBlock({ data: { id, media, altMedia, mediaMobile, altMediaMobile }, className }: Props) {

  const medias = [media, altMedia].filter(el => el)
  const mediasMobile = [mediaMobile, altMediaMobile].filter(el => el)
  const columns = medias.length > 1 ? 'two' : 'one'
  const [mobileIndex, setMobileIndex] = useState(0)

  useInterval(() => {
    setMobileIndex((mobileIndex + 1) === mediasMobile.length ? 0 : mobileIndex + 1)
  }, 3000)

  return (
    <div className={cn(s.container, className, s[columns])}>
      {medias.map((m, i) =>
        m?.responsiveImage ?
          <figure key={i} className={s.desktop}>
            <Image
              data={m.responsiveImage}
              className={s.image}
              imgClassName={s.picture}
            />
          </figure>
          :
          <video
            key={i}
            autoPlay
            muted
            loop
            playsInline
            className={s.desktop}
            poster={`${m?.video?.thumbnailUrl}?time=0`}
            src={m?.video?.mp4Url}
          />
      )}
      {mediasMobile.map((m, i) =>
        m?.responsiveImage ?
          <figure key={i} className={cn(s.mobile, mobileIndex === i && s.visible)}>
            <Image
              data={m.responsiveImage}
              className={s.image}
              imgClassName={s.picture}
            //lazyLoad={false}
            //priority={true}
            />
          </figure>
          :
          <video
            key={i}
            autoPlay
            muted
            loop
            playsInline
            className={cn(s.mobile, mobileIndex === i && s.visible)}
            poster={`${m?.video?.thumbnailUrl}?time=0`}
            src={m?.video?.mp4Url}
          />
      )}
    </div>
  )
}

function setState(arg0: number) {
  throw new Error('Function not implemented.')
}
