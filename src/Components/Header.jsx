import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
const Header = () => {
  return (
    <div className='flex flxed top-2 py-2 my-5 z-50 items-center justify-between  w-[95%] mx-auto '>
      <IoIosMenu size={40}/>
      <Link to='/' className='text-lg font-poppins font-medium text-TextColor_Neutral' >About</Link>
      <Link to ='/'className='text-lg font-poppins font-medium text-TextColor_Neutral' >For Expert</Link>
      <div
      className='px-3 py-2 flex border-2 border-Secondary1_Neutral rounded-lg '
      >
        <button><IoMdSearch size={25}/></button>
        <input className='focus:outline-none px-2 ' type='text' />
      </div>
      <button className='px-3 py-2 items-center flex rounded-lg bg-Secondary1_Neutral text-white'>Login/sign up</button>
    </div>
  )
}

export default Header
