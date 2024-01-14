import React from 'react'
import { Link } from 'react-router-dom'

const Question = ({title, details , q_id ,publish , userName , avtar}) => {
  return (
    <div className='w-4/5 py-5 px-5 relative group  bg-white gap-5 border rounded-lg shadow-lg flex even:flex-row-reverse '>
      <div className='flex group-odd:left-[-50%] group-even:right-[-50%] justify-center items-center px-2 py-2  flex-col min-w-[120px] rounded-lg border-2'>
        <div className='w-full max-w-[100px] h-[100px] flex flex-col justify-center items-center rounded-2xl bg-center '>
          <img src={avtar} alt='user' className='object-cover w-full' />
        </div>
      <h4 className='text-lg line-clamp-1 bottom-0 text-Secondary1_Neutral  font-poppins '>{userName}</h4>
      </div>
      <div className='w-full flex flex-col justify-center items-start gap-2'>
      <Link 
      to={`/question/${q_id}`}
      className='text-xl text-TextColor_Neutral hover:text-Secondary1_Neutral text-left font-poppins font-medium line-clamp-1'>
    {
      title
    }  
     </Link>
      <h4 className='text-base text-TextColor_Neutral  text-left font-poppins font-medium line-clamp-2'>
        {details}
      </h4>
      <Link className='text-lg font-poppins '>
    view Answer
         </Link>
      <div className='flex w-full justify-between items-center'>
         <h3 className='px-2  rounded-lg border-2 border-Secondary1_Neutral bg-Secondary1_s50'> Health</h3>  
       
         <div>
         {/* <h4 className='text-lg  text-Secondary1_Neutral font-poppins '>{userName}</h4> */}
         <h4 className='text-lg text-TextColor_T200 '>{publish?.slice(0,10)}
         </h4>
         </div> 
         
      </div>

      </div>
    
    </div>
  )
}

export default Question
