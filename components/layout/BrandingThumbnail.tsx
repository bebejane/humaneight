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
    <Link className={cn(s[columns], s.thumbnail)} href={`/about/${link?.slug}`}>
      <figure>
        {image?.responsiveImage &&
          <Image
            data={image.responsiveImage}
            className={cn(s.image)}
            placeholderClassName={s.picture}
            pictureClassName={s.picture}
            intersectionMargin={`0px 0px 100% 0px`}
          />
        }
        <h2 className="">{text}</h2>
        <figcaption>
          <p className="mid-small">{smallText}</p>
        </figcaption>
      </figure >
    </Link>
  )
}