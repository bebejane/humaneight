import s from './BrandingThumbnail.module.scss'
import { Image } from 'react-datocms';
import Link from '@components//nav/Link';
import cn from 'classnames';

export type Props = {
  productBranding: ProductBrandingRecord,
  columns?: string | undefined
}

export default function BrandingThumbnail({ productBranding: { text, smallText, image, link }, columns = 'three' }: Props) {

  return (
    <Link className={cn(s[columns], s.thumbnail)} href={`/about/${link?.slug}`} aria-labelledby={`${image.id}-label`}>
      <figure>
        {image?.responsiveImage &&
          <Image
            data={image.responsiveImage}
            className={cn(s.image)}
            placeholderClassName={s.picture}
            imgClassName={s.picture}
            intersectionMargin={`0px 0px 100% 0px`}
          />
        }
        <h2 id={`${image.id}-label`}>{text}</h2>
        <figcaption>
          <p className="mid-small">{smallText}</p>
        </figcaption>
      </figure >
    </Link>
  )
}