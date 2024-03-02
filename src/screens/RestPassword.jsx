import React, { useState } from 'react'
import axios from 'axios'
import { FaArrowLeft, FaSpinner } from "react-icons/fa6";
import { IoEye, IoEyeOff } from 'react-icons/io5'
// import { data } from 'autoprefixer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import OtpInput from '../Components/OtpInput'
import Header from '../Components/Header';
const RestPassword = () => {
    const navigate = useNavigate()
    const {token} = useParams()
    const [Password, setPassword] = useState(null)
    const [ConfirmPassword,setConfirmPassword] = useState(null)
    const [processing, setProcessing]= useState(false)
    async function userLogin() {
        if (!Password ) {
            toast.error("Please Enter New Your Password ", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            return
        } 
        if (Password !== ConfirmPassword ) {
            toast.error("New Your Password and Confirm Password not matching ", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            return
        } 
        
        const data = {
            "new_password": Password,
        }
        const PasswordPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // if (!PasswordPattern.test(Password)) {
        //     console.log("Invalid Password format");
        //     toast.error('Invalid Password ', {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //     });
        //     // Handle validation error for Password (e.g., display an error message)
        //     return;
        // }
        setProcessing(true)
        await axios.put(`http://3.108.227.195:8000/password-reset/${token}/`, data, {
            headers: {
                "Content-Type": "application/json",
                // "token": token
            }
        }).then((res) => {
            if (res?.data?.detail){
            toast.success(`Password Updated  `, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(()=>{navigate('/')
        setProcessing(false)
        },3000)

            }
        })
            .catch((err) => {
                console.log("error contact us", err)
                toast.error('Some thing wrong happends ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setProcessing(false)
            })
    }
    return (<> 
    <Header hid={true}/>
        <div className='w-full justify-center items-center flex  h-[70vh] bg-gray-300'>
            <div className='max-w-[550px] w-full  mx-auto flex  px-5 py-5 flex-col gap-5 justify-center items-start bg-white rounded-lg shadow-md  '>
                <h3 className='text-Original text-2xl font-poppins font-semibold  '>Reset Password</h3>
                <div className='w-full space-y-5'>
                    <div className='text-TextColor_Neutral border hover:border-Original text-base w-full flex flex-col px-2 gap-[5px]'>
                        <label>New Password</label>
                        <input
                            type='password'
                            value={Password}
                            onChange={e => setPassword(e.target.value)}
                            className='focus:outline-none rounded-lg w-full '
                            placeholder='Enter New Password'
                        />
                    </div>
                    <div className='text-TextColor_Neutral border hover:border-Original text-base w-full flex flex-col px-2 gap-[5px]'>
                        <label>Confirm Password</label>
                        <input
                            type='password'
                            value={ConfirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            className='focus:outline-none rounded-lg w-full '
                            placeholder='Enter Confirm Password'
                        />
                    </div>
                    {/* <h4 className='text-sm text-TextColor_T200 font-poppins'>
                        we'll send a password rest link to your Password if it matches an existing Imperfect account.
                    </h4> */}
                    <button disabled={processing} onClick={userLogin} className='border-Original  text-Original hover:bg-Original hover:text-white border rounded-lg w-full px-5 font-medium font-poppins  text-lg '>
                        {processing ? <FaSpinner size={25} className='text-Original animate-spin' /> :"Reset Password"} 
                    </button>
                    <button onClick={()=>navigate(-1)} className='  rounded-lg w-full px-5 font-medium font-poppins text-TextColor_T200 text-lg '>
                        back
                    </button>


                    {/* <h3>if do not have a account create <Link to={'/sign-up'} className='underline text-error'>New</Link> </h3> */}

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
        </>
    )
}

export {RestPassword}
