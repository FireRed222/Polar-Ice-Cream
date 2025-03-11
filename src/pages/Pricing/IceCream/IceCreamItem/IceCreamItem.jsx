import s from './IceCreamItem.module.css'
import Button from '../../../../components/Button/Button'
import { useContext } from 'react'
import { AppContext } from '../../../../context/Context'

const IceCreamItem = () => {
    const { pricing, IceCreamItemData, IceCreamItemFilter } = useContext(AppContext)

  return (
    <div className={s.iceCreamItem}>
    {pricing > 0 ? (IceCreamItemFilter.map((item) => (
        <div key={item.id} className={s.block}>
            <img className={s.img} src={item.src} alt={item.src} />

            <div className={s.description}>
                <h3 className={s.name}>{item.ttl}</h3>
                <p className={s.subttl}>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>

                <p className={s.price}>$19.55 <span className={s.oldPrice}>$22.55</span></p>
                <Button />
            </div>
        </div>
    ))):(
        IceCreamItemData.map((item) => (
            <div key={item.id} className={s.block}>
                <img className={s.img} src={item.src} alt={item.src} />
    
                <div className={s.description}>
                    <h3 className={s.name}>{item.ttl}</h3>
                    <p className={s.subttl}>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
    
                    <p className={s.price}>$19.55 <span className={s.oldPrice}>$22.55</span></p>
                    <Button />
                </div>
            </div>
        ))
    )}
    </div>
  )
}

export default IceCreamItem