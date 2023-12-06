import s from './StartEditorialBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from '@components//nav/Link'

type Props = {
  data: StartEditorialBlockRecord
}

export default function StartEditorialBlock({ data: { id, text, buttonText, headline, media, mediaOnTop, about } }: Props) {

  return (
    <section className={s.editorial}>
      <div>
        <h2>{headline}</h2>
        <p className="">{text}</p>
        <Link href={`/about/${about.slug}`}>
          <button className="full">{buttonText}</button>
        </Link>
      </div>
      <figure>
        {media.responsiveImage &&
          <Image data={media.responsiveImage} className={s.image} pictureClassName={s.picture} />
        }
        {mediaOnTop?.video &&
          <video
            //@ts-ignore
            src={mediaOnTop.video.mp4high}
            className={cn(s.video, s.image)}
            autoPlay
            muted
            loop
            playsInline
          />
        }
      </figure>
    </section>
  )

}