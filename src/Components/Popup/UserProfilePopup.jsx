import React, { useEffect, useState } from 'react'
import  ReactDOM  from 'react-dom'
import { MdOutlineCancel } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
// import {useTranslation} from 'react-i18next';
// import Logout from './Logout'
import { LuLogOut } from "react-icons/lu";
const UserProfilePopup = ({isOpen,closeModel,supportText,action,setLogoutPopupIsOpen}) => {
    if (!isOpen){
        return null;
    }
   
    const [LogoutPopupClick, setLogoutPopupClick] = useState(false)
   
    useEffect(()=>{
      if(LogoutPopupClick){
        setLogoutPopupIsOpen(true)
        closeModel()
      }
    },[LogoutPopupClick])
  return ReactDOM.createPortal(
    <>
    <div className='w-full h-[100vh] bg-black opacity-20 z-[50] fixed top-0 left-0 ' onClick={closeModel} />
      <div className={`fixed  z-[1111] right-[3%] top-[120px]  border-1 border-Primary_Neutral  overflow-y-auto  bg-white flex-col px-2 py-2 rounded-xl w-full max-w-[150px]  ${isOpen?"flex":"hidden"} h-auto`}>
        {/* uper part of pupup */}
         <Link to='/profile/edit' className='w-full flex items-center gap-2 justify-start py-2 text-center text-TextColor_Neutral font-poppins font-normal text-sm no-underline' > <AiOutlineUser className='text-TextColor_Neutral' />Profile</Link>
         {/* <Link to='/profile/wallet' className='w-full py-2 flex items-center gap-2 justify-start text-center border-t border-b  text-TextColor_Neutral font-poppins font-normal text-sm no-underline' ><MdOutlineNotifications />{t('popup.profile.notification')}</Link> */}
        <button
        onClick={()=>{setLogoutPopupClick(true)}}
         className='w-full text-center flex items-center justify-start gap-2 py-2 text-error font-poppins font-normal text-sm no-underline'> < LuLogOut  className=' text-error'/>Logout</button>
     {/* <Logout closeModal={()=>setLogoutPopupIsOpen(false)} isOpen={LogoutPopupIsOpen } key={2}/> */}
      </div>
    </>,document.getElementById('portal-root1')
  )
}

export {UserProfilePopup}
