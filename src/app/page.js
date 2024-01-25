import React from 'react'
import Home from '@/app/home/page'
import About from '@/app/about/page'
import Contact from '@/app/contact/page'
import Service from './service/page'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const CarInsurance = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Home />
        <About />
        <Service />
        <Contact />
        {/* <Footer/> */}
  </div>
  )
}

export default CarInsurance
