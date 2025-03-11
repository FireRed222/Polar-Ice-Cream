import Button from '../../components/Button/Button'
import s from './Product.module.css'

const Product = () => {
  return (
    <section className={s.product}>
        <div className={s.container}>
            <div className={s.block}>
                <h2 className={s.ttl}>Brown Sugar Oatmeal</h2>

                <p className={s.text}>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>

                <Button text='See Details'/>
            </div>

            <img className={s.img} src="/brownsugaroatmeal.svg" alt="" />
        </div>
    </section>
  )
}

export default Product
