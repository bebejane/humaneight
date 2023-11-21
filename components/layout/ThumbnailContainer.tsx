
import s from './ThumbnailContainer.module.scss'

export type Props = {
  children: React.ReactNode[]
}

export default async function ThumbnailContainer({ children }: Props) {

  return (
    <div className={s.container}>
      {children}
    </div>
  )
}