import s from './StartEditorialBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from 'next/link'

type Props = {
  data: StartEditorialBlockRecord
}

export default async function StartEditorialBlock({ data: { id, text, buttonText, headline, media } }: Props) {

  return (
    <section className={s.editorial}>
      <div>
        <h3>{headline}</h3>
        <p>{text}</p>
        <button>{buttonText}</button>
      </div>
      <figure>
        {media.responsiveImage &&
          <Image data={media.responsiveImage} className={s.image} pictureClassName={s.picture} />
        }
      </figure>
    </section>
  )

}