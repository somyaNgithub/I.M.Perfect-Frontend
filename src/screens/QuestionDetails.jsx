import axios from 'axios'
import React, { useState  ,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { EditorReadOnly } from '../Components/Editor/EditorReadOnly'
import { formatDateTime } from '../utils/dateFormater'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionDetails = () => {
    const {id} = useParams()
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [answer, setAnswer] = useState('')
    const [answerArray,setAnswerArray] = useState([])
      async function getQuestions(){
    await axios.get(`//3.108.227.195:8000/question-list`,{}, {
      headers: {
        "Content-Type": "application/json",
        // "token": token
      }
    })
      .then((res) => {
        console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
        const questionArray = res?.data 
        setSelectedQuestion(questionArray?.find((question)=>question?.Q_id === id))
        if (res?.data?.api_status) {
          // setOrder_no(res?.data?.data)
          console.log(res, '-----------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_______________________________________________')
          console.log(res?.data?.api_status,"result")
        }
        else {
          // navigate(-1)
        }

      })
      .catch((err) => { console.log("error contact us", err) })
  }
      async function getAnswersForQuestion(){
        const data = {
     "Q_id": `${id}` 
}
    await axios.post(`//3.108.227.195:8000/answersForQuestion/`,data,{
      headers: {
        "Content-Type": "application/json",
        // "token": token
      }
    })
      .then((res) => {
        console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
        const questionArray = res?.data 
        // setSelectedQuestion(questionArray?.find((question)=>question?.Q_id === id))
        if (res?.data?.api_status) {
          // setOrder_no(res?.data?.data)
          setAnswerArray(res?.data)
          // console.log(res, '-----------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_______________________________________________')
          // console.log(res?.data?.api_status,"result")
        }
        else {
          // navigate(-1)
        }

      })
      .catch((err) => { console.log("error contact us", err) })
  }
// write answer 
async function writeanswer(){
        const data = {
     "Q_id": `${id}` ,
     "Answer" : answer
}  
  const token = localStorage.getItem('Token')
     await axios.post(`//3.108.227.195:8000/write-answer/`,data,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
      .then((res) => {
        // console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
        // const questionArray = res?.data 
        // setSelectedQuestion(questionArray?.find((question)=>question?.Q_id === id))
        if (res?.data?.A_id) {
          // setOrder_no(res?.data?.data)
          setAnswer('');
          getAnswersForQuestion()
           toast.success('Answer created successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          console.log(res, '-----------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_______________________________________________')
          console.log(res?.data?.api_status,"result")
        }
        else {
          // navigate(-1)
        }

      })
      .catch((err) => { console.log("error contact us", err) })
}

  useEffect(()=>{
    getQuestions()
    getAnswersForQuestion()
  },[])
  return (
    <div className='w-[95%] mx-auto flex flex-col p-5 gap-10'>
          <div className='flex justify-between w-full items-center'>
            
            <h3 className='text-2xl font-poppins font-medium '>
              Question <br/>
              {selectedQuestion?.title}</h3>
        <Link to={'/ask-question'} className='border-2 border-Secondary1_Neutral ring-2 bg-Secondary1_s50 rounded-lg px-2 py-1 text-center text-lg '>AskQuestion</Link>
          </div>
          {selectedQuestion?.Q_id ? <EditorReadOnly id={selectedQuestion?.Q_id}
           data={selectedQuestion?.description??'{"name":"12",}'} 
           key={'21'}
           />:null}
         
           <div>
             <h3 className='text-base text-TextColor_T200 font-poppins font-medium'>created at {selectedQuestion?.pub_date?formatDateTime(selectedQuestion?.pub_date):null}</h3>
             <h3 className='text-base text-TextColor_T200 font-poppins font-medium'>by {selectedQuestion?.user?.fullName}</h3>
           </div>
          
          <div className='flex w-full flex-col gap-5 pt-5 border-t-2'>
             <h3 className='text-2xl text-TextColor_Neutral font-poppins font-medium'>Answers </h3>
           
              <div className='w-full flex flex-col gap-3'>
                <h3 className='text-lg font-poppins font-medium text-TextColor_T200'>total aanswers {answerArray?.count_of_anser??0}</h3>
                  {answerArray?.data?.map((ans)=>{ return (<div className='border-2 rounded-lg text-xl font-poppins text-TextColor_Neutral gap-2'>
                  <h3 className='px-5 py-3'>{ans?.Answer}</h3>
                  <div className='flex justify-between px-5 pt-5 items-center text-TextColor_Neutral bg-Secondary1_s50 '>
                    <h3 className='capitalize'>created at {ans?.pub_date?formatDateTime(ans?.pub_date):null} </h3> 
                    <div className='justify-center flex flex-col gap-2 items-center'>
                      <div className='w-10 h-10 flex justify-center items-center'>
                        <img src={ans?.user?.avatar} alt='' className='w-full object-cover'/>
                      </div>
                      <h3 className='text-TextColor_T500 font-semibold'>{ans?.user?.fullName}</h3>
                      <h3>{ans?.user?.userType}</h3>
                      
                    </div>
                  </div>
                </div>) })}
            

                </div>            

            <div className='w-full flex flex-col gap-3 px-3 py-4 border-2 rounded-lg'>
              <textarea rows={5} 
              value={answer}
              onChange={e=>setAnswer(e?.target?.value)}
              placeholder='Write your answer here'
              className='px-5 py-2 font-poppins border-2 focus:outline-none rounded-lg focus:border-pink-500  font-medium text-lg '
              />
              <div className='px-5 '>
                <button 
                onClick={()=>writeanswer()}
                 className='justify-self-start px-5 py-2 rounded-xl border-2 border-Secondary1_s400 bg-Secondary1_s50' >Submit</button>
            
              </div>
             </div>
          </div>
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
              {console?.log(selectedQuestion ,"44444444444444444444444",answerArray)}
    </div>
  )
}

export  {QuestionDetails}