import s from './MobileApp.module.css'
import Tutorial from './Tutorial/Tutorial'

const MobileApp = () => {
   const mobileAppData = [
      {
         id: 1,
         src: "/hand.svg",
         text: "Select Your Food",
      },
      {
         id: 2,
         src: "/cart.svg",
         text: "Add To Cart",
      },
      {
         id: 3,
         src: "/note.svg",
         text: "Order Your Food",
      },
   ]

  return (
    <section className={s.mobileApp}>
      <div className={s.container}>
         <img className={s.app1} src="/app1.svg" alt="app1" />
         <img className={s.app2} src="/app2.svg" alt="app2" />

         <div className={s.block}>
            <h2 className={s.ttl}>Simple Way To Order Your Food</h2>

            <p className={s.text}>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.</p>

            <div className={s.box}>
               {mobileAppData.map((el) => (
                  <Tutorial key={el.id} src={el.src} text={el.text}/>
               ))}
            </div>
            
            <div className={s.links}>
               <a className={s.link} target='blanc' href="https://play.google.com/" ><img src="/googleplay.svg" alt="google" /></a>
               <a className={s.link} target='blanc' href="https://www.apple.com/app-store/"><img src="/appstore.svg" alt="appStore" /></a>
            </div>
         </div>
      </div>
    </section>
  )
}

export default MobileApp
