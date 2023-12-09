import s from './Feedback.module.scss'
import cn from 'classnames'

export type Props = {

}

export default async function Feedback({ }: Props) {

  return (
    <section className={s.feedback}>
      <h3>Can we make it better? Something you don’t understand?</h3>
      <button>Contact us and let us know!</button>
    </section>
  )
}
