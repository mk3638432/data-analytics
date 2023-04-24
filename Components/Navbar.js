import Link from 'next/link'
import React ,{useState} from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav ,setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between sticky top-0 text-white items-center z-[20] mx-w-[1240px] px-1 h-24'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>NEXT.JS</h1>
        <ul className='hidden md:flex'>
        <Link href='/'>
            <li className='p-4'>Home</li>
            </Link>
            <Link href='/#compony'> 
            <li className='p-4'>Company</li>
             </Link>
             <Link href='/#notify'> 
             <li className='p-4'>Noify</li>
             </Link>
             <Link href='/#plans'>
             <li className='p-4'>Plans</li>
             </Link>
             <Link href='/#contact'> 
             <li className='p-4'>Contact</li>
             </Link>
          
        </ul>
        
        <div onClick={handleNav} className='block md:hidden '>
            {nav ?  <AiOutlineMenu size={30}/> : 
            <AiOutlineClose size={30}/>
            }
           
        </div>
        <div className= {nav ?'fixed left-[-100%]' : 'fixed left-0 top-0 w-[70%] ease-in-out duration-300 border-r border-r-gray-900  h-full' 
       }>
            <h1 className='w-full text-3xl px-3 font-bold mt-8 text-[#00df9a]'>NEXT.JS</h1>
            <ul className='pt-4  uppercase'>
                <Link href='/'>
                <li onClick={() => {setNav(true)}} className='p-4 border-b border-gray-400'>Home</li>
                </Link>
                <Link  href='/#company'>
                <li onClick={() => {setNav(true)}}  className='p-4 border-b border-gray-400'>Company</li>
                </Link>
                <Link href='/#notify'> 
                <li onClick={() => {setNav(true)}}  className='p-4 border-b border-gray-400'>Noify</li>
                </Link>
                <Link href='/#plans'> 
            <li onClick={() => {setNav(true)}}  className='p-4 border-b border-gray-400'>Plans</li>
            </Link>
            <Link href='/#contact'> 
            <li onClick={() => {setNav(true)}}  className='p-4 border-b border-gray-400'>Contact</li>
            </Link>
            
            </ul>
        </div>
    </div>
  )
}

export default Navbar