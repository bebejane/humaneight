'use client'

import s from './HomeSplash.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms/image'
import { useInterval } from 'react-use'
import { useEffect, useState } from 'react'

type Props = {
  data: StartQuery['start']
}

//@ts-ignore
export default function HomeSplash({ data: { blackLogo, media, altMedia, mediaMobile, altMediaMobile } }: Props) {

  const medias = [media, altMedia].filter(el => el)
  const mediasMobile = [mediaMobile, altMediaMobile].filter(el => el)
  const columns = medias.length > 1 ? 'two' : 'one'
  const [mobileIndex, setMobileIndex] = useState(0)

  useInterval(() => {
    setMobileIndex((mobileIndex + 1) === mediasMobile.length ? 0 : mobileIndex + 1)
  }, 3000)

  useEffect(() => {
    document.documentElement.style.setProperty('--logo-color', blackLogo ? 'var(--black)' : 'var(--white)')
  }, [blackLogo])

  return (
    <div className={cn(s.container, s[columns])}>
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