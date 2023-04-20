import Analytic from '@/Components/Analytic'
import Cards from '@/Components/Cards'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Newsletter from '@/Components/Newsletter'
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