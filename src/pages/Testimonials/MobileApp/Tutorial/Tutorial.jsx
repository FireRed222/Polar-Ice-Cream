import s from './Tutorial.module.css'

const Tutorial = ({ src, text }) => {
  return (
    <div className={s.tutorial}>
      <div className={s.block}>
        <img src={src} alt={src} />
      </div>
    
      <p className={s.text}>{text}</p>
    </div>
  )
}

export default Tutorial