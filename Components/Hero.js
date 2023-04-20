import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div>
       <div className='max-w-[800px]  m-auto w-full h-screen  text-center flex  flex-col'>
        <p className='uppercase mt-[200px] font-bold text-green-400'>Growing With Data Analytics</p>
        <p className='text-3xl sm:text-6xl md:text-7xl font-bold py-2 '>Grow with data.</p>
        <p className='font-bold text-xl sm:text-4xl md:text-5xl'>Fast, flexible financing for  
        <Typed className='pl-2' strings={["BTB" , "BTC" , "SASS"]} typeSpeed={120} backSpeed={120} loop/>
        </p>
        <p className='md:text-2xl font-bold text-gray-600 py-2 text-xl'>
            Monitor your data analytics to increase revenue for BTB,BTC & SASS platform
        </p>
        <button className='font-bold bg-green-500 w-[150px] rounded-md mx-auto my-6 py-2'>Get Started</button>
       </div>
      
    </div>
  )
}

export default Hero