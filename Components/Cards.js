import React from 'react'

const Cards = () => {
  return (
    <div id='plans' className='w-full py-[5rem] px-4 bg-white'>Cards
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-3'>
        <div className='w-full shadow-xl flex flex-col p-4  bg-white hover:scale-105 duration-500'>
       <img className='w-20 mx-auto' src='https://th.bing.com/th/id/OIP.mDv826UG65YB8vFcW1SB3QHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='/'/>
       <h2 className='bg-white text-black font-bold text-center py-6 text-2xl '>Single User</h2>
       <p className='bg-white text-black font-bold text-center text-2xl'>$149</p>
        <p className='bg-white text-black text-center pt-2'> 500 GB Storage</p>
        <p className='bg-white text-black text-center pt-2'>1 Granted User</p>
        <p className='bg-white text-black text-center pt-2'>Send upto 2 GB</p>
        <button className='font-bold bg-green-500 w-[150px] rounded-md mx-auto my-6 py-2'>SubScribe</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4  bg-white hover:scale-105 duration-500'>
       <img className='w-20 mx-auto' src='https://th.bing.com/th/id/OIP.6l0YaZE1vivLP6rUMyeMwgHaFv?w=270&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='/'/>
       <h2 className='bg-white text-black font-bold text-center py-6 text-2xl '>Single User</h2>
       <p className='bg-white text-black font-bold text-center text-2xl'>$149</p>
        <p className='bg-white text-black text-center pt-2'> 500 GB Storage</p>
        <p className='bg-white text-black text-center pt-2'>1 Granted User</p>
        <p className='bg-white text-black text-center pt-2'>Send upto 2 GB</p>
        <button className='font-bold bg-green-500 w-[150px] rounded-md mx-auto my-6 py-2'>SubScribe</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4  bg-white hover:scale-105 duration-500'>
       <img className='w-20 mx-auto' src='https://th.bing.com/th/id/OIP.kI6KOez37vlJ41_6Ubit9wHaHa?w=146&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='/'/>
       <h2 className='bg-white text-black font-bold text-center py-6 text-2xl '>Single User</h2>
       <p className='bg-white text-black font-bold text-center text-2xl'>$149</p>
        <p className='bg-white text-black text-center pt-2'> 500 GB Storage</p>
        <p className='bg-white text-black text-center pt-2'>1 Granted User</p>
        <p className='bg-white text-black text-center pt-2'>Send upto 2 GB</p>
        <button className='font-bold bg-green-500 w-[150px] rounded-md mx-auto my-6 py-2'>SubScribe</button>
        </div>
        
    </div>
    </div>
  )
}

export default Cards