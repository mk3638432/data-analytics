import React from 'react'

const Analytic = () => {
    return (
        <div id='compony' className='w-full h-screen bg-white py-14 px-4 '>
            <div className='max-w-[1240px] bg-white mx-auto grig md:grid-cols-2 '>
                <img className='w-[500px] mx-auto ' src='https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='/' />
                <div className='flex flex-col justify-center items-center py-10 bg-white'> 
                    <p className='bg-white font-bold text-green-500 mx-auto '>DATA ANALYTICS DASHBOARD0</p>
                    <h1 className='bg-white text-black font-bold md:text-4xl sm:text-3xl py-2 '>Manage Data Analytic Centrally</h1>
                    <p className='bg-white text-black'>lorem Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview
                     of the rendering of the text in terms of font choice and font size
                     </p>
                     <button className='font-bold bg-green-500 w-[150px] rounded-md mx-auto my-6 py-2'>Get Started </button>
                </div>
            </div>
        </div>
    )
}

export default Analytic