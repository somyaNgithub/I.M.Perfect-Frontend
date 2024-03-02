import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import DevIMG from '../../assets/devexp.jpg'
const Develoer = () => {
  return (
    <div
    className='w-full flex  justify-between gap-10 my-7 items-center flex-col'
    >
      <h3 className='text-5xl font-medium font-poppins  '>Our Developer</h3>  
           <div className='flex flex-col sm:flex-row mt-20 justify-between gap-10 items-center mx-auto'>
            <Dev
            name={'Somya Namdeo'}
            img={DevIMG} 
            role={'Backend Engineer + DBA  '} 
            linkdin={'https://www.linkedin.com/in/somya-n-140797248/'}
            github={'https://github.com/somyaNgithub'}
            />
              <Dev
            name={'Mohit Dubey'}
            img={DevIMG} 
            role={'Frontend Engineer  '} 
            linkdin={'https://www.linkedin.com/in/mohit132/'}
            github={'https://github.com/mohitdubey132'}
            />
           </div>
      </div>

  )
}

export { Develoer}

const Dev = ({ name , img , role , linkdin , github  }) =>{
         return (
            <div className=' min-w-[320px] w-full max-w-[360px] flex flex-col min-h-[240px] max-md:mt-[100px] relative rounded-lg shadow-lg bg-opacity-70 bg-Original hover:bg-opacity-100  items-center'>
                <div className='w-[200px] h-[200px] absolute top-[-100px] rounded-full flex mx-auto items-center justify-center'>
                    <img src={img} alt='name' className='object-cover rounded-full w-full h-full'/>
                </div>
                <div className='flex flex-col gap-2 absolute bottom-3 w-full items-center justify-center'>
                      <h3 className='text-2xl font-calligraffitti font-bold text-white '>{name}</h3>
                 <h4 className='text-xl font-poppins font-medium text-slate-200 '> Role : {role}</h4>
                <div className='flex gap-5 mx-auto items-center'>
                 <a target='_blank' rel="noreferrer" href={linkdin} > < FaLinkedin  size={25} className='text-slate-200'/> </a> 
                  <a target='_blank' rel="noreferrer" href={github} > < FaGithub size={25}/> </a> 
             
                </div>
                </div>
              
            </div>
         )
}