import s from './Error.module.css'

const Error = () => {
  return (
    <section className={s.error}>
      <div className={s.container}>
         <h1 className={s.ttl}>404</h1>

         <p className={s.subttl}>
            This Page Was Not Found
         </p>
      </div>
    </section>
  )
}

export default Error