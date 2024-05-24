import s from './Loader.module.scss'
import cn from 'classnames'

export type Props = {
  loading?: boolean
  className?: string
  invert?: boolean
}

export default function Loader({ loading = true, invert = false, className }: Props) {
  if (!loading) return null

  return (
    <div role="alert" aria-busy="true" className={cn(s.loader, invert && s.invert, className)} >
      <span className={s.spinner} />
    </div>
  )
}