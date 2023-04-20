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
    <div className='max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>NEXT.JS</h1>
        <p className='py-2 '>Lorem  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec
             sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
             <div className='flex justify-evenly'>
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