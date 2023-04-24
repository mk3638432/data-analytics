import Analytic from '@/Components/Componey'
import Cards from '@/Components/Cards'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Newsletter from '@/Components/Notify'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytic/>
      <Newsletter/>
      <Cards/>
     <Footer/>
    </div>
  )
}

export default index