import React from 'react'
import { Link } from 'react-router-dom'

const Question = ({title, details , q_id ,publish , userName , avtar}) => {
  return (
    <div className='w-4/5 py-2 px-5  group  bg-white gap-5 border rounded-lg shadow-lg flex  '>
   
      <div className='w-full flex flex-col justify-center items-start gap-1'>
      <Link 
      to={`/question/${q_id}`}
      className='text-xl text-TextColor_Neutral hover:text-Secondary1_Neutral text-left font-poppins font-medium line-clamp-1'>
    {
      title
    }  
     </Link>
    
      {/* <Link className='text-lg font-poppins '>
    view Answer
         </Link> */}
      <div className='flex flex-wrap w-full justify-between items-center'>
          <h4 className='text-lg text-TextColor_T200 '>Created at {publish?.slice(0, 10)}
          </h4>

         <div className="flex items-center ga-2">
         {/* <h4 className='text-lg  text-Secondary1_Neutral font-poppins '>{userName}</h4> */}
            <div className='flex  justify-center items-center px-2 py-2  flex-row-reverse  gap-2'>
              <div className='w-[50px] h-[50px] flex items-center justify-center'>
                <img src={avtar} alt={q_id} className='w-full h-[50px] object-cover rounded-xl' />
              </div>
      <h4 className='text-lg line-clamp-1 bottom-0 text-Secondary1_Neutral  font-poppins '>{userName}</h4>
      </div>
         </div> 
         
            
      </div>

      </div>
   
    
    </div>
  )
}

export default Question
