'use client'

import s from './AboutThumbnail.module.scss'
import { Image } from 'react-datocms';
import Link from '@components//nav/Link';
import cn from 'classnames';

export type Props = {
  about: AboutRecord,
}
export default function AboutThumbnail({ about }: Props) {

  return (
    <Link href={`/about/${about.slug}`} className={s.thumbnail}>

      <figure>
        {about.image &&
          <Image
            data={about.image?.responsiveImage}
            className={cn(s.image, s.main)}
            placeholderClassName={s.picture}
            pictureClassName={s.picture}
          />
        }
        <figcaption>
          <h3 className="mid">{about.title}</h3>
        </figcaption>
      </figure>

    </Link>
  )
}