
import s from './ThumbnailContainer.module.scss'
import cn from 'classnames'

export type Props = {
  children: React.ReactNode[]
  className?: string
}

export default async function ThumbnailContainer({ children, className }: Props) {

  return (
    <div className={cn(s.container, "grid", className)}>
      {children}
    </div>
  )
}