import React, { useEffect, useState } from 'react'
import axios from 'axios'
import userimg from "../assets/hero1.jpg"
import { Link } from 'react-router-dom'
const Users = () => {
    const [userList,setUserList] = useState([])
  const [userType, setUserType] = useState('all')

     const getUsers = async () =>{
        // if(localStorage?.getItem('Token_refresh')){
                  await axios.get("http://3.108.227.195:8000/users-list/",{},{
             headers: {
            "Content-Type": "application/json",
            // "token": token
          }
        }).then((res)=>{
          // console.log(res,"refresh api data")
        //   localStorage?.setItem("Token",res?.data?.access_token)
           setUserList(res?.data)
        }).
        catch((err)=>console.log(err))
//   }
  }
//  console.log(userList , "user list")
  useEffect(()=>{getUsers()},[])
  return (
    <div className='w-[95%] flex   flex-col justify-start gap-5 md:gap-10 mx-auto  '>
   <div className='flex justify-between items-center'>
      <h3 className='text-3xl font-calligraffitti font-medium text-TextColor_Neutral'> Users</h3> 
       <select
        value={userType}
        onChange={e => setUserType(e.target.value)}
        className='focus:outline-none rounded-lg focus:border-pink-400 border-2 px-5 py-2'

      >
          <option value={'admin'}>Admin</option>
          <option value={'all'}>All Users</option>

        <option value={'expert'}>Expert</option>
        <option value={'parent'}>Parent</option>
        <option value={'special_person'}>Special Person</option>
      </select>
      </div>
              <div className="flex flex-wrap  justify-start gap-10 items-center w-full ">
                {
                  userList[0] &&  userList?.
            filter((user) => { if (userType ==='all'){return user}
              if (user?.userType ===userType) { return user }
              else return null
          }
            
            )?.
                  map((user)=>(
                    <Link to={`/user/${user?.U_id}`} key={user?.U_id} className='max-w-[325px] hover:scale-110 group  border rounded-lg shadow-md w-full px-5 pt-3 pb-1 flex flex-col gap-2'>
                        <div className='w-full flex gap-5 items-center'>
                            <div className='w-[60px] h-[60px] rounded-lg '>
                                <img  src={user?.avatar??userimg} className='w-full h-full rounded-md object-cover'/>
                            </div>
                            <div className='flex  flex-col py-1 font-poppins font-medium group-hover:text-white text-TextColor_T200'>
                                <Link className='text-2xl text-Secondary1_Neutral line-clamp-1'>{user?.fullName}</Link>
                                <h2 className='text-sm text-TextColor_T200'>{user?.country}</h2>
                            </div>
                        </div>
                        <h2 className='bg-Secondary1_s50 px-1 group-hover:text-Secondary1_Neutral rounded-lg w-fit'>{user?.userType}</h2>
                        <div></div>
                    </Link>
                    ))
                }
              </div>
    </div>
  )
}

export default Users