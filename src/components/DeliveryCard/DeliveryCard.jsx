import s from './DeliveryCard.module.css'

const DeliveryCard = ({id, src, title, text}) => {
  return (
    <div className={s.deliveryCard}>
        <img src={src} alt={`deliveryData_${id}`} />
        <h2 className={s.ttl}>{title}</h2>
        <p className={s.text}>{text}</p>
    </div>
  )
}

export default DeliveryCard