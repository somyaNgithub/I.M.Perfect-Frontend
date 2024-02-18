import React, { useEffect, useState } from 'react'
import imageSrc from '../assets/hero.png'
import { IoSearchSharp } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Question from '../Components/Question';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import HeadingTags from '../Components/Ribbon/HeadingTags';
import {Swiper , SwiperSlide} from 'swiper/react';
import Header from '../Components/Header'
import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.jpg";
import { Pagination ,Autoplay ,A11y ,Navigation } from 'swiper/modules';
import { Develoer } from '../Components/Home/Develoer';
import { Footer } from '../Components/Footer';
// import home_page_banner from '../assets/home_page_banner.png'
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
    <> 
    {/* <div className='w-full flex justify-center items-center bg-gray-100 bg-opacity-80'>
        <img src={home_page_banner} alt='home banner' className='w-[70vw] h-[200px] md:h-[30vh]' />
    </div> */}
    <Header/>
    < div className='space-y-10 mb-10'
    >
        {/* <a className='fixed bottom-[10%] left-10 rounded-full z-[-1]'><img src={facebook} alt='' className='h-10 w-10 rounded-full'  /></a> */}
<div className='relative   '>
   
      <Swiper 
      allowSlideNext={true}
      allowSlidePrev={true}
      // thumbs={true}
      navigation={{nextEl:".arrow-left", prevEl: ".arrow-right"}}
        // autoplay={{ delay: 4000 }} 
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
              <Link to={'/ask-question'} className='px-3 py-2 font-poppins font-semibold text-center  text-lg hover:bg-Original bg-white bg-opacity-30 hover:text-white text-Original border border-Original rounded-lg'>
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
              <Link to={'/ask-question'} 
             className="px-3 py-2 font-poppins font-semibold text-center  text-lg hover:bg-Original bg-white bg-opacity-30 hover:text-white text-Original border border-Original rounded-lg" 
              >
                Ask a question
              </Link>
            </div>
          </SwiperSlide>
     
      </Swiper> 
       <button className=" arrow-right arrow text-white p-2 max-md:hidden rounded-full "><IoIosArrowForward size={25}/></button>
          <button className="arrow-left arrow text-white p-2 max-md:hidden rounded-full "><IoIosArrowBack size={25}/></button>
    </div>

    
    {/* our vision */}
    <div className='flex flex-col w-[95%] mx-auto justify-center items-center  gap-10  '>
                      <h3 className=' text-lg md:text-[36px] font-poppins font-medium text-center'>
                        <HeadingTags title={"Our Vision"}/>
                      </h3>
                      <div className='w-full flex flex-col gap-5'>
                      <p
                      className='w-full mx-5   justify-center  items-center font-poppins text-center font-normal text-xl '
                      >
            <span className='font-bold'>  Building Bridges of Understanding:</span>
              We understand that the journey of raising a special child comes with its unique challenges and triumphs. Our mission is to build bridges of understanding within the community, connecting parents who seek guidance, experts who offer insights, and individuals who have a wealth of experience to share.
                      </p>
                    
                      </div>
    </div>
   
    <div className='flex flex-col w-full  bg-Original bg-opacity-20 py-10 mx-auto justify-center items-center  gap-10  '>
    <h3 className='text-Secondary1_Neutral text-lg md:text-[36px] font-poppins font-medium text-center'>
                       <HeadingTags title={"Who We Are"}/>
                        
                      </h3>
                      <p className='text-xl font-poppins font-normal mx-5  text-center'>
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
                         key={question?.Q_id}
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
    {/* <Footer/> */}
    </div>
    
</>
  )
}

export default Home
