import s from './AboutTwoColumnBlock.module.scss'
import { StructuredContent } from "next-dato-utils"
import { Image } from "react-datocms"

export type Props = {
  data: AboutTwoColumnBlockRecord
}

export default function AboutTwoColumnBlock({ data: { id, media, text } }: Props) {

  return (
    <section className={s.section}>
      <figure>
        {media.responsiveImage &&
          <Image data={media.responsiveImage} className={s.image} pictureClassName={s.picture} />
        }
      </figure>
      <div className={s.content}>
        <StructuredContent id={id} content={text} />
      </div>
    </section>
  )

}