import s from './FullscreenBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms/image'

type Props = {
  data: FullscreenBlockRecord
  className?: string
}

export default function FullscreenBlock({ data: { id, media }, className }: Props) {

  return (
    <div className={cn(s.container, className)}>
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