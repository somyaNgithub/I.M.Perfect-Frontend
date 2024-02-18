import React, { useState } from 'react'
import axios from 'axios'
import { FaArrowLeft, FaSpinner } from "react-icons/fa6";
import { IoEye, IoEyeOff } from 'react-icons/io5'
// import { data } from 'autoprefixer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import OtpInput from '../Components/OtpInput'
const ForgetPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [processing, setProcessing]= useState(false)
    async function userLogin() {
        if (!email) {
            toast.error("Please Enter Your email ", {
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
            "username": email,
        }
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            console.log("Invalid email format");
            toast.error('Invalid Email ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            // Handle validation error for email (e.g., display an error message)
            return;
        }
        setProcessing(true)
        await axios.post('http://3.108.227.195:8000/password_reset_token_gen/', data, {
            headers: {
                "Content-Type": "application/json",
                // "token": token
            }
        }).then((res) => {
            console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
            // const questionArray = res?.data 
            // setQuestions(questionArray)

            // if (res?.data?.api_status) {
            //     // setOrder_no(res?.data?.data)
            //     localStorage?.setItem("Token", res?.data?.Token?.access)
            //     localStorage?.setItem("Token_refresh", res?.data?.Token?.refresh)
            //     localStorage?.setItem("user", JSON?.stringify(res?.data?.user))
            //     // console.log(res, '-----------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_______________________________________________')
            //     // console.log(res?.data?.api_status,"result")
            //     toast.success('Login successfully', {
            //         position: "top-center",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "colored",
            //     });
            //     setTimeout(() => { navigate(-1) }, 5000)

            // }
            // else {
            //     // navigate(-1)
            //     toast.error('Username or password did not Match', {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "light",
            //     });
            // } 
            if (res?.data?.detail){
            toast.success(`Password reset link sent successfully on Your Email Id `, {
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
                toast.error('No user found with this Email Id', {
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
    // async function verifyOTP() {
    //     const data = {
    //         "email": email,
    //         "otp_code": otp
    //     }
    //     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //     if (!emailPattern.test(email)) {
    //         console.log("Invalid email format");
    //         toast.error('Invalid Email ', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //         });
    //         // Handle validation error for email (e.g., display an error message)
    //         return;
    //     }
    //     await axios.post(
    //         // 'http://3.108.227.195:8000/login/',
    //         'http://3.108.227.195:8000/otp-verify/',
    //         data, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             // "token": token
    //         }
    //     }).then((res) => {
    //         console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
    //         // const questionArray = res?.data 
    //         // setQuestions(questionArray)
    //         if (res?.data?.token) {
    //             localStorage?.setItem("Token", res?.data?.token?.access)
    //             localStorage?.setItem("Token_refresh", res?.data?.token?.refresh)
    //             localStorage?.setItem("user", JSON?.stringify(res?.data?.user))
    //             if (!res?.data?.user?.fullName) {
    //                 navigate('/sign-up')
    //             }
    //             else {
    //                 navigate(-1)
    //             }
    //         }
    //         toast.error('Login Successfull', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });


    //     })
    //         .catch((err) => {
    //             console.log("error contact us", err)
    //             toast.error(err?.response?.data?.detail, {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //         })

    // }
    // async function GenrateOTP() {
    //     const data = {
    //         "email": email
    //     }
    //     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //     if (!emailPattern.test(email)) {
    //         // console.log("Invalid email format");
    //         toast.error('Invalid Email ', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //         });
    //         // Handle validation error for email (e.g., display an error message)
    //         return;
    //     }
    //     await axios.post(
    //         // 'http://3.108.227.195:8000/login/',
    //         'http://3.108.227.195:8000/otp-generate/',
    //         data, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             // "token": token
    //         }
    //     }).then((res) => {
    //         console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
    //         setGetOTP(true)
    //         // const questionArray = res?.data 
    //         // setQuestions(questionArray)

    //         if (res?.data?.api_status) {
    //             // setOrder_no(res?.data?.data)
    //             // localStorage?.setItem("Token", res?.data?.Token?.access)
    //             // localStorage?.setItem("Token_refresh", res?.data?.Token?.refresh)
    //             // localStorage?.setItem("user", JSON?.stringify(res?.data?.user))
    //             // // console.log(res, '-----------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_______________________________________________')
    //             // console.log(res?.data?.api_status,"result")
    //             toast.success('Login successfully', {
    //                 position: "top-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //             // setTimeout(() => { navigate(-1) }, 5000)

    //         }
    //         else {
    //             // navigate(-1)
    //             toast.success('OTP send on Email ', {
    //                 position: "top-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //         }

    //     })
    //         .catch((err) => {
    //             console.log("error contact us", err)
    //             toast.error('Something went wrong try again later', {
    //                 position: "top-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //         })

    // }
    // const onOtpSubmit = (otp) => {
    //     setOtp(otp)
    //     console.log("Login Successful @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", otp);
    // };
    return (
        <div className='w-full justify-center items-center flex h-[70vh]  bg-gray-300'>
            <div className='max-w-[550px] w-full  mx-auto flex px-5 py-5 flex-col gap-5 justify-center items-start bg-white rounded-lg shadow-md  '>
                <h3 className='text-Original text-2xl font-poppins font-semibold  '>Forget Password</h3>
                <div className='w-full space-y-5'>
                    <div className='text-TextColor_Neutral border hover:border-Original text-base w-full flex flex-col px-2 gap-[5px]'>
                        <label>UserName</label>
                        <input
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='focus:outline-none rounded-lg w-full '
                            placeholder='Enter  your email'
                        />
                    </div>
                    <h4 className='text-sm text-TextColor_T200 font-poppins'>
                        we'll send a password rest link to your email if it matches an existing Imperfect account.
                    </h4>
                    <button disabled={processing} onClick={userLogin} className='border-Original  text-Original hover:bg-Original hover:text-white border rounded-lg w-full px-5 font-medium font-poppins  text-lg '>
                        {processing ? <FaSpinner size={25} className='text-Original animate-spin' /> :"Get  Link"} 
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
    )
}

export {ForgetPassword}
