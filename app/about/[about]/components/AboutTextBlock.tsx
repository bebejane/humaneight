import s from './AboutTextBlock.module.scss'
import Content from '@components/content/Content'
import cn from 'classnames'

export type Props = {
  data: AboutTextBlockRecord
}

export default function AboutTextBlock({ data: { id, text, layout } }: Props) {

  return (
    <section className={cn(s.section, layout && s[layout], "structured grid")}>
      <div className={s.content}>
        <Content className="big" content={text} />
      </div>
    </section>
  )

}