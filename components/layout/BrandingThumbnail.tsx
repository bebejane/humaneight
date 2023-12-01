import s from './BrandingThumbnail.module.scss'
import { Image } from 'react-datocms';
import Link from '@components//nav/Link';
import cn from 'classnames';

export type Props = {
  productBranding: ProductBrandingRecord,
  columns?: string | undefined
}
export default function BrandingThumbnail({ productBranding: { text, smallText, image, }, columns = 'three' }: Props) {


  return (
    <figure className={cn(s.thumbnail, s[columns])}>
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
        <p className="mid light">{smallText}</p>
      </figcaption>
    </figure >
  )
}