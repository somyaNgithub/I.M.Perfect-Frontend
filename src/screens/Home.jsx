import React from 'react'
import imageSrc from '../assets/hero.png'
import { IoSearchSharp } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Question from '../Components/Question';
const Home = () => {
  return (
    < div className='space-y-12'
    >
    <div className='w-full h-[400px] flex-col justify-center items-start flex px-5 gap-10  bg-Primary_p50 bg-center bg-cover'
      style={{
        backgroundImage:`url(${imageSrc})`,
        backgroundRepeat:"no-repeat"
}}
    >
        <h4 className='text-[44px] font-poppins font-semibold text-white '>Imperfect Community</h4>
        <h5 className='text-2xl font-poppins font-semibold text-white ' >
             Join Imperfect community to connect with parents of special children. In our supportive community, we celebrate uniqueness, share experiences, and find strength together. Your journey matters here

        </h5> 
        <button className='px-3 py-2 font-poppins font-semibold text-center text-white text-lg bg-Secondary1_Neutral rounded-lg'>
            Ask a question 
        </button>
    </div>
    <div className='flex flex-col w-[95%] mx-auto justify-center items-center  gap-10  '>
                      <h3 className='text-Secondary1_Neutral text-[36px] font-poppins font-medium text-center'>
                        Our Service
                      </h3>
                      <div
                      className='w-full mx-5 flex flex-col md:flex-row justify-center gap-10 items-center font-poppins '
                      >
                   <div className='flex w-full flex-col gap-5 justify-center max-w-[450px] hover:bg-Primary_p50 px-5 py-10 rounded-lg bg-Secondary2_s50 items-center' >
                           <IoSearchSharp size={25} />
                           <h5 className='text-lg font-poppins font-medium text-TextColor_Neutral text-center'>
                              Find the answers to your <samp className='text-Secondary1_Neutral capitalize font-semibold'>question</samp>  , help other by <samp className='text-Secondary1_Neutral capitalize font-semibold'> Answering</samp> them 
                           </h5>
                           <button className='px-3 py-2 text-center text-lg font-medium text-white hover:text-Secondary1_Neutral hover:bg-white bg-Secondary1_Neutral rounded-lg'> 
                                    Join Community 
                           </button>
                   </div>
                   <div className='flex w-full flex-col gap-5 justify-center max-w-[450px] hover:bg-Primary_p50 px-5 py-10 rounded-lg bg-Secondary2_s50 items-center' >
                           <CiLock size={25} />
                           <h5 className='text-lg font-poppins font-medium text-TextColor_Neutral text-center'>
                              Be a part of oure  <samp className='text-Secondary1_Neutral capitalize font-semibold'>Exert Community</samp>  , help other as <samp className='text-Secondary1_Neutral capitalize font-semibold'>trusted persons</samp> and so on
                           </h5>
                           <button className='px-3 py-2 text-center text-lg font-medium text-white hover:text-Secondary1_Neutral hover:bg-white bg-Secondary1_Neutral rounded-lg'> 
                                    Be  a Part of Experts 
                                                              </button>
                   </div>
                      </div>
    </div>
    <div className='flex flex-col w-[95%] mx-auto justify-center items-center  gap-10  '>
    <h3 className='text-Secondary1_Neutral text-[36px] font-poppins font-medium text-center'>
                        Who We Are
                      </h3>
                      <p className='text-lg font-poppins font-medium text-center'>
                      At ImperfectConnect, we are a dedicated community passionate about supporting parents of special children. We believe in the strength that comes from embracing differences and the power of shared experiences. Our platform is a safe haven where understanding thrives, resilience is celebrated, and every parent finds the support they need. Together, we navigate the unique journey of raising extraordinary children, fostering a sense of belonging and empowerment. Welcome to ImperfectConnect – where your story is at the heart of our community.
                      </p>
    </div>
    <div className='flex flex-col w-[95%] mx-auto justify-center items-center  gap-10 '>
    <h3 className='text-Secondary1_Neutral text-[36px] font-poppins font-medium text-center'>
                        Top Questions 
                      </h3>
                      <div className='w-full flex flex-col gap-3'>
                      <Question/>
                      <Question/>
                      <Question/>
                      <Question/>
                      </div>
                   
    </div>
    </div>

  )
}

export default Home
