import s from './AboutTextBlock.module.scss'
import { StructuredContent } from "next-dato-utils"
import cn from 'classnames'

export type Props = {
  data: AboutTextBlockRecord
}

export default function AboutTextBlock({ data: { id, text } }: Props) {

  return (
    <section className={cn(s.section, "structured grid")}>
      <div className={s.content}>
        <StructuredContent className="big" content={text} />
      </div>
    </section>
  )

}