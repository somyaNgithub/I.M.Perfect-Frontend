import React from 'react'
import ReactDom from 'react-dom'
import { useNavigate } from 'react-router-dom';
// import {useTranslation} from "react-i18next";
const Logout = ({ isOpen, closeModal }) => {
    const navigate = useNavigate();
    // const {t} = useTranslation()
    function SignOut(){
        localStorage.clear()
        closeModal()
        navigate('/');
    }

    if(!isOpen){
        return null
      }
  return  ReactDom.createPortal (
    <> 
    <div className='w-full h-[100vh] bg-black opacity-40 z-[11111] fixed top-0 left-0 ' onClick={()=>closeModal()} />
       <div
          className={`${
            isOpen ? "flex" : "hidden"
          } fixed max-sm:bottom-0  sm:top-[30%] sm:left-[35%] 2xl:left-[45%]  border   border-gray-300
           bg-[#fff] font-poppins text-sm translate-x-[-1/2] translate-y-[-1/2]  
            sm:rounded-lg text-text_primary  flex flex-col gap-5 z-[3000000]
             w-full shadow-md 
             rounded-t-3xl
            sm:w-[350px]  p-[18px]
          `}
        >
          <h3 className='text-sm font-poppins font-semibold '>Logout ImPerFect</h3>
          <div>
            <h4 className='text-sm font-poppins font-medium '>Want to Logout of Imerfect Account?</h4>
            <p className='text-text_disable'>
            With account logged in your Data will auto saved into your profile.
            </p>
          </div>
          <div className='flex w-full justify-between items-center font-poppins font-medium text-sm'>
<button type='button'
onClick={()=>closeModal()}
className='border border-Secondary2_Neutral  rounded-lg px-10 py-[10px] text-Secondary2_Neutral '>Cancel</button>
<button
 onClick={()=>SignOut()}
 className='border  bg-error rounded-lg px-10 py-[10px] text-white'>Logout</button>
          </div>
        {/* <button 
        className='px-[3.7rem] py-3 font-poppins text-TextColor_Neutral font-medium text-lg'
        onClick={()=>Logout()}>
            Logout
        </button> */}

        </div>
    </>,document.getElementById('portal-root')
  )
}

export default Logout
