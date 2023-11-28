import s from './FullscreenBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms/image'

type Props = {
  data: FullscreenBlockRecord
}

export default async function FullscreenBlock({ data: { id, media } }: Props) {
  const isImage = media?.responsiveImage !== undefined

  return (
    <div className={cn(s.container)}>
      {media?.responsiveImage ?
        <figure>
          <Image
            data={media?.responsiveImage}
            className={s.image}
            pictureClassName={s.picture}
          />
        </figure>
        :
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={media?.video?.thumbnailUrl}
          //@ts-ignore
          src={media?.video?.mp4high}
        />
      }
    </div>
  )
}