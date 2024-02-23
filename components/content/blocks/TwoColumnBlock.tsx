import s from './TwoColumnBlock.module.scss'
import { Markdown } from 'next-dato-utils/components'
import cn from 'classnames'

type Props = {
  data: TwoColumnBlockRecord
  className?: string
}

export default function TwoColumnBlock({ data: { text }, className }: Props) {

  return (
    <Markdown className={cn(s.twoColumn, className, "mid")} content={text} />
  )
}