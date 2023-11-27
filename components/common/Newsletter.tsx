import s from './Newsletter.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
}

export default function Newsletter({ className }: Props) {

  return (
    <section className={cn(s.newsletter, className)} >
      <h3>Join our community</h3>
      <form>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </form>
    </section>
  )
}