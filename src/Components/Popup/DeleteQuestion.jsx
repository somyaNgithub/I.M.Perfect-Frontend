import axios from 'axios';
import React from 'react'
import ReactDom from 'react-dom'
import { useNavigate } from 'react-router-dom';
const DeleteQuestion = ({ isOpen, closeModal ,Q_id , setQuestions }) => {
   async function Delete() {
        const data = {
            "Q_id":Q_id
        }

       const token = localStorage.getItem('Token')
       console.log('Token:', token);
       await axios.delete(`//3.108.227.195:8000/question-delete`, {
           headers: {
               "Content-Type": "application/json",
               "Authorization": token,
            //    "Authorization":token,
           },
           data
       })
           .then((res) => {
               closeModal()
               setQuestions((qus)=>(qus?.filter((q)=>(q?.Q_id !== Q_id))))
           })
           .catch((err) => { console.log("error contact us", err) })
    }

    if (!isOpen) {
        return null
    }
    return ReactDom.createPortal(
        <>
            <div className='w-full h-[100vh] bg-black opacity-40 z-[11111] fixed top-0 left-0 ' onClick={() => closeModal()} />
            <div
                className={`${isOpen ? "flex" : "hidden"
                    } fixed max-sm:bottom-0  sm:top-[30%] sm:left-[35%] 2xl:left-[45%]  border   border-gray-300
           bg-[#fff] font-poppins text-sm translate-x-[-1/2] translate-y-[-1/2]  
            sm:rounded-lg text-text_primary  flex flex-col gap-5 z-[3000000]
             w-full shadow-md 
             rounded-t-3xl
            sm:w-[350px]  p-[18px]
          `}
            >
                <h3 className='text-sm font-poppins font-semibold '>Delete Question</h3>
                <div>
                    <h4 className='text-sm font-poppins font-medium '>Are you Sure You want to delete Question?</h4>
                    <p className='text-text_disable'>
                        After Deleting this Question this Now One can Answer that !
                    </p>
                </div>
                <div className='flex w-full justify-between items-center font-poppins font-medium text-sm'>
                    <button type='button'
                        onClick={() => closeModal()}
                        className='border border-Secondary2_Neutral  rounded-lg px-10 py-[10px] text-Secondary2_Neutral '>Cancel</button>
                    <button
                        onClick={() => Delete()}
                        className='border  bg-error rounded-lg px-10 py-[10px] text-white'>Delete</button>
                </div>

            </div>
        </>, document.getElementById('portal-root')
    )
}

export {DeleteQuestion}
