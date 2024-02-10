import React, { useDeferredValue, useEffect, useState } from 'react'
import axios from 'axios'
import userimg from "../assets/hero1.jpg"
import { Link } from 'react-router-dom'
// import {EditQuestion} from '../Components/Popup/EditQuestion'
import Question from '../Components/Question'
import { GoSearch } from 'react-icons/go'
import Header from '../Components/Header'
const QuestionPage = () => {
    const [questions, setQuestions] = useState([])
    const [searchByName, setSearchByName] = useState(null)
    const deferredQuery = useDeferredValue(searchByName);
    // const U_id = JSON.parse(localStorage.getItem('user'))?.U_id ;
    const [filteredAstrologerByName, setFilteredAstrologeByName] = useState(null)
    async function getQuestions() {
        await axios.get(`//3.108.227.195:8000/question-list`, {}, {
            headers: {
                "Content-Type": "application/json",
                // "token": token
            }
        })
            .then((res) => {
                console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
                const questionArray = res?.data
                setQuestions(questionArray)
                if (res?.data?.api_status) {
                    // setOrder_no(res?.data?.data)
                    // console.log(res, '-----------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_______________________________________________')
                    // console.log(res?.data?.api_status,"result")
                }
                else {
                    // navigate(-1)
                }

            })
            .catch((err) => { console.log("error contact us", err) })
    }
    useEffect(()=>{
        if(searchByName){
            let filteredAstro;
            filteredAstro =  questions?.filter((qus)=>{
                let titleStr = qus?.title?.toLowerCase()
                let toFindStr = searchByName?.toLowerCase()
                if (titleStr.includes(toFindStr) ){
                    return true
                }
            })
            setFilteredAstrologeByName(filteredAstro)
        }
        if (searchByName === '') {
            setFilteredAstrologeByName(null)
        }
    }, [deferredQuery])
    useEffect(() => {
        getQuestions()
    }, [])
    return ( 
        <>
        <Header/>
        <div className='w-[95%] flex  my-5 flex-col justify-start gap-5 md:gap-10 mx-auto  '>
            <div className='flex justify-between items-center'>
                <h3 className='text-3xl font-calligraffitti font-medium text-TextColor_Neutral'>All Questions</h3>
                <div className=' flex flex-row items-center px-2 py-1 border border-[#575757] rounded-lg'>
                    <input
                        className='border-none focus:outline-none text-lg placeholder:text-sm w-full placeholder:text-[#DCDCDC]  '
                        placeholder='Search by text'
                        value={searchByName}
                        onChange={e => setSearchByName(e.target.value)}
                    />

                    <button className='pl-2'><GoSearch size={20} color="#3C0008" /> </button>
                </div>
            </div>
            <div className="flex flex-wrap  justify-start gap-10 items-center w-full ">
                
                {filteredAstrologerByName ? <>   {filteredAstrologerByName?.map((question) => (
                    <Question key={question?.Q_id}
                        title={question?.title}
                        details={question?.description}
                        q_id={question?.Q_id}
                        userName={question?.user?.fullName}
                        publish={question?.pub_date}
                        avtar={question?.user?.avatar}
                        Qus_U_id={question?.U_id}
                        setQuestion={setQuestions}
                    />
                ))}</> : 
                <>   {questions?.map((question) => (
                    <Question key={question?.Q_id}
                        title={question?.title}
                        details={question?.description}
                        q_id={question?.Q_id}
                        userName={question?.user?.fullName}
                        publish={question?.pub_date}
                        avtar={question?.user?.avatar}
                        Qus_U_id={question?.U_id}
                        setQuestion={setQuestions}
                    />
                ))}</>}
             
            </div>
        </div>
        {/* <EditQuestion /> */}
        </>
    )
}

export default QuestionPage