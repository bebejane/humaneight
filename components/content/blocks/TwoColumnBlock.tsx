import s from './TwoColumnBlock.module.scss'
import cn from 'classnames'

type Props = {
  data: TwoColumnBlockRecord
  className?: string
}

export default function TwoColumnBlock({ data: { id, text }, className }: Props) {

  return (
    <p className={cn(s.twoColumn, className, "mid")}>
      {text}
    </p>
  )
}