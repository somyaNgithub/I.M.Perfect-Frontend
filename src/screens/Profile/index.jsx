import React from 'react'
// import Header from '../Header'
// import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import ProfilePageSideMenu from './ProfilePageSideMenu'
// import BGartrightOrange from '../../assets/img/BGartrightOrange.png'
const ProfilePage = () => {
  return (

    <div className=' overflow-x-auto'>
    {/* <Header/> */}
<div className='flex mx-auto w-[95%] pb-5 gap-[38px] items-start'>
    <ProfilePageSideMenu/>
<div className='flex w-full flex-col'><Outlet/></div>
    
</div>

{/* <img src={BGartrightOrange} alt='' className='z-0 right-0 w-[300px]'/> */}
    {/* <Footer/> */}
      

    </div>
  )
}

export  {ProfilePage}
