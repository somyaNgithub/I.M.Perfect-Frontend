import React from 'react'
import Header from '../Components/Header'
import imageSrc from '../assets/about21.jpeg'

const AboutUs = () => {
  return (
    <>
    <Header/> 
    <div className='flex flex-col gap-5 my-5 justify-center items-center w-[96%] mx-auto'>
    <div   className='w-full h-[400px] flex-col justify-center items-start flex px-5 gap-10  bg-Primary_p50 bg-center bg-cover'
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundRepeat: "no-repeat"
              }}
            >
              
           
            </div>
<h3 className='md:text-4xl text-2xl  font-poppins text-Original font-bold'>       Welcome to IMPERFECT - Empowering Communities, Nurturing Lives
        </h3> 
        At IMPERFECT, we believe in the power of community, empathy, and shared experiences. Our platform is dedicated to fostering a supportive environment for families with special children, connecting parents, experts, and caregivers on a shared journey towards understanding, growth, and joy.
   <div>
        <h3 className='text-2xl font-poppins text-Original font-bold'>   
        Our Mission </h3>
         <h3>
      <span className='font-medium underline text-TextColor_Neutral'>  Building Bridges of Understanding: </span>
        We understand that the journey of raising a special child comes with its unique challenges and triumphs. Our mission is to build bridges of understanding within the community, connecting parents who seek guidance, experts who offer insights, and individuals who have a wealth of experience to share.
        </h3>
      </div> 
      <div>
        <h3 className='text-2xl font-poppins text-Original font-bold'>  
        A Safe Haven for Questions: </h3>
        IMERFECT provides a safe haven where parents and caregivers can ask questions, seek advice, and share their stories. Whether you're navigating the complexities of therapy, education, or daily life, our community is here to lend an empathetic ear and a helping hand.
        </div>   
        <div>
        <h3 className='text-xl font-poppins text-Original font-bold'>  
        Key Features </h3>
        <span className='font-medium underline text-TextColor_Neutral'>   Expert Insights: </span>
        Access insights from experienced professionals and specialists in the field. Our platform brings together a diverse range of experts who contribute their knowledge to empower and educate our community.

<br/>        <span className='font-medium underline text-TextColor_Neutral'> 
        Parent-to-Parent Support: </span>
        Connect with other parents who have walked a similar path. Share your experiences, offer encouragement, and find solace in a community that understands the unique joys and challenges of raising a special child.
        <br/>
        <span className='font-medium underline text-TextColor_Neutral'> 
          Interactive Q&A: </span>
        Our interactive Q&A feature allows users to ask questions and receive personalized responses. Whether you're seeking advice on therapies, coping strategies, or simply need someone to talk to, our community is here for you.
        <br/>    <span className='font-medium underline text-TextColor_Neutral'> 
        Join Us in Building a Supportive Community </span>
        At I.M.Perfect, we invite you to become a part of our growing community. By joining us, you're not only accessing a wealth of knowledge but also contributing to a culture of understanding and support.
        
        <h3 className='text-2xl font-poppins text-Original font-bold'> 
          How You Can Get Involved  </h3>
          <span className='font-medium  text-TextColor_Neutral'> 1. Ask Questions:</span> Pose your questions to the community and receive insights from both experts and fellow parents.
       <br/>
       <span className='font-medium  text-TextColor_Neutral'>2. Share Your Story:</span> Your journey is unique and valuable. Share your story to inspire and uplift others who may be going through similar experiences.<br/>
       <span className='font-medium  text-TextColor_Neutral'>3. Connect with Experts:</span> Engage with specialists who offer expertise in various aspects of caring for special children.
       <br/>
       <span className='font-medium  text-xl text-Original'>  Together, let's create a community where every member feels heard, supported, and empowered. Join us on this meaningful journey at I.M.Perfect.
       </span>
        </div>
    </div>
    </>
  )
}

export {AboutUs}