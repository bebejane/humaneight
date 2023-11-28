import s from './AboutTwoColumnBlock.module.scss'
import { StructuredContent } from "next-dato-utils"

export type Props = {
  data: AboutTextBlockRecord
}

export default function AboutTextBlock({ data: { id, text } }: Props) {

  return (
    <section className={s.section}>
      <StructuredContent id={id} content={text} />
    </section>
  )

}