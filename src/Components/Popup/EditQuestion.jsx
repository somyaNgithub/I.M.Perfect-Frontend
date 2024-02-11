import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import { useNavigate } from 'react-router-dom';
import { Editor } from '../Editor';
const EditQuestion = ({ isOpen, closeModal, Q_id, setQuestions , questionTitle, questionDetils }) => {
    const navigate = useNavigate()
    async function Delete() {
        const data = {
            'title':title, 
            'description':details
        }

        const token = localStorage.getItem('Token')
        console.log('Token:', token);
      
        await axios.patch(`//3.108.227.195:8000/update-question/${Q_id}/`, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                //    "Authorization":token,
            },
            
        })
            .then((res) => {
                // closeModal()
                // console.log(res)
                // if (res?.Q_id){
                navigate(`/question/${Q_id}`)
                // }
                // setQuestions((qus) => (qus?.filter((q) => (q?.Q_id !== Q_id))))
            })
            .catch((err) => { console.log("error contact us", err) })
    }
    const [title,setTitle] = useState(questionTitle??'')
    const [details,setDetails] = useState(questionDetils??'')
   
    useEffect(() => {
        setDetails(questionDetils)
        setTitle(questionTitle)
    }, [isOpen])
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
                <h3 className='text-sm font-poppins font-semibold '>Edit Question</h3>
                <div>
                    <h4 className='text-sm font-poppins font-medium '>title</h4>
                    <input type='text' 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className='w-full rounded-lg border text-lg px-5 py-2'
                    />
                </div>
                <div className='w-full flex flex-col gap-2 '>
                    <h4 className='text-sm font-poppins font-medium '>Details</h4>
                    <Editor data= {questionDetils??'{"mdohit":"32"}'} id={Q_id}
                     setJSONData={setDetails}
                      />
                </div>
                <div className='flex w-full justify-between items-center font-poppins font-medium text-sm'>
                    <button type='button'
                        onClick={() => closeModal()}
                        className='border border-Secondary2_Neutral  rounded-lg px-10 py-[10px] text-Secondary2_Neutral '>Cancel</button>
                    <button
                        onClick={() => Delete()}
                        className='border  bg-success rounded-lg px-10 py-[10px] text-white'>Edit</button>
                </div>

            </div>
        </>, document.getElementById('portal-root')
    )
}

export { EditQuestion }
