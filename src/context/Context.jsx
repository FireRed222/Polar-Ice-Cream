import axios from "axios";
import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isBurger, setIsBurger] = useState(false);

  const switchBurger = () => setIsBurger((prev) => !prev);
  
  //-------------------------------------------------------------------------------------------------------------------------
  
  const IceCreamListData = [
    {
      id: 0,
      text: "ICE CREAM",
    },
    {
      id: 1,
      text: "CAYENNE CHOCOLATE",
    },
    {
      id: 2,
      text: "CAKE BATTER",
    },
    {
      id: 3,
      text: "CANDY CANE",
    },
    {
      id: 4,
      text: "PLATTERS",
    },
    {
      id: 5,
      text: "DESSERT",
    },
  ]

  const IceCreamItemData = [
    {
        id: 1,
        src: "/minty.svg",
        ttl: "Brown Bread",
        subttl: "Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.",
        price: "$19.55",
        oldPrice: "$22.55",
    },
    {
        id: 2,
        src: "/mango.svg",
        ttl: "Cayenne chocolate",
        subttl: "Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.",
        price: "$19.55",
        oldPrice: "$22.55",
    },
    {
        id: 3,
        src: "/nutty.svg",
        ttl: "Sweet corn",
        subttl: "Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.",
        price: "$19.55",
        oldPrice: "$22.55",
    },
    {
      id: 4,
      src: "/mango.svg",
      ttl: "Sweet corn",
      subttl: "Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.",
      price: "$19.55",
      oldPrice: "$22.55",
  },
  {
    id: 5,
    src: "/mango.svg",
    ttl: "Sweet corn",
    subttl: "Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.",
    price: "$19.55",
    oldPrice: "$22.55",
},
  ]

  const linksData = [
    {
      id: 1, 
      src: '/facebook.svg'
    },
    {
      id: 2, 
      src: '/twitter.svg'
    },
    {
      id: 3, 
      src: '/instagram.svg'
    },
    {
      id: 4, 
      src: '/linkedin.svg'
    },
  ]

  const navigationFooter = [
    {
      id: 1,
      text: "Home",
      src: "/",
    },
    {
      id: 2,
      text: "Product",
      src: "/product",
    },
    {
      id: 3,
      text: "Blog",
      src: "/",
    },
    {
      id: 4,
      text: "Pricing",
      src: "/pricing",
    },
    {
      id: 5,
      text: "Testimonials",
      src: "/testimonials",
    },
    {
      id: 6,
      text: "Contact Us",
      src: "/contact_us",
    },
  ]

  const toastEmitter =  {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,  
    theme: "light",
  }

  const notify = {
    success() {
      toast.success("Data Sent Correctly", toastEmitter);
    },

    error() {
      toast.error("Data Was Not Sent", toastEmitter);
    },

    warn() {
      toast.warn("No Data", toastEmitter);
    },
  }

  const pageInfo = [
    {
      id: 1,
      text: "Delivery Information",
    },
    {
      id: 2,
      text: "Privacy Policy",
    },
    {
      id: 3,
      text: "Terms & Condition",
    },
    {
      id: 4,
      text: "Search Terms",
    },
    {
      id: 5,
      text: "Order & Return",
    },
  ]

  const newsletterData = [
    {
      id: 1,
      src: "/paypal.svg",
    },
    {
      id: 2,
      src: "/mastercard.svg",
    },
    {
      id: 3,
      src: "/visa.svg",
    },
  ]

  
  const tgMsg = async (data) => {
    if (data.text === '') return notify.warn();
    
    const msg = `Message: ${data.text}`
    
    const token = "8052438814:AAH3dxqSspL3pBuOOGGXtdkoVTVHhCqdgHE";
    const chatID = "-1002282032457";
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;
    
    const dataTG = {
      chat_id: chatID,
      text: msg,
    };
    
    try {
      await axios.post(urlApi, dataTG);
      notify.success();
    } catch (error) {
      console.log(error);
      notify.error();
    }
  }
  
  const [pricing, setPricing] = useState(0)
  
  const IceCreamItemFilter = IceCreamItemData.filter((el) => el.id === pricing);
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchDarkMode = () => setIsDarkMode((prev) => !prev);
  
  const value = { isBurger, switchBurger, pricing, setPricing, IceCreamListData, IceCreamItemData, IceCreamItemFilter, tgMsg, linksData, navigationFooter, pageInfo, newsletterData, isDarkMode, switchDarkMode};
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
