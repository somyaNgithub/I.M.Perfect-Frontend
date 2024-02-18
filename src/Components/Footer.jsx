import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/imLogo.jpeg'

const Footer = () => {
  return (
    <div className='flex flex-grow mb-0 w-full flex-col  justify-between'> 
    
    <div className='bg-Original  bottom-0 w-full flex flex-col  py-5'>
        {/* details  */} 
        <div className='flex justify-between items-start flex-wrap mt-0 py-5 px-5 '>
        <div className='flex flex-col gap-3  '>
            <Link to={'/'} className='font-calligraffitti font-semibold text-4xl text-pink-400'>
          <img src={Logo} alt='logo' className='w-full h-[50px] max-w-[320px]' />  
            </Link>
            <h3 className='font-poppins font-medium text-xl text-white tracking-tight '>
                Khasra No. 13y-13x, Kapashera Old Delhi, road, near xyz Bank, <br/> Kapas Hera Extension, Gurugram, New Delhi, Delhi 110037
            </h3>
        </div>
        {/* footer linkes */}
        {/* <div className='flex flex-wrap justify-between items-center     mx-auto'> */}
        <ul className='text-white flex flex-col gap-5'>
         <samp className='text-xl'>Servies</samp>
          <Link>aask a question</Link>
          <Link >users</Link>
        </ul>
          <ul className='text-white flex flex-col gap-5'>
         <samp className='text-xl'> Events </samp>
          <Link>Meet Ups</Link>
            <Link>Webinar</Link>
        </ul>
        </div>
        <h3 className='text-white border-t border-white pt-3 font-poppins font-medium px-5 justify-center w-full text-center text-sm'>Copyright © [I.M.perfect] All rights reserved.</h3>
        {/* </div> */}
    </div> 
      {/* <h3>Copyright © [I.M.perfect] All rights reserved.</h3> */}
    </div>
  )
}

export { Footer}