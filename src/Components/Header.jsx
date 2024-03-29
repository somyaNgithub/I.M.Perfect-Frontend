import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { UserProfilePopup } from './Popup/UserProfilePopup';
import Logout from './Popup/Logout';
import HeadingTags from './Ribbon/HeadingTags'
import { IoHomeOutline, IoMenu } from "react-icons/io5";
import imLogo from '../assets/imLogo.jpeg'
import { MobileHeader } from './MobileHeader';
const Header = ({hid}) => {
    const navigate = useNavigate()
    const [UserPoupOpen,setUserPoupOpen]= useState(false)
     const [LogoutPopupIsOpen, setLogoutPopupIsOpen] = useState(false)
     const [MobileHeaderIsOpen,setmobileHeaderIsOpen] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <> 
   
    <div className='flex sticky top-0 w-full text-white mx-auto px-5 shadow-sm bg-Original   z-50 sm:items-center gap-10  max-md:overflow-x-auto justify-between py-2  '>
      <div className='flex gap-1'>
        <button className='md:hidden' onClick={()=>setmobileHeaderIsOpen(true)}><IoMenu/></button>
          <Link to={'/'} >
            <img src={imLogo} alt='logo' className='w-full h-[50px] max-w-[60vw]  sm:max-w-[320px]' />    </Link>
            </div>
{hid?null:
<div className='w-3/5 mx-auto hidden md:flex justify-between gap-10'>
      <Link to='/' className='text-lg font-poppins font-medium text-white' ><IoHomeOutline size={25} /></Link>
      <Link to='/about' className='text-lg font-poppins font-medium ' >About</Link>
      <Link to ='/'className='text-lg font-poppins font-medium ' >NGO's</Link>
      <Link to ='/question'className='text-lg font-poppins font-medium ' >Question</Link>
      <Link to ='/users'className='text-lg font-poppins font-medium ' >Users</Link>
              <Link to='/blogs' className='text-lg font-poppins font-medium ' >Blog</Link>
          </div>
}
          {user ?<div className='flex flex-col gap-3 justify-center items-center'>
              <div
                onClick={() => setUserPoupOpen(true)}
                className='w-[40px] cursor-pointer h-[40px] flex items-center'>
              {user?.avatar ?
                <img src={user?.avatar} className=' w-full rounded-full' /> : <h3 className='text-Secondary1_Neutral text-sx pr-5'>  {user?.userName?.slice(0,5)} </h3>
 }
              </div>
              {/* <button onClick={()=>setUserPoupOpen(true)} className='font-poppins font-semibold text-lg text-Secondary1_Neutral'>{user?.fullName}</button> */}

            </div>
            : <button onClick={() => navigate('/login')} className='px-3 whitespace-nowrap  items-center font-semibold text-lg h-10 rounded-lg bg-white text-TextColor_Neutral'>Login/sign up</button>}

       <UserProfilePopup isOpen={UserPoupOpen} 
       closeModel={()=>setUserPoupOpen(false)}
       setLogoutPopupIsOpen={setLogoutPopupIsOpen}  /> 
               <Logout closeModal={() => setLogoutPopupIsOpen(false)} isOpen={LogoutPopupIsOpen} key={2} />
               <MobileHeader isOpen={MobileHeaderIsOpen} close={()=>setmobileHeaderIsOpen(false)}/>
    </div>
    </>


  )
}

export default Header
