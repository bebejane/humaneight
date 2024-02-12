import s from './Feedback.module.scss'
import cn from 'classnames'

export type Props = {

}

export default async function Feedback({ }: Props) {

  return (
    <section className={cn(s.feedback, "grid")}>
      <h3 className="nav">Share your unique knowledge and experiences with us.
      </h3>
      <div className={s.wrapper}>
        <p>Your voice is essential in our journey towards creating a neurodiverse world. Please share your experiences, thoughts, and ideas. Your input will be the backbone for future explorations and things to come.</p>
        <button>Submit your view</button>

        <form>
          <p className="mid">Experiences with Our Garments</p><p className="light mid">
            Please describe your experience with the garments you purchased from us. What did you like or dislike about them? How did they meet your needs or fall short?
          </p>
          <input></input>

          <p className="mid"> Living as a Neurodivergent Individual</p><p className="light mid">
            Please describe the challenges you might face as a neurodivergent individual in todays world. What aspects of neurotypical daily life do you find most challenging, what can be improved?
          </p>
          <input></input>

          <p className="mid">Experiences with Our Garments</p><p className="light mid">
            Please describe your experience with the garments you purchased from us. What did you like or dislike about them? How did they meet your needs or fall short?
          </p>
          <input></input>
        </form>
      </div >
    </section >
  )
}
