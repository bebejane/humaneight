import s from './FullscreenBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms/image'

type Props = {
  data: FullscreenBlockRecord
  className?: string
}

export default function FullscreenBlock({ data: { id, media, altMedia }, className }: Props) {

  const medias = [media, altMedia].filter(el => el)
  const columns = medias.length > 1 ? 'two' : 'one'

  return (
    <div className={cn(s.container, className, s[columns])}>
      {medias.map((m, i) =>
        m?.responsiveImage ?
          <figure key={i}>
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
            poster={`${m?.video?.thumbnailUrl}?time=0`}
            src={m?.video?.mp4Url}
          />
      )}
    </div>
  )
}