import React from 'react'
import { Link, useLocation  } from 'react-router-dom';
// import {useTranslation} from 'react-i18next'
import { FaAngleRight } from "react-icons/fa6";
const ProfilePageSideMenu = () => {

  // const {t}= useTranslation()
  return (
    <div className=' hidden sm:flex flex-col   w-[380px] h-auto rounded-r-3xl shadow-md   '>
      <ProfileLinkButton mainLinkText={'Profile Edit'} supportText={'Edit your details '} targeturl={'/profile/edit'} key={1} />   
      <ProfileLinkButton mainLinkText={'My Questions'}  supportText= {'See all your Questions'}  targeturl={'/profile/my-question'} key={2} />   
      {/* <ProfileLinkButton mainLinkText={t('profile-page.side-menu.wallet.heading')}  supportText={t('profile-page.side-menu.wallet.sub-heading')}  targeturl={'/profile/wallet'} key={3} />   
      <ProfileLinkButton mainLinkText={t('profile-page.side-menu.kundali.heading')}  supportText={t('profile-page.side-menu.kundali.sub-heading')}  targeturl={'/profile/saved-kundli'} key={4} />   
       */}
    </div>
  )
}

export default ProfilePageSideMenu

const ProfileLinkButton =({targeturl,supportText,mainLinkText})=>{

  const {pathname } = useLocation()
return  (
<Link to={targeturl} className={` flex no-underline whitespace-nowrap last:rounded-br-3xl first:rounded-tr-3xl py-3 w-full ${pathname.includes(targeturl)?"bg-Primary_p50":"bg-white"} justify-between text-TextColor_Neutral items-center  py-3 px-[15px] font-poppins`}> 
<div className='space-y-0'>
<h4 className='font-poppins font-medium text-lg'>{mainLinkText}</h4>
<h4 className='font-poppins font-normal text-sm'>{supportText}</h4>

</div>
< FaAngleRight className='w-6 h-6' /> 
</Link>
)


}
