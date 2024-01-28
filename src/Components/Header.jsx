import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { UserProfilePopup } from './Popup/UserProfilePopup';
import Logout from './Popup/Logout';
import HeadingTags from './Ribbon/HeadingTags'
const Header = () => {
    const navigate = useNavigate()
    const [UserPoupOpen,setUserPoupOpen]= useState(false)
     const [LogoutPopupIsOpen, setLogoutPopupIsOpen] = useState(false)
 
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <> 
      <h3 className='text-6xl text-center mt-5 font-calligraffitti font-semibold text-pink-600'>IMERFECT</h3>
  <div className='flex mx-auto justify-center text-3xl items-center'>
    <HeadingTags title={"Let's embrace the Flaws"} key={'topheading'}/></div>
    <div className='flex flxed top-2 py-2 my-5 z-50 items-center overflow-x-auto justify-between  w-[95%] mx-auto '>
       
      <Link to='/' className='text-lg font-poppins font-medium text-TextColor_Neutral' >Home</Link>
      <Link to='/' className='text-lg font-poppins font-medium text-TextColor_Neutral' >About</Link>
      <Link to ='/'className='text-lg font-poppins font-medium text-TextColor_Neutral' >For Expert</Link>
      <Link to ='/question'className='text-lg font-poppins font-medium text-TextColor_Neutral' >question</Link>
       <Link to ='/users'className='text-lg font-poppins font-medium text-TextColor_Neutral' >Users</Link>
            
      {/* <div
      className='px-3 py-2 flex border-2 group border-Secondary1_Neutral rounded-lg '
      >
        <button><IoMdSearch size={25}/></button>
        <input className='focus:outline-none sm:block hidden max-sm:group-hover:fixed max-sm:group-hover:top-20 group-hover:block  px-2 ' type='text' />
      </div> */}
      {user?
      <div className='flex flex-col gap-3 justify-center items-center'>
        <div 
        onClick={()=>setUserPoupOpen(true)}
        className='w-[40px] cursor-pointer h-[40px] flex items-center'>
          <img src={user?.avatar} className=' w-full rounded-full' />
        </div>
         {/* <button onClick={()=>setUserPoupOpen(true)} className='font-poppins font-semibold text-lg text-Secondary1_Neutral'>{user?.fullName}</button> */}
     
      </div>
      :   <button onClick={()=>navigate('/login')} className='px-3 py-2 items-center flex rounded-lg bg-Secondary1_Neutral text-white'>Login/sign up</button>}
       <UserProfilePopup isOpen={UserPoupOpen} 
       closeModel={()=>setUserPoupOpen(false)}
       setLogoutPopupIsOpen={setLogoutPopupIsOpen}  /> 
               <Logout closeModal={() => setLogoutPopupIsOpen(false)} isOpen={LogoutPopupIsOpen} key={2} />
  
    </div>
    </>


  )
}

export default Header
