import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '../Components/Editor';
import Header  from '../Components/Header'
import { EditorReadOnly } from '../Components/Editor/EditorReadOnly';
const AskQuestion = () => {
    // const {q_id} = useParams()
    const navigate = useNavigate()
    const [title,setTitle] = useState(null)
    const [detail,setDetail] = useState('{"mdohit":"32"}')
    const [stage,setStage] = useState({title:false,
    detailget:false})
    const handleStage =(key)=>{
      setStage((prv) => {
        return { ...prv, [key]: !prv[key] };
      } )
    }
   const createQuestion = async ()=>{
    const data = {
      "title": title,
     "description": detail
 } 
 const token = localStorage.getItem('Token')
    await axios.post(`http://3.108.227.195:8000/create-question/`,data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    })
      .then((res) => {
        console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
        const questionArray = res?.data 
        // setQuestions(questionArray)
        if (res?.data) {
          // setOrder_no(res?.data?.data)
          toast.success('Question created successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setDetail("");
            setTitle("");
            setStage({title:false,
              detailget:false})
          console.log(res, '-----------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_______________________________________________')
          console.log(res?.data?.api_status,"result")
          navigate(-1)
        }
        else {
          // navigate(-1)
        }

      })
      .catch((err) => { console.log("error contact us", err) }) 
   }
   const hasToken = localStorage.getItem('Token')
   
   useEffect(()=>{
    if(!hasToken){
          navigate('/login')
    }
   },[])


  return (
    <>
    <Header/>
    <div className='w-[90%]  mx-auto justify-start items-start flex flex-col gap-10'>
      <h3 className='text-5xl font-poppins font-bold text-TextColor_T500'>Ask A public Question</h3>
      <div className='bg-pink-100 w-full rounded-xl flex flex-col px-5 py-5 gap-5'>
        <h3 className='font-semibold font-poppins text-2xl text-TextColor_Neutral'>Writing a good question</h3>
        <h4 className='text-base font-poppins font-medium'>You’re ready to ask a programming-related question and this form will help guide you through the process.
Looking to ask a non-programming question? See the topics here to find a relevant site.</h4>
       <ul className='list-disc ml-2 text-sm'><h3 className='text-lg font-poppins font-semibold text-TextColor_Neutral'>Steps</h3>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Add “tags” which help surface your question to members of the community.</li>
            <li>Review your question and post it to the site.</li>
       </ul>
      </div>
      <div className='bg-white border-2 rounded-xl flex flex-col gap-2 w-full p-5 '>
       <h3 className='text-lg font-medium font-poppins tracking-tighter '>title</h3>
       <h4 className='text-sm font-poppins font-normal tracking-tighter text-TextColor_T200'>Be specific and imagine you’re asking a question to another person.</h4>
       <input 
       value={title}
       disabled={stage?.title}
       onChange={e=>setTitle(e.target.value)}
       className='border-2 border-border_Neutral px-5 py-2  rounded-xl text-base font-poppins font-medium hover:border-pink-500 focus:outline-pink-500'
       placeholder='exp . Is there any special goverment project run for special childs ?'
       />
       {title?.length>20?
       <button 
       onClick={()=>handleStage("title")}
        className='self-start px-3 py-1 text-center font-poppins font-medium'>confirm</button>:null}
      </div>

      <div className='bg-white border-2 rounded-xl flex flex-col gap-2 w-full p-5 '
      >
        
       <h3 className='text-lg font-medium font-poppins tracking-tighter '>What are the details of your problem?</h3>
       <h4 className='text-sm font-poppins font-normal tracking-tighter text-TextColor_T200'>
Introduce the problem and expand on what you put in the title. Minimum 20 characters.</h4>
       {/* <textarea 
       disabled={!stage?.title || stage?.detailget}
       value={detail} 
       rows={4}
       onChange={e=>setDetail(e.target.value)}
       className='border-2 border-border_Neutral px-5 py-2  rounded-xl text-base font-poppins font-medium hover:border-pink-500 focus:outline-pink-500'
       placeholder='exp . Is there any special goverment project run for special childs ?'
       /> */}
       {/* <EditorReadOnly data={detail} id='read'  /> */}
        <Editor  data='{"mdohit":"32"}' setJSONData={setDetail} id={"editor"} />
       {detail?.length>20?
       <button 
       
       onClick={()=>handleStage("detailget")}
       className='self-start px-3 py-1 text-center font-poppins font-medium'>confirm</button>:null}
      </div>
     
      <button
      className='px-3 py-2 bg-pink-400 rounded-lg text-lg font-poppins font-medium text-white'
      // disabled={stage?.detailget || stage?.title}
      onClick={()=>createQuestion()}
      >Creat A question</button>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
    </>
  )
}

export  {AskQuestion} ;