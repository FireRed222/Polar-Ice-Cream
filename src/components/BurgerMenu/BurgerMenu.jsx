import { Link } from 'react-router-dom';
import s from './BurgerMenu.module.css'
import { MdClose, MdOutlineLightMode } from "react-icons/md";
import { useContext } from 'react';
import { AppContext } from '../../context/Context';
import Button from '../Button/Button';
import { LuMoonStar } from 'react-icons/lu';

const BurgerMenu = () => {
  const {isBurger, switchBurger, switchDarkMode, isDarkMode} = useContext(AppContext);


  return (
    <aside className={isBurger ? `${s.burgerMenu} ${s.active}` : s.burgerMenu} onClick={switchBurger}>
      <div className={s.container} onClick={(e) => e.stopPropagation()}>
         <MdClose onClick={switchBurger} className={s.close} size={35}/>

         <div className={s.links}>
            <Link to={"/"} className={s.link}>Home</Link>
            <Link to={"/product"} className={s.link}>Product</Link>
            <Link to={"/pricing"} className={s.link}>Pricing</Link>
            <Link to={"/testimonials"} className={s.link}>Testimonials</Link>
            <Link to={"/contact_us"} className={s.link}>Contact Us</Link>
         </div>

         {isDarkMode ? <MdOutlineLightMode color='#d23166' size={40} onClick={switchDarkMode}/> : <LuMoonStar color='#d23166' size={35} onClick={switchDarkMode}/>}
      </div>
    </aside>
  )
}

export default BurgerMenu