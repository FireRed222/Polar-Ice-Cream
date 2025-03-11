import { useContext } from 'react';
import { AppContext } from '../../context/Context';
import s from './Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    const { linksData, navigationFooter, pageInfo, newsletterData } = useContext( AppContext );

  return (
    <footer className={s.footer}>
        <div className={s.container}>
            <div className={s.companyInfo}>
                <img src="/logo.svg" alt="logo" />
                <p className={s.text}>Some food has looked so awful that it's looked like something that the dog's brought home.</p>

                <h4 className={s.ttl}>Follow Us</h4>

                <div className={s.links}>
                    {linksData.map((el) => (
                        <img className={s.socials} key={el.id} src={el.src} alt={el.alt} />
                    ))}
                </div>
            </div>
            <div className={s.navigationFooter}>
                    {navigationFooter.map((el) => (
                        <Link key={el.id} className={s.link} to={el.src}>{el.text}</Link>
                    ))}
            </div>
            <div className={s.info}>
                    {pageInfo.map((el) => (
                        <p className={s.infoText} key={el.id}>{el.text}</p>
                    ))}
            </div>

            <div className={s.newsContainer}>
                <div className={s.newsletter}>
                    <h2 className={s.newsTtl}>Newsletter</h2>

                    <form className={s.form}>
                        <input className={s.inp} type="email" placeholder='Your Email'/>
                        <button className={s.btn} type="submit">Subscribe</button>
                    </form>
                </div>

                <div className={s.block}>
                    {newsletterData.map((el) => (
                        <img className={s.payment} key={el.id} src={el.src} alt={el.src} />
                    ))}
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer