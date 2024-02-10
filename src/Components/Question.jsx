import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {EditQuestion} from '../Components/Popup/EditQuestion'
import {DeleteQuestion} from '../Components/Popup/DeleteQuestion'
const Question = ({title, details , q_id ,publish , userName , avtar , Qus_U_id , setQuestion}) => {
  const U_id = JSON.parse(localStorage.getItem('user'))?.U_id;
  const [deletePopup,setDeletePopup] = useState(false)
  const [editPopup, setEditPopup] = useState(false)

  return (
    <div className='w-[94%]  py-2 px-5  group  bg-white gap-5 border rounded-lg shadow-lg flex  '>
   
      <div className='w-full flex flex-col justify-center items-start gap-1'>
      <div className='flex w-full justify-between gap-1'>
          <Link
            to={`/question/${q_id}`}
            className='text-xl text-TextColor_Neutral hover:text-Secondary1_Neutral text-left font-poppins font-medium line-clamp-1'>
            {
              title
            }
          </Link>
          {Qus_U_id === U_id?<div className='flex gap-2 items-center'>
            <button onClick={()=>setEditPopup(true)} className='bg-Secondary1_Neutral ring-2 ring-Secondary1_Neutral text-white px-2 py-1 rounded-md border'>Edit</button>
            <button onClick={()=>setDeletePopup(true)} className='bg-error text-white ring-2 ring-error px-2 py-1 rounded-md border'>Delete</button>
          </div>:null}
      </div>
      
        {console.log(publish)}
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
   
   {Qus_U_id ===U_id? <>
     <DeleteQuestion isOpen={deletePopup} closeModal={()=>setDeletePopup(false)} Q_id={q_id} key={q_id} setQuestions={setQuestion} /> 
     <EditQuestion isOpen={editPopup} closeModal={()=>setEditPopup(false)} Q_id={q_id}
     questionDetils={details}
     questionTitle={title}
     setQuestions={setQuestion} 
    //  question={} 
     key={q_id} />
    </>
   :null}
     </div>
  )
}

export default Question
