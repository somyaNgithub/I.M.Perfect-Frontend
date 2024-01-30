import React, { useEffect, useState } from 'react'
import axios from 'axios'
import userimg from "../assets/hero1.jpg"
import { Link } from 'react-router-dom'
const Users = () => {
    const [userList,setUserList] = useState([])
     const getUsers = async () =>{
        // if(localStorage?.getItem('Token_refresh')){
                  await axios.get("http://3.108.227.195:8000/users-list/",{},{
             headers: {
            "Content-Type": "application/json",
            // "token": token
          }
        }).then((res)=>{
          console.log(res,"refresh api data")
        //   localStorage?.setItem("Token",res?.data?.access_token)
           setUserList(res?.data)
        }).
        catch((err)=>console.log(err))
//   }
  }
 console.log(userList , "user list")
  useEffect(()=>{getUsers()},[])
  return (
    <div className='w-[95%] flex   flex-col justify-start mx-auto  '>
             <h3 className='text-3xl font-calligraffitti font-medium text-TextColor_Neutral'> Users</h3>
              <div className="flex flex-wrap  justify-start gap-10 items-center w-full ">
                {
                  userList[0] &&  userList?.map((user)=>(
                    <div key={user?.U_id} className='max-w-[325px] hover:scale-110 group hover:bg-black hover:text-white border rounded-lg shadow-md w-full px-5 py-3 flex flex-col ma'>
                        <Link to={`/user/${user?.U_id}`} className='w-full flex gap-5 items-center'>
                            <div className='w-[60px] h-[60px] rounded-lg '>
                                <img  src={user?.avatar??userimg} className='w-full h-full object-cover'/>
                            </div>
                            <div className='flex  flex-col py-1 font-poppins font-medium group-hover:text-white text-TextColor_T200'>
                                <Link className='text-2xl text-Secondary1_Neutral line-clamp-1'>{user?.fullName}</Link>
                                <h2 className='text-sm text-TextColor_T200'>{user?.country}</h2>
                            </div>
                        </Link>
                        <h2 className='bg-Secondary1_s50 px-1 group-hover:text-Secondary1_Neutral rounded-lg w-fit'>{user?.userType}</h2>
                        <div></div>
                    </div>
                    ))
                }
              </div>
    </div>
  )
}

export default Users