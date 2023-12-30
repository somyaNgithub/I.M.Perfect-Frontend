import React from 'react'

const Question = () => {
  return (
    <div className='w-full py-5 px-5 bg-white gap-5 border rounded-lg shadow-lg '>
      <h3 className='text-lg text-TextColor_Neutral hover:text-Secondary1_Neutral text-left font-poppins font-medium line-clamp-1'>
      How to fix the code to list the data only after the user clicks the button? Even after the changes, the objective has not yet been achieved
      </h3>
      <h4 className='text-base text-TextColor_Neutral  text-left font-poppins font-medium line-clamp-2'>
        
In order to optimize data loading on a specific screen, a calendar was requested to be implemented to select the month desired by the user. The idea is that, after selecting the month, the data will only be loaded when clicking the "Filter" button. Despite the implementation and code change, the data is not being loaded after clicking the "Filter" button. Below are the codes contained in the HTML and JavaScript files.

      </h4>
      <div className='flex justify-between items-center'>
         <h3 className='px-2 py-1 border-2 border-Secondary1_Neutral bg-Secondary1_s50'> Health</h3>   
         <h4 className='text-lg text-Secondary1_Neutral'>User Nmae</h4>
      </div>
    </div>
  )
}

export default Question
