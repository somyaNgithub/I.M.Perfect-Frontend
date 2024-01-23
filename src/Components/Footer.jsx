import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black w-full flex justify-between items-start flex-wrap mt-5 py-5 px-5 '>
        {/* details  */}
        <div className='flex flex-col gap-3  '>
            <Link to={'/'} className='font-calligraffitti font-semibold text-4xl text-pink-400'>IMPERFECT</Link>
            <h3 className='font-poppins font-medium text-xl text-white tracking-tight '>
                Khasra No. 13y-13x, Kapashera Old Delhi, road, near xyz Bank, <br/> Kapas Hera Extension, Gurugram, New Delhi, Delhi 110037
            </h3>
        </div>
        {/* footer linkes */}
        {/* <div className='flex flex-wrap justify-between items-center     mx-auto'> */}
        <ul className='text-white flex flex-col gap-5'>
         <samp className='text-xl'> About us </samp>
          <Link>About us</Link>
          <Link>Contect Us</Link>
        </ul>
          <ul className='text-white flex flex-col gap-5'>
         <samp className='text-xl'> About us </samp>
          <Link>About us</Link>
          <Link>Contect Us</Link>
        </ul>
        {/* </div> */}
    </div>
  )
}

export { Footer}