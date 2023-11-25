import Link from '@components//nav/Link'
import s from './not-found.module.scss'

export default function NotFound() {
  return (
    <div className={s.container}>
      <strong>404 Not Found</strong>
      <Link href="/">Return Home</Link>
    </div>
  )
}