import React from 'react'
import './index.css'
const HeadingTags = ({title}) => {
  return (
    <div className='ribbon px-[40px] py-2 text-white font-calligraffitti capitalize font-semibold bg-pink-500 tracking-widest drop-shadow-lg'>
    {title}
       </div>
  )
}

export default HeadingTags
