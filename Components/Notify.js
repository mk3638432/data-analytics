import React from 'react'

const Newsletter = () => {
  return (
    <div id='notify' className='w-full py-16 px-4 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
       <div className='lg:col-span-2 py-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow</h1>
        <p>Sign up to our newsletter and stay up to data .</p>
       </div>
       <div className='my-4'>
        <div className='flex flex-col sm:flex-row  items-center justify-between'>
            <input className='bg-white text-black  p-3 flex w-full rounded-md h-10' type='email' placeholder='Enter email'/>
            <button className='font-bold bg-green-500 w-[150px] rounded-full ml-4  my-6 py-2'>Notify Me!!</button>
            
        </div>
        <div>
            <p>We care about the protection of your data. Read Our <span className='text-green-500 font-bold
            '>Privacy Policy</span></p>
            </div>
       </div>
        </div>
    </div>
  )
}

export default Newsletter