import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader/Loader'

const Home = lazy(() => import("./pages/Home/Home"));
const Product = lazy(() => import("./pages/Product/Product"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Testimonials = lazy(() => import("./pages/Testimonials/Testimonials"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));

const App = () => {
  return (
    <>
      <Nav />

      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={"Error"}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/testimonials' element={<Testimonials/>}/>
          <Route path='/contact_us' element={<ContactUs/>}/>
        </Routes>
      </Suspense>


      <Footer/>
    </>
    
  )
}

export default App