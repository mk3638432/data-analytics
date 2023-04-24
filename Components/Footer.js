import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitterSquare,
    FaDribbbleSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='contact' className='max-w-[1240px] mx-auto py-10 px-4 h-[300px] text-gray-300'>
      <h1 className='text-center font-bold text-3xl py-3 text-[#00df9a]'>Contact</h1>
        <div>
        <h1 className='w-full text-3xl text-center font-bold text-[#00df9a]'>NEXT.JS</h1>
        <p className='py-4 text-center '>Lorem  in reprehenderit in voluptate velit esse cillum dolore 
        <br/> eu fugiat nulla pariatur. Excepteur sint occaec
             sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
             <div className='flex  py-6 justify-evenly'>
                <FaFacebook size={30}/>
                <FaDribbbleSquare size={30}/>
                <FaInstagram  size={30}/>
                <FaGithub size={30}/>
                <FaTwitterSquare size={30}/>
             </div>
        </div>
    </div>
  )
}

export default Footer