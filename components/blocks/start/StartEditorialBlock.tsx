import s from './StartEditorialBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from 'next/link'

type Props = {
  data: StartEditorialBlockRecord
}

export default async function StartEditorialBlock({ data: { id, text, buttonText, headline, media, about } }: Props) {

  return (
    <section className={s.editorial}>
      <div>
        <h2>{headline}</h2>
        <p>{text}</p>
        <Link href={`/about/${about.slug}`}>
          <button className="full">{buttonText}</button>
        </Link>
      </div>
      <figure>
        {media.responsiveImage &&
          <Image data={media.responsiveImage} className={s.image} pictureClassName={s.picture} />
        }
      </figure>
    </section>
  )

}