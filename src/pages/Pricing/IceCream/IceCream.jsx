
import IceCreamList from './IceCream list/IceCreamList'
import s from './IceCream.module.css'
import IceCreamItem from './IceCreamItem/IceCreamItem'

const IceCream = () => {
  return (
    <section className={s.icecream}>
        <h2 className={s.ttl}>Our Product</h2>

        <IceCreamList/>

        <div className={s.container}>
            <IceCreamItem/>
        </div>
    </section>
  )
}

export default IceCream