import React from 'react'
import './index.css'
const HeadingTags = ({title}) => {
  return (
    <div className='ribbon px-[80px] py-2 text-white font-calligraffitti capitalize font-semibold bg-pink-500 drop-shadow-lg'>
    {title}
       </div>
  )
}

export default HeadingTags
