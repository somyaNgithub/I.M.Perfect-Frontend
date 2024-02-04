import React, { useEffect, useState } from 'react'
import imageSrc from '../assets/hero.png'
import { IoSearchSharp } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Question from '../Components/Question';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import HeadingTags from '../Components/Ribbon/HeadingTags';
import {Swiper , SwiperSlide} from 'swiper/react';

import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination ,Autoplay ,A11y ,Navigation } from 'swiper/modules';
import { Develoer } from '../Components/Home/Develoer';
const Home = () => {
  const [questions, setQuestions] = useState([])
  async function getQuestions(){
    await axios.get(`//3.108.227.195:8000/question-list`,{}, {
      headers: {
        "Content-Type": "application/json",
        // "token": token
      }
    })
      .then((res) => {
        // console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
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
    getQuestions()
  },[])
  return (
    < div className='space-y-12'
    >
<div className='relative  mx-5  '>
   
      <Swiper 
      allowSlideNext={true}
      allowSlidePrev={true}
      // thumbs={true}
      navigation={{nextEl:".arrow-left", prevEl: ".arrow-right"}}
        autoplay={{ delay: 4000 }} 
      pagination={true} modules={[Pagination ,Autoplay , A11y ,Navigation ]} className="mySwiper max-h-[450px]">
      
        <SwiperSlide key={1}>
                <div className='w-full h-[400px] flex-col justify-center items-start flex px-5 gap-10  bg-Primary_p50 bg-center bg-cover'
      style={{
        backgroundImage:`url(${imageSrc})`,
        backgroundRepeat:"no-repeat"
}}
    >
        <h4 className=' text-2xl md:text-[44px] font-calligraffitti font-bold text-white '>Imperfect Community</h4>
        <h5 className='text-lg md:text-2xl line-clamp-3 font-poppins font-semibold text-white ' >
             Join Imperfect community to connect with parents of special children. In our supportive community, we celebrate uniqueness, share experiences, and find strength together. Your journey matters here

        </h5> 
              <Link to={'/ask-question'} className='px-3 py-2 font-poppins font-semibold text-center text-white text-lg bg-Secondary1_Neutral rounded-lg'>
            Ask a question 
        </Link>
    </div>
        </SwiperSlide>
          <SwiperSlide key={2}>
            <div className='w-full h-[400px] flex-col justify-center items-start flex px-5 gap-10  bg-Primary_p50 bg-center bg-cover'
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundRepeat: "no-repeat"
              }}
            >
              <h4 className=' text-2xl md:text-[44px] font-calligraffitti font-bold text-white '>Imperfect Community</h4>
              <h5 className='text-lg md:text-2xl line-clamp-3 font-poppins font-semibold text-white ' >
                Join Imperfect community to connect with parents of special children. In our supportive community, we celebrate uniqueness, share experiences, and find strength together. Your journey matters here

              </h5>
              <Link to={'/ask-question'} className='px-3 py-2 font-poppins font-semibold text-center text-white text-lg bg-Secondary1_Neutral rounded-lg'>
                Ask a question
              </Link>
            </div>
          </SwiperSlide>
     
      </Swiper> 
       <button className=" arrow-right arrow border-2 p-2 max-md:hidden rounded-full "><IoIosArrowForward size={25}/></button>
        <button className="arrow-left arrow border-2 p-2 max-md:hidden rounded-full "><IoIosArrowBack size={25}/></button>
    </div>

    
    {/* our vision */}
    <div className='flex flex-col w-[95%] mx-auto justify-center items-center  gap-10  '>
                      <h3 className='text-Secondary1_Neutral text-lg md:text-[36px] font-poppins font-medium text-center'>
                        <HeadingTags title={"Our Vision"}/>
                      </h3>
                      <div className='w-full flex flex-col gap-5'>
                      <p
                      className='w-full mx-5 flex  justify-center  items-center font-poppins text-center font-normal text-xl '
                      >
                        Our vision for the Imperfect Community Plan stems from a profound belief in inclusivity and the collective strength that emerges from embracing diversity. We aspire to create a haven where special children and their parents feel not just accepted, but truly valued for their unique qualities. In our Imperfect Community, we aim to foster an environment that recognizes the individuality of every child and supports their journey towards a fulfilling life.
                      </p>
                      <ul className='list-decimal font-poppins text-lg'>
                           <li className='ml-5 font-poppins font-medium  text-TextColor_Neutral text-xl'> Empowerment through Education:
                            <ul className='list-disc ml-5 text-TextColor_T200 text-base'>
                                 <li>
                                 We envision a community where educational institutions are equipped to cater to the diverse needs of special children.
                                 </li>
                                 <li>
                                 Implementing inclusive teaching methodologies and personalized learning plans to unlock the full potential of each child.
                                 </li>
                                 <li>
                                 Collaborating with educators, specialists, and parents to create a holistic learning experience that goes beyond academic achievements.
                                 </li>
                            </ul>

                           </li>
                           <li className='ml-5 font-poppins font-medium text-TextColor_Neutral text-xl'> Accessible Healthcare and Therapeutic Support:
                            <ul className='list-disc ml-5 text-TextColor_T200 text-base'>
                                 <li>
                                 We envision a community where educational institutions are equipped to cater to the diverse needs of special children.
                                 </li>
                                 <li>
                                 Implementing inclusive teaching methodologies and personalized learning plans to unlock the full potential of each child.
                                 </li>
                                 <li>
                                 Collaborating with educators, specialists, and parents to create a holistic learning experience that goes beyond academic achievements.
                                 </li>
                            </ul>

                           </li>
                      </ul>
                      </div>
    </div>
    {/* How we help */}
    {/* <div className='flex flex-col w-[95%] mx-auto justify-center items-center  gap-10  '>
                      <h3 className='text-Secondary1_Neutral text-[36px] font-poppins font-medium text-center'>
                        <HeadingTags title={"How we help"}/>
                      </h3>
                      <div
                      className='w-full mx-5 flex flex-col  justify-center gap-[120px] items-center  font-poppins '
                      >
                        <div className='relative mb-10 w-full max-w-[450px] h-[300px] bg-pink-500 translate-x-[-10%]'>
                        <div className='flex w-full absolute shadow-2xl left-[65%] top-[50%] group z-10 flex-col gap-5 justify-center max-w-[450px] hover:bg-Primary_p50 px-5 py-10 rounded-lg bg-Secondary2_s50 items-center' >
                           <h3 className='font-calligraffitti capitalize font-semibold text-pink-500 text-left group-hover:text-Secondary1_Neutral self-start  text-2xl'> Join Community</h3>
                           <h5 className='text-lg font-poppins font-medium text-TextColor_Neutral text-left'>
                              Find the answers to your <samp className='text-Secondary1_Neutral capitalize font-semibold'>question</samp>  , help other by <samp className='text-Secondary1_Neutral capitalize font-semibold'> Answering</samp> them 
                           </h5>
                           <Link to={'/login'} className='px-3  self-end py-2 text-center text-lg font-medium text-white hover:text-Secondary1_Neutral hover:bg-white bg-Secondary1_Neutral rounded-lg'> 
                                    Join Community 
                           </Link>
                   </div>
                        </div>
                        <div className='relative mb-[80px] w-full max-w-[450px] h-[300px] bg-pink-500 translate-x-[-10%]'>
                        <div className='flex w-full absolute shadow-2xl left-[65%] top-[50%] group z-10 flex-col gap-5 justify-center max-w-[450px] hover:bg-Primary_p50 px-5 py-10 rounded-lg bg-Secondary2_s50 items-center' >
                           <h3 className='font-calligraffitti capitalize font-semibold text-pink-500 text-left group-hover:text-Secondary1_Neutral self-start  text-2xl'>
                             Join  As Expert</h3>
                           <h5 className='text-lg font-poppins font-medium text-TextColor_Neutral text-center'>
                              Be a part of oure  <samp className='text-Secondary1_Neutral capitalize font-semibold'>Exert Community</samp>  , help other as <samp className='text-Secondary1_Neutral capitalize font-semibold'>trusted persons</samp> and so on
                           </h5>
                           <Link to={'/login'} className='px-3  self-end py-2 text-center text-lg font-medium text-white hover:text-Secondary1_Neutral hover:bg-white bg-Secondary1_Neutral rounded-lg'> 
                           Be  a Part of Experts 
                           </Link>
                   </div>
                        </div>
               
                      </div>
    </div> */}
    <div className='flex flex-col w-[95%] mx-auto justify-center items-center  gap-10  '>
    <h3 className='text-Secondary1_Neutral text-lg md:text-[36px] font-poppins font-medium text-center'>
                       <HeadingTags title={"Who We Are"}/>
                        
                      </h3>
                      <p className='text-xl font-poppins font-normal  text-center'>
                      At ImperfectConnect, we are a dedicated community passionate about supporting parents of special children. We believe in the strength that comes from embracing differences and the power of shared experiences. Our platform is a safe haven where understanding thrives, resilience is celebrated, and every parent finds the support they need. Together, we navigate the unique journey of raising extraordinary children, fostering a sense of belonging and empowerment. Welcome to ImperfectConnect – where your story is at the heart of our community.
                      </p>
    </div>
    <div className='flex flex-col w-[95%] mx-auto justify-center items-center  gap-10 '>
    <h3 className='text-Secondary1_Neutral text-lg md:text-[36px] font-poppins font-medium text-center'>
                        <HeadingTags title={"Top ask question"}/>
                      </h3> 
                      <div className='flex w-full justify-end'>
                        <Link 
                        to={'/ask-question'}
                        className='border-2 border-Secondary1_Neutral ring-2 bg-Secondary1_s50 rounded-lg px-2 py-1 text-center text-lg ' >Ask a question</Link>
                      </div>
                      <div className='w-full flex flex-col justify-center items-center mx-auto gap-3'>
                       {questions?.slice(0,5)?.map((question)=>(
                         <Question 
                         title={question?.title}
                         details={question?.description }
                         q_id={question?.Q_id}
                         userName={question?.user?.fullName}
                         publish={question?.pub_date  }
                         avtar={question?.user?.avatar}
                         Qus_U_id={question?.U_id}
                         setQuestion={setQuestions}
                         />
                       ))}
                     
                      </div>
                   
    </div>
    <Develoer/>
    </div>

  )
}

export default Home
