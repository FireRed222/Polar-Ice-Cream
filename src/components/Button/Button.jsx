import { Link } from 'react-router-dom'
import s from './Button.module.css'

const Button = ({text = "Buy Now", width = 165, height = 49}) => {
  return (
    <>
        <Link to={""} className={s.btn} style={{width: width, height: height}}>{text}</Link>
    </>
  )
}

export default Button