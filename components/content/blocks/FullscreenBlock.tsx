import s from './FullscreenBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms/image'

type Props = {
  data: FullscreenBlockRecord & { mediaMobile?: FileField, altMediaMobile?: FileField }
  className?: string
}

export default function FullscreenBlock({ data: { id, media, altMedia, mediaMobile, altMediaMobile }, className }: Props) {

  const medias = [media, altMedia].filter(el => el)
  const mediasMobile = [mediaMobile, altMediaMobile].filter(el => el)
  const columns = medias.length > 1 ? 'two' : 'one'

  return (
    <div className={cn(s.container, className, s[columns])}>
      {medias.map((m, i) =>
        m?.responsiveImage ?
          <figure key={i} className={s.desktop}>
            <Image
              data={m.responsiveImage}
              className={s.image}
              pictureClassName={s.picture}
              lazyLoad={false}
              priority={true}
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
          <figure key={i} className={s.mobile}>
            <Image
              data={m.responsiveImage}
              className={s.image}
              pictureClassName={s.picture}
              lazyLoad={false}
              priority={true}
            />
          </figure>
          :
          <video
            key={i}
            autoPlay
            muted
            loop
            playsInline
            className={s.mobile}
            poster={`${m?.video?.thumbnailUrl}?time=0`}
            src={m?.video?.mp4Url}
          />
      )}
    </div>
  )
}