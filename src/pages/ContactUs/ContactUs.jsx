import { useContext } from 'react'
import s from './ContactUs.module.css'
import { useForm } from "react-hook-form"
import { AppContext } from '../../context/Context'


const ContactUs = () => {

  const { tgMsg } = useContext(AppContext);

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => tgMsg(data)

  return (
    <section className={s.contactUs}>
      <div className={s.container}>
        <h2 className={s.ttl}>Have a Question in Mind? <br/> Let us help you</h2>

        <form className={s.question} onSubmit={handleSubmit(onSubmit)}>
          <input className={s.questionInput} type="text" placeholder='Enter your question' {...register("text")}/>
          <button className={s.btn} type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs