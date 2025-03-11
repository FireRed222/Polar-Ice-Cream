import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useContext } from 'react';
import { AppContext } from '../../context/Context';
import Button from '../Button/Button';
import { MdOutlineLightMode } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";

const Nav = () => {
  const { switchBurger, isDarkMode, switchDarkMode } = useContext(AppContext);

  const body = document.body;

  if (isDarkMode) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }

  return (
    <nav className={s.nav}>
      <BurgerMenu/>
      
      <div className={s.container}>
         <Link to={'/'}>
            <img loading="lazy" src="/logo.svg" alt="logo" />
         </Link>

         <div className={s.links}>
            <Link to={"/"} className={s.link}>Home</Link>
            <Link to={"/product"} className={s.link}>Product</Link>
            <Link to={"/pricing"} className={s.link}>Pricing</Link>
            <Link to={"/testimonials"} className={s.link}>Testimonials</Link>
            <Link to={"/contact_us"} className={s.link}>Contact Us</Link>
         </div>

          <div className={s.links}>
            {isDarkMode ? <MdOutlineLightMode color='#d23166' size={40} onClick={switchDarkMode}/> : <LuMoonStar color='#d23166' size={35} onClick={switchDarkMode}/>}
          </div>

         <GiHamburgerMenu onClick={switchBurger} className={s.burger} size={35}/>
      </div>
    </nav>
  )
}

export default Nav