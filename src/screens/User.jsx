import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero1 from "../assets/hero1.jpg"
import { BsCake } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { EditorReadOnly } from '../Components/Editor/EditorReadOnly';
const User = () => {
    const {id} = useParams()
    const [UserDatam , SetUserData] = useState('')

    useEffect(()=>{
       axios.get(`http://3.108.227.195:8000/get_user/${id}/`)
       .then((res)=>{
        console.log(res)
        if(res?.status===200){
            SetUserData(res?.data)
        }
       }).catch((err)=>console.log(err))
    },[id])
  return (
    <div className='flex flex-col w-[95%] mx-auto gap-10'>
        {/* user hoto nd basic details */}
        <div className='w-full flex flex-col md:flex-row flex-wrap gap-5 items-start justify-center md:items-center md:justify-start'>
            <div className='w-[200px] h-[200px] flex items-center justify-center'>
                <img src={UserDatam?.avatar??Hero1} alt={UserDatam?.userName} className='w-full object-cover rounded-xl'/>
            </div>
            <div className='flex  flex-col gap-5'>
                     <h3 className='text-3xl text-TextColor_Neutral font-poppins font-medium'>
                        {UserDatam?.fullName}
                     </h3>
                     <div>
                     <h3 className='text-base text-text_disable flex gap-2  items-center  font-medium'><BsCake/>   Member for 15 years, 4 months</h3>
                     <h3 className='text-base text-text_disable flex  gap-2 items-center  font-medium'><IoMailOutline />  <a href = {`mailto: ${UserDatam?.userName}`}>{UserDatam?.fullName}</a> <FaLocationDot/> {UserDatam?.country} </h3>
 
         </div>
            </div>
        </div>
        {/* Stats and about */}
        <div className='w-full flex flex-col md:flex-row gap-5 items-start justify-center md:items-center md:justify-start'>
            {/* status */}
            <div className=' max-w-[425px] gap-5 justify-between text-center w-full px-5 py-3 flex flex-wrap items-center border-2 rounded-xl'>
                <div className='text-lg font-poppins font-medium text-text_disable '>
                    <h3 className='text-base '>300</h3>
                     <h3 className='text-lg '>Total question </h3>
                </div>
                <div className='text-lg font-poppins font-medium text-text_disable '>
                    <h3 className='text-base '>250</h3>
                     <h3 className='text-lg '>Total Answered</h3>
                </div>
                <div className='text-lg font-poppins font-medium text-text_disable '>
                    <h3 className='text-base '>3</h3>
                     <h3 className='text-lg '> Last week question</h3>
                </div>
                <div className='text-lg font-poppins font-medium text-text_disable '>
                    <h3 className='text-base '>6</h3>
                     <h3 className='text-lg '> Last week answered</h3>
                </div>
                
            </div>
            {/* about */}
            <div className='px-5 py-3 w-full border-2 rounded-2xl flex-col flex gap-5'>
                {/* title */}
                <h3 className='font-poppinsnpm i @editorjs/editorjs text-TextColor_Neutral font-medium text-2xl'>About Me</h3>
                <p className='text-TextColor_T200 font-medium w-full flex'>
             
                      {UserDatam?.about ? <EditorReadOnly 
                          id={UserDatam?.U_id}
                          data={UserDatam?.about ?? '{"name":"12",}'}
                          key={'24'}
                      /> :`sys System Configuration Management Administrator (ClearCase, SVN, Git), defining various merge workflows between branches.

                      app Development Architect, which involves:

                      tools support around java technologies, including eclipse.
                      code quality evaluation, including metrics definitions, and code static tools for different populations.
code management (Jira, FishEye/Crucible, Maven, Hudson, Sonar)`}
                    

                </p>
            </div>
        </div>
        {/* top question and answer  */}
    </div>
  )
}

export {User}