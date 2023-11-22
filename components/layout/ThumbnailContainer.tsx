
import s from './ThumbnailContainer.module.scss'
import cn from 'classnames'

export type Props = {
  children: React.ReactNode[]
}

export default async function ThumbnailContainer({ children }: Props) {

  return (
    <div className={cn(s.container, "grid")}>
      {children}
    </div>
  )
}