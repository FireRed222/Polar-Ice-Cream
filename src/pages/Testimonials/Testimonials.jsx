import s from './Testimonials.module.css'
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Fragment, useState } from 'react';
import MobileApp from './MobileApp/MobileApp';


const Testimonials = () => {
  const [testimonialsSwiper, setTestimonialsSwiper] = useState(1)

  const TestimonialsData = [
    {
      id: 1,
      src: "/woman.svg",
      ttl: "Adele A. McNeill",
      subttl: "AMERICAN",
      text: "Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.",
    },
    {
      id: 2,
      src: "/woman.svg",
      ttl: "Baby No Money",
      subttl: "CANADIAN",
      text: "Thanks a lot for the prompt service. Really appreciate.",
    },
    {
      id: 3,
      src: "/woman.svg",
      ttl: "Lana Del Ray",
      subttl: "AMERICAN",
      text: "Thanks a lot for the prompt service. Add a joy of best Taste. Foodie Moments.",
    },
    {
      id: 4,
      src: "/woman.svg",
      ttl: "LeBron James",
      subttl: "AMERICAN",
      text: "Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments. Very Cool, Very Nice.",
    },
    {
      id: 5,
      src: "/woman.svg",
      ttl: "Tom S. Holland",
      subttl: "BRITISH",
      text: "Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments. I webbed everywhere.",
    },
  ]

  const TestimonialsItemFilter = TestimonialsData.filter((el) => el.id === testimonialsSwiper);



  return (
    <>
      <div className={s.testimonials}>
          <div className={s.container}>
            {TestimonialsItemFilter.map((item) => (
                <Fragment key={item.id}>
                  <div className={s.block}>
                      <img src={item.src} alt="" />

                      <div className={s.box}>
                          <h2 className={s.ttl}>{item.ttl}</h2>
                          <h3 className={s.subttl}>{item.subttl}</h3>
                      </div>
                  </div>

                  <p className={s.text}>{item.text}</p>
                </Fragment>
            ))}


              <div className={s.swiper}>
                <img src="/left_arrow.svg" alt="left" className={`${s.leftbtn} leftbtn`}/>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={26}
                  slidesPerView={3}
                  navigation={{
                    prevEl: ".leftbtn",
                    nextEl: ".rightbtn",
                  }}
                  centeredSlides
                  onSlideChange={(swiper) => setTestimonialsSwiper(swiper.activeIndex + 1)}
                  className="mySwiper"
                >
                  {TestimonialsData.map((el) => (
                    <SwiperSlide key={el.id}>
                      <img className="human" src={el.src} alt={el.src} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <img src="/right_arrow.svg" alt="right" className={`${s.rightbtn} rightbtn`}></img>
              </div>

          </div>

          <img className={s.icecream} src="/threeicecreams.svg" alt="" />
      </div>
      
      <MobileApp/>
    </>
    
   
  )
}

export default Testimonials