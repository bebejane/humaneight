
import s from './StartEditorialBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from '@components//nav/Link'
import LottieAnimation from '@components/common/LottieAnimation'
import { VideoPlayer } from 'next-dato-utils/components'

type Props = {
  data: StartEditorialBlockRecord
}

export default async function StartEditorialBlock({ data: { id, text, buttonText, headline, media, mediaOnTop, lottieAnimation, about } }: Props) {

  return (
    <section id={id} className={s.editorial} aria-labelledby={`${id}-heading`}>
      <div>
        <article>
          <h2 id={`${id}-heading`} className="veryBig">{headline}</h2>
          <p className="">{text}</p>
          <Link href={`/about/${about.slug}`}>
            <button className="full">{buttonText}</button>
          </Link>
        </article>
      </div>
      <figure>
        {media.responsiveImage &&
          <Image
            data={media.responsiveImage}
            className={s.image}
            pictureClassName={s.picture}
            intersectionMargin={`0px 0px 100% 0px`}
          />
        }
        {media?.video &&
          <VideoPlayer
            data={media}
            className={cn(s.video, s.image)}
          />
        }
        {lottieAnimation?.url &&
          <LottieAnimation url={lottieAnimation.url} className={s.animation} />
        }
      </figure>
    </section>
  )
}