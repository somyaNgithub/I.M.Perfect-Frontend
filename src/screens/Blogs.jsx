import React from 'react'
import Header from '../Components/Header'
import hero1 from '../assets/hero1.jpg'
import bolg2 from '../assets/blog2.jpg'

const Blogs = () => {
  return (
    <>
    <Header/>   
          <div className='bg-[#C0C0C0] bg-opacity-40'>
    <h3 className='text-4xl font-calligraffitti mt-10 px-5 text-Original font-semibold'>Blogs</h3>
    <div className='w-full mx-auto justify-start gap-10 items-center flex flex-wrap px-5 my-10 py-5'>
              <Blog title={'Embracing Imperfection: A Journey Towards Authenticity'} 
                  details={"Imperfection is a fundamental aspect of life. It's what makes us unique, relatable, and ultimately, human. Yet, many of us strive for an unattainable standard of perfection, fearing judgment or rejection if we fall short. However, this pursuit of perfection often leads to feelings of anxiety, insecurity, and dissatisfaction."}
                  publisdate={"22/02/2024"}
                  img={hero1}
              /> 
                  <Blog title={'Walking Together: Supporting Individuals with Mobility Challenges'}
                      details={"In our daily rush, it's easy to overlook the struggles faced by those with walking disabilities. From navigating uneven terrain to accessing public spaces, every step can present a hurdle. However, with compassion and support, we can make a world of difference. By advocating for accessibility and offering a helping hand, we can ensure that individuals with mobility challenges can move through life with dignity and independence. Let's explore some simple yet impactful ways we can lend our support."}
                  publisdate={"22/02/2024"}
                  img={bolg2}
              />
              <Blog title={'Embracing Imperfection: A Journey Towards Authenticity'}
                  details={"Imperfection is a fundamental aspect of life. It's what makes us unique, relatable, and ultimately, human. Yet, many of us strive for an unattainable standard of perfection, fearing judgment or rejection if we fall short. However, this pursuit of perfection often leads to feelings of anxiety, insecurity, and dissatisfaction."}
                  publisdate={"22/02/2024"}
                  img={hero1}
              />
    </div>
  </div>
    </>
  )
}

export { Blogs }

const Blog = ({img,title,publisdate,details})=>{
    return (<div className='max-w-[340px] bg-white flex flex-col gap-2 px-2 py-3 rounded-lg border'>
        <div className='w-full flex justify-center items-center'>
            <img src={img} className='object-cover h-[300px] w-full'/>
        </div>
        <div className='flex flex-col gap-2 px-2 py-1'>
            <h3 className='capitalize text-2xl text-Original font-poppins font-medium text-left line-clamp-1'>{title}</h3>
            <p className=' text-lg text-TextColor_T200 font-poppins font-normal text-left line-clamp-6'>{details}</p>
            <h3 className='capitalize text-base text-TextColor_T200 font-poppins font-medium text-left line-clamp-1'>Publicated at  {publisdate}</h3>
        </div>
    </div>)
}