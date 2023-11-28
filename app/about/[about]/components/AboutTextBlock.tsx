import s from './AboutTwoColumnBlock.module.scss'
import { StructuredContent } from "next-dato-utils"

export type Props = {
  data: AboutTextBlockRecord
}

export default function AboutTextBlock({ data: { id, text } }: Props) {

  return (
    <section className={s.section}>
      <StructuredContent className="nav structured" id={id} content={text} />
    </section>
  )

}