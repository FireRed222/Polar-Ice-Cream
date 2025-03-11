import Button from '../Button/Button'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.block}>
          <h2 className={s.subttl}>Sweet fun, full of milk.</h2>

          <h1 className={s.ttl}>Feel inside cold with our delicious <span className={s.pink}>ice-cream.</span></h1>

          <p className={s.txt}>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</p>

          <Button/>
        </div>

        <img className={s.img} src="/icecreammix.png" alt="icecreammix" />
      </div>
    </header>
  )
}

export default Header