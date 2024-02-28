import NewsletterForm from './NewsletterForm'
import s from './NewsletterSection.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
}

export default function Newsletter({ className }: Props) {

  return (
    <section className={cn(s.newsletterSection, className)} >
      <h3>Join our community. Sign up for our newsletter.</h3>
      <NewsletterForm className={s.form} />
    </section>
  )
}