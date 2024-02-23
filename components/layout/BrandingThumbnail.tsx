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
    <Link className={s.thumbnail} href={`/about/${link?.slug}`}>
      <figure className={cn(s[columns])}>
        {image?.responsiveImage &&
          <Image
            data={image.responsiveImage}
            className={cn(s.image)}
            placeholderClassName={s.picture}
            pictureClassName={s.picture}
          />
        }
        <h3 className="nav">{text}</h3>
        <figcaption>
          <p className="mid-small">{smallText}</p>
        </figcaption>
      </figure >
    </Link>
  )
}