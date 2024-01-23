import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { formatDateTime } from '../../utils/dateFormater';
const MyQuestions = () => {
    const userID = JSON.parse(localStorage?.getItem("user"))?.U_id;
    const [userQuestion, setUserQuestion] = useState([])
     async function getQuestionsForUser(){
    await axios.get(`//3.108.227.195:8000/user-questions/${userID}`,{}, {
      headers: {
        "Content-Type": "application/json",
        // "token": token
      }
    })
      .then((res) => {
        console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
        const questionArray = res?.data 
        // setQuestions(questionArray)

        if (res?.data?.api_status) {
          setUserQuestion(res?.data?.data)
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
        getQuestionsForUser()
    },[])
  return (
    <div className='w-full flex flex-col p-5 gap-10'>
        <h3 className='font-poppins font-medium text-2xl'> My Questions </h3>
        <div className='flex flex-col gap-5 w-full justify-start items-center'>
            {   userQuestion?.map((question)=>( <div key={question?.Q_id} className='px-5 py-3 rounded-lg border-2 w-full flex flex-col gap-3'>
                    <Link to={`/question/${question?.Q_id}`} className='font-poppins text-xl text-Secondary1_Neutral line-clamp-1'>{question?.title}</Link>
                <div className='w-full flex justify-between items-center'>

                    <h3 className='justify-self-end text-base gap-2 text-TextColor_T200 font-poppins' >
                      Created at  {question?.pub_date?formatDateTime(question?.pub_date)?.slice(0,11):null} {question?.pub_date?formatDateTime(question?.pub_date)?.slice(-8):null}
                    </h3>
                </div>
                </div>))
               
            }
        </div>
    </div>
  )
}

export default MyQuestions