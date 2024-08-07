import s from './AboutThumbnail.module.scss'
import { Image } from 'react-datocms';
import Link from '@components//nav/Link';
import cn from 'classnames';

export type Props = {
  about: AboutRecord,
}
export default async function AboutThumbnail({ about }: Props) {

  return (
    <Link href={`/about/${about.slug}`} className={s.thumbnail}>
      <figure>
        {about.image &&
          <Image
            data={about.image?.responsiveImage}
            className={cn(s.image, s.main)}
            placeholderClassName={s.picture}
            imgClassName={s.picture}
          />
        }
        <figcaption>
          <h3 className="nav">{about.title}</h3>
        </figcaption>
      </figure>

    </Link>
  )
}