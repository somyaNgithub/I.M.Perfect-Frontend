import React, { useState } from 'react'
import axios from 'axios'
import { IoEye, IoEyeOff } from 'react-icons/io5'
// import { data } from 'autoprefixer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate  = useNavigate()
  const [email,setEmail] =useState(null)
  const [password,setPassword] = useState(null)
  const [passwordIsVisual,setPasswordIsVisual] = useState(false)
  const handlePassword =()=>{
    setPasswordIsVisual(pre => !pre)
  }
  async function userLogin () {
    const data = {
      "username": email,
    "password": password
    }
    await axios.post('http://3.108.227.195:8000/login/',data,{
      headers: {
        "Content-Type": "application/json",
        // "token": token
      }
    }).then((res) => {
      console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
      // const questionArray = res?.data 
      // setQuestions(questionArray)

      if (res?.data?.api_status) {
        // setOrder_no(res?.data?.data)
        localStorage?.setItem("Token",res?.data?.Token?.access)
        localStorage?.setItem("Token_refresh",res?.data?.Token?.refresh)
        localStorage?.setItem("user",JSON?.stringify(res?.data?.user))
        console.log(res, '-----------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_______________________________________________')
        console.log(res?.data?.api_status,"result")
          toast.success('Login successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(()=>{navigate(-1)},5000)
            
      }
      else {
        // navigate(-1)
         toast.error('Username or password did not Match', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }

    })
    .catch((err) => { console.log("error contact us", err)
     toast.error('Something went wrong try again later', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            }); 
  })
  }
  return (
    <div className='w-full justify-center items-center flex h-[70vh]  bg-pink-100'>
        <div className='max-w-[350px] mx-auto flex px-5 py-5 flex-col gap-5 justify-center items-center bg-white rounded-lg shadow-md  '>
                    <h3 className='text-pink-400 text-2xl font-poppins font-semibold  '>Login</h3>
                   <div className='w-full space-y-5'>
                    <div className='text-TextColor_Neutral text-base w-full flex flex-col  gap-[10px]'>
                     <label>User Name</label>
                     <input  
                     type='email'
                     value={email}
                     onChange={e=>setEmail(e.target.value)}
                     className='focus:outline-none rounded-lg focus:border-pink-400 border-2 px-5 py-2'
                     placeholder='Enter  your email'
                     />
                    </div>
                    <div className='text-TextColor_Neutral text-base w-full flex flex-col gap-[10px] '>
                     <label>Password</label>
                     <div className='w-full items-center px-1 flex border focus:border-pink-400 hover:border-pink-400 rounded-lg'>
                     <input  
                     type={passwordIsVisual?"text":"password"}
                     value={password}
                     onChange={(e)=>setPassword(e?.target?.value)}
                     className='focus:outline-none    px-5 py-2'
                     placeholder='Enter Password'
                     />
                     <button onClick={handlePassword}>
                   {passwordIsVisual?   <IoEye size={20} className='text-pink-300'/> :<IoEyeOff size={20} className='text-text_disable'/>
                     }          
                                </button>
                     </div>
                    
                    </div>
                    <div className='justify-center flex'>
                      <button onClick={userLogin} className='bg-[#ffce00] rounded-lg px-5 font-medium font-poppins text-white text-lg '>
                        Login 
                      </button>

                    </div>
                    <h3>if do not have a account create <Link to={'/sign-up'} className='underline text-error'>New</Link> </h3>

                   </div>
        </div>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  )
}

export default Login
