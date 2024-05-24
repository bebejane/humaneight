import NewsletterForm from '@components/forms/NewsletterForm'
import s from './NewsletterSection.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
}

export default function Newsletter({ className }: Props) {

  return (
    <section className={cn(s.newsletterSection, className)} aria-labelledby="newsletter-section-header">
      <h3 id="newsletter-section-header">Join our community. Sign up for our newsletter.</h3>
      <NewsletterForm className={s.form} />
    </section>
  )
}