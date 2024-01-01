import React from 'react'

const Question = ({title, details , q_id ,publish}) => {
  return (
    <div className='w-full py-5 px-5 bg-white gap-5 border rounded-lg shadow-lg '>
      <h3 className='text-xl text-TextColor_Neutral hover:text-Secondary1_Neutral text-left font-poppins font-medium line-clamp-1'>
    {
      title
    }   </h3>
      <h4 className='text-base text-TextColor_Neutral  text-left font-poppins font-medium line-clamp-2'>
        {details}
      </h4>
      <div className='flex justify-between items-center'>
         <h3 className='px-2  rounded-lg border-2 border-Secondary1_Neutral bg-Secondary1_s50'> Health</h3>  
         <div>
         <h4 className='text-lg  text-Secondary1_Neutral font-poppins '>{q_id?.slice(0,6)}</h4>
         <h4 className='text-lg text-TextColor_T200 '>{publish?.slice(0,10)}
         </h4></div> 
         
      </div>
    </div>
  )
}

export default Question
