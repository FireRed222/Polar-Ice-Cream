import DeliveryCard from '../../../components/DeliveryCard/DeliveryCard'
import s from './Delivery.module.css'

const Delivery = () => {
    const deliveryData = [
        {
            id: 1,
            src: "/truck.svg",
            title: "Free Shipping",
            text: "Last Chance! Free shipping on all orders ends today."
        },
        {
            id: 2,
            src: "/wok.svg",
            title: "Quick Packaging",
            text: "Last Chance! Free shipping on all orders ends today."
        },
        {
            id: 3,
            src: "/cash.svg",
            title: "100% Money Back",
            text: "Last Chance! Free shipping on all orders ends today."
        },
        {
            id: 4,
            src: "/delivery.svg",
            title: "Fast Delivery",
            text: "Last Chance! Free shipping on all orders ends today."
        },
    ]

  return (
    <section className={s.delivery}>
        {deliveryData.map((delivery) => (
            <DeliveryCard key={delivery.id} id={delivery.id} src={delivery.src} title={delivery.title} text={delivery.text}/>
        ))}
    </section>
  )
}

export default Delivery