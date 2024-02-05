import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { UserProfilePopup } from './Popup/UserProfilePopup';
import Logout from './Popup/Logout';
import HeadingTags from './Ribbon/HeadingTags'
import { IoHomeOutline } from "react-icons/io5";
import Logo from '../assets/logoV1.png'
const Header = () => {
    const navigate = useNavigate()
    const [UserPoupOpen,setUserPoupOpen]= useState(false)
     const [LogoutPopupIsOpen, setLogoutPopupIsOpen] = useState(false)
 
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <div className='w-full  '> 
    <div className='w-full flex px-5 items-center justify-between mx-auto'>
<div>
            <img src={Logo} alt='logo' className='w-full h-[130px] ' />    </div>  
          {user ?
            <div className='flex flex-col gap-3 justify-center items-center'>
              <div
                onClick={() => setUserPoupOpen(true)}
                className='w-[40px] cursor-pointer h-[40px] flex items-center'>
                <img src={user?.avatar} className=' w-full rounded-full' />
              </div>
              {/* <button onClick={()=>setUserPoupOpen(true)} className='font-poppins font-semibold text-lg text-Secondary1_Neutral'>{user?.fullName}</button> */}

            </div>
            : <button onClick={() => navigate('/login')} className='px-3  items-center h-10 rounded-lg bg-Secondary1_Neutral text-white'>Login/sign up</button>}
    </div>
    <div className='flex flxed top-2 py-2 z-50 items-center  overflow-x-auto justify-between  w-[95%] mx-auto '>
       
      <Link to='/' className='text-lg font-poppins font-medium text-TextColor_Neutral' ><IoHomeOutline size={25} /></Link>
      <Link to='/' className='text-lg font-poppins font-medium text-TextColor_Neutral' >About</Link>
      <Link to ='/'className='text-lg font-poppins font-medium text-TextColor_Neutral' >NGO's</Link>
      <Link to ='/question'className='text-lg font-poppins font-medium text-TextColor_Neutral' >Question</Link>
      <Link to ='/users'className='text-lg font-poppins font-medium text-TextColor_Neutral' >Users</Link>
          <Link to='/' className='text-lg font-poppins font-medium text-TextColor_Neutral' >Blog</Link>

      {/* <div
      className='px-3 py-2 flex border-2 group border-Secondary1_Neutral rounded-lg '
      >
        <button><IoMdSearch size={25}/></button>
        <input className='focus:outline-none sm:block hidden max-sm:group-hover:fixed max-sm:group-hover:top-20 group-hover:block  px-2 ' type='text' />
      </div> */}

       <UserProfilePopup isOpen={UserPoupOpen} 
       closeModel={()=>setUserPoupOpen(false)}
       setLogoutPopupIsOpen={setLogoutPopupIsOpen}  /> 
               <Logout closeModal={() => setLogoutPopupIsOpen(false)} isOpen={LogoutPopupIsOpen} key={2} />
  
    </div>
    </div>


  )
}

export default Header
