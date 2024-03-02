import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import imLogo from '../assets/imLogo.jpeg'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from 'react-icons/io5'
// import { useTranslation } from 'react-i18next'
// import { useApplicationContext } from '../../context'

const MobileHeader = ({isOpen,close}) => {
    // const {language,setLanguage} = useApplicationContext()
    // const {t} = useTranslation()
    const [islogin, setIsLogin] = useState(false)   
    useEffect(()=>{
        setIsLogin(localStorage.getItem('Token'))
    },[isOpen])
    // if(!isOpen){
    //   return null
    // }
   
    return ReactDOM.createPortal(
    <> 
    {isOpen?
        <div 
        onClick={close}
          className='w-full h-[100vh] bg-black opacity-20 z-[50] fixed top-0 left-0  [-webkit-transition:all .5s;]  ' />
   :null }
        <div className={`${isOpen ? "block w-full " : " w-full [transform:translate(-360px);] "
            } fixed     left-0 top-0  h-[100vh]    [transition: all 0.5s;]
           border-gray-300 overflow-x-hidden bg-[#fff] font-poppins text-sm  shadow-lg 
           max-w-[260px] delay-[1000ms] ease-in-out
            text-text_primary px-[0px] flex flex-col gap-[10px] z-[80]`}>
                <div onClick={close} className='px-4 w-full bg-Original'><img src={imLogo} className='w-[200px]'/></div>
            <div className='w-full  flex flex-col'>
            <Link to='/' className='text-lg font-poppins font-medium text-white' ><IoHomeOutline size={25} /></Link>
      <Link to='/about' className='text-lg font-poppins font-medium  px-5 ' >About</Link>
      <Link to ='/'className='text-lg font-poppins font-medium px-5' >NGO's</Link>
      <Link to ='/question'className='text-lg font-poppins font-medium px-5 ' >Question</Link>
      <Link to ='/users'className='text-lg font-poppins font-medium px-5' >Users</Link>
              <Link to='/blogs' className='text-lg font-poppins font-medium px-5' >Blog</Link>
                    <select className=" form-select-sm border-0 text-lg font-poppins font-medium mx-4 focus:outline-none py-2"
                    //  aria-label=".form-select-sm example"
                    //  value={language}
                    //  onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="en">Eng</option>
                        <option value="hn">Hindi</option>
                    </select>
            </div>
              {!islogin?
                <Link to={'/login'} className='py-2 text-center mx-4 text-white bottom-10 bg-Primary_Neutral rounded-md text-lg font-semibold'>Login</Link>
              :null}
                </div>
        </>, document.getElementById('portal-root')
  )
}

export { MobileHeader }