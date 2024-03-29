import React, { useState } from 'react'
import axios from 'axios'
import { IoEye, IoEyeOff } from 'react-icons/io5'
// import { data } from 'autoprefixer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { GrAttachment } from 'react-icons/gr'
import { Editor } from '../Components/Editor';
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowLeft } from 'react-icons/sl'
import { MdOutlineCancel } from 'react-icons/md'
import avatar from "../assets/avatar.png"
const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem('user'))?.userName)
  const [password, setPassword] = useState(null)
  const [passwordIsVisual, setPasswordIsVisual] = useState(false)
  const [fullname, setFullName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('male');
  const [address, setAddress] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [country, setCountry] = useState('India')
  const [about, setAbout] = useState('{"mdohit":"32"}')
  const [imageSizeKB, setImageSizeKB] = useState(null);
  const [flieAttached, setFileAttached] = useState(null);
  const [fileName, setFileName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [file1, setFile] = useState(null)
  const [userType, setUserType] = useState('parent')
  const handlePassword = () => {
    setPasswordIsVisual(pre => !pre)
  }
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    async function getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.onerror = reject
      })

    }
    // usage
    getBase64(selectedFile) // `file` your img file
      .then(res => {
        console.log(res, typeof (res));
        setFile(res)
      }) // `res` base64 of img file
      .catch(err => console.log(err))
    if (selectedFile) {
      setFileSize(selectedFile.size / 1024)
      const reader = new FileReader();

      reader.onload = (e) => {
        setFileAttached(e.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
    setFileAttached(selectedFile)

  };
  const removeFile = () => {
    setFileAttached(null)
    setFileName(null)
    setSelectedFile(null)
    setImageSizeKB(null)
  }

  const getImageSizeInKB = (event) => {
    const file2 = event.target.files[0]; // Assuming you're using an input type="file"
    const fileSizeInKB = file2.size / 1024; // Convert bytes to kilobytes
    const name = file2.name;
    async function getBase64(file) {
    }
    // usage
    getBase64(file2) // `file` your img file
      .then(res => {
        console.log(res, typeof (res));
        setFile(res)
      }) // `res` base64 of img file
      .catch(err => console.log(err))
    if (file2) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setFileAttached(e.target.result);
      };

      reader.readAsDataURL(file2);
    }
    const typeOfFile = file2.type;
    setFileAttached(file2)
    setFileName(name);
    setImageSizeKB(fileSizeInKB);
  };

  async function userSignUp() {
    if (!flieAttached|| !password || !fullname || !age || !gender || !address || !mobileNo) {
      console.log("All fields are required");
      toast.error('All fields are required', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      // Handle validation error (e.g., display an error message)
      return;
    }
    const mobileNumberPattern = /^[0-9]{10}$/;
    if (!mobileNumberPattern.test(mobileNo)) {
      console.log("Invalid mobile number format");
      toast.error('Invalid mobile number format', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      // Handle validation error (e.g., display an error message)
      return;
    }
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,20}$/;

    if (!passwordPattern.test(password)) {
      console.log("Invalid password format");
      toast.error(`WARNING: Your password must meet the format`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // Handle validation error for password (e.g., display an error message)
      return;
    }
    // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // if (!emailPattern.test(email)) {
    //   console.log("Invalid email format");
    //   toast.error('Invalid email format', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   // Handle validation error for email (e.g., display an error message)
    //   return;
    // }

    const data = {
      "userType": userType,
      "password": password,
      // "userName": email,
      "fullName": fullname,
      "about": about,
      "age": age,
      "gender": gender,
      "address": address,
      "mobileNo": mobileNo,
      "country": country,
      "avatar": flieAttached
    }
    const token = localStorage.getItem('Token')
    await axios.patch('http://3.108.227.195:8000/user-update/', data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    }).then((res) => {
      // console.log(res, '---------------------------------------------------------------@@@@@@@@@@@@@@2222222222222222222222@')
      // const questionArray = res?.data 
      // setQuestions(questionArray)
      localStorage.setItem("user", JSON?.stringify(res?.data))
      toast.success('Account Updated  successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => { navigate('/') }, 5000)
    })
      .catch((err) => {
        console.log("error contact us", err)
        toast.error('Some Error Occurred ', {
          position: "top-center",
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
    <div className='w-full max-sm:max-w-[420px] justify-center items-center flex py-3 md:py-5  bg-gray-300'>
      <div className=' mx-auto flex px-5 py-5 flex-col gap-5 justify-center items-center bg-white rounded-lg shadow-md  '>
        <h3 className='text-Original text-2xl font-poppins font-semibold  '>Update Your Profile</h3>
        <div className='px-5 my-5 flex flex-col-reverse gap-2 bg-white rounded-lg font-poppins py-3 items-center  border-border_Neutral justify-between  '>

          <label htmlFor='attachFile' className='cursor-pointer rounded-md bg-pink-200 px-2 py-1'>Upload Profile Photo</label>
          <input type='file'
            accept="image/png, image/jpeg "
            id='attachFile'
            onChange={getImageSizeInKB}
            placeholder='Select a file or drag and drop here'
            className='w-full hidden border rounded-lg' />
          {imageSizeKB ? <><div className='relative py-1 pt-2 pr-2 text-error'><div><img src={flieAttached} className='w-20 h-20 rounded-md' /></div> <button onClick={() => removeFile()} className='absolute top-0 right-0'><MdOutlineCancel className='w-5 h-5 rounded-full' /></button> </div></> : <img src={avatar} className='w-20 h-20 rounded-full' /> }

        </div>
        <div className='w-full space-y-5'>
          <div className='flex gap-3 flex-wrap'>
            <div className='text-TextColor_Neutral text-base w-full flex flex-col  gap-[10px]'>
              <label>Full Name</label>
              <input
                type='text'
                value={fullname}
                onChange={e => setFullName(e.target.value)}
                className='focus:outline-none border-Original rounded-lg focus:border-pink-400 border px-5 py-2'
                placeholder='Enter  your Name'
              />
            </div>
            <div className='text-TextColor_Neutral text-base w-full flex flex-col gap-[10px] '>
              <label>Email</label>
              {/* <div className='w-full items-center px-1 flex border focus:border-pink-400 hover:border-pink-400 rounded-lg'> */}
              <input
                type={"text"}
                value={email}
                disabled
                // onChange={(e) => setEmail(e?.target?.value)}
                placeholder='Enter Email'
                className='focus:outline-none border-Original rounded-lg focus:border-Original border px-5 py-2'

              />

              {/* </div> */}

            </div>
          </div>
          <div className='flex flex-wrap gap-3'>
            <div className='text-TextColor_Neutral text-base w-full flex flex-col  gap-[10px]'>
              <label>Gender</label>
              <select
                value={gender}
                onChange={e => setGender(e.target.value)}
                className='focus:outline-none border-Original rounded-lg focus:border-pink-400 border px-5 py-2'
               
              >
                <option value={'Male'}>Male</option>
                <option value={'FeMale'}>FeMale</option>
              </select>
            </div>
            <div className='text-TextColor_Neutral text-base w-full flex flex-col gap-[10px] '>
              <label>Age</label>
              <input
                type='number'
                value={age}
                onChange={e => setAge(e.target.value)}
                className='focus:outline-none rounded-lg border-Original focus:border-pink-400 border px-5 py-2'
                placeholder='Enter  your Age'
              />

            </div>
          </div>
          <div className='flex gap-3'>
            <div className='text-TextColor_Neutral text-base w-full flex flex-col  gap-[10px]'>
              <label>Country</label>
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className='focus:outline-none border-Original rounded-lg focus:border-pink-400 border px-5 py-2'
              
              >
                <option value={'India'}>India</option>
                <option value={'U.S.A'}>USA</option>
              </select>
            </div>
            <div className='text-TextColor_Neutral text-base w-full flex flex-col gap-[10px] '>
              <label>Mobile Number</label>
              <input
                type='number'
                value={mobileNo}
                minLength={10}
                onChange={e => setMobileNo(e.target.value)}
                className='focus:outline-none rounded-lg focus:border-pink-400 border-Original border px-5 py-2'
                placeholder='Enter  your Moblie Number'
              />

            </div>
          </div>
          <h3 className='text-lg font-poppins font-normal'>Address</h3>
          <textarea value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={4}
            className='w-full px-3  py-2 border border-Original rounded-lg' />


          <h3 className='text-lg font-poppins font-normal'>Bio</h3>
          <Editor data={null} setJSONData={setAbout} id={"editorAbout"} />

          <div className='flex gap-3'>
            {/* <div className='px-5 my-5 flex flex-col-reverse bg-white rounded-lg font-poppins py-3 items-center  border-border_Neutral justify-between  '>

              <label htmlFor='attachFile'>Profile Photo</label>
              <input type='file'
                accept="image/png, image/jpeg "
                id='attachFile'
                onChange={getImageSizeInKB}
                placeholder='Select a file or drag and drop here'
                className='w-full hidden border rounded-lg' />
              {imageSizeKB ? <><div className='relative py-1 pt-2 pr-2 text-error'><div><img src={flieAttached} className='w-20 h-20 rounded-md' /></div> <button onClick={() => removeFile()} className='absolute top-0 right-0'><MdOutlineCancel className='w-5 h-5 rounded-full' /></button> </div></> : null}

            </div> */}
            <div className='text-TextColor_Neutral text-base w-full flex flex-col  gap-[10px]'>
              <label>User Type</label>
              <select
                value={userType}
                onChange={e => setUserType(e.target.value)}
                className='focus:outline-none rounded-lg focus:border-pink-400 border-Original border px-5 py-2'
              
              >
                <option value={'expert'}>Expert</option>
                <option value={'parent'}>Parent</option>
                <option value={'special_person'}>Special Person</option>
              </select>
            </div>
            <div className='text-TextColor_Neutral text-base w-full flex flex-col gap-[10px] '>
              <label>Password</label>
              <div className='w-full items-center px-1 flex border focus:border-pink-400 hover:border-pink-400 border-Original rounded-lg'>
                <input
                  type={"text"}
                  value={password}
                  onChange={(e) => setPassword(e?.target?.value)}
                  className='focus:outline-none   w-full px-5 py-2'
                  placeholder='Enter Password'
                />
                <button onClick={handlePassword}>
                  {passwordIsVisual ? <IoEye size={20} className='text-pink-300' /> : <IoEyeOff size={20} className='text-text_disable' />
                  }
                </button>
              </div>

            </div>
          </div>
         <div className='group w-full flex flex-col gap-2 '>
          <h3 className='text-sm text-TextColor_T200 font-normal font-poppins'>Password format </h3>
          <div className='flex flex-col text-xs text-error'>
              {/* <h2>  WARNING: Your password must meet the following criteria:</h2> */}
            <h2>  - At least one uppercase letter.</h2>
              <h2>  - At least one lowercase letter.</h2>
              <h2>  - At least one special character {'(!@#$%^&*()_+{ }[]:;<>,.?~/-).'}</h2>
              <h2> - Minimum length of 8 characters.</h2>


          </div>
         </div>

          <div className='justify-center flex'>
            <button onClick={userSignUp} className='hover:bg-Original bg-white text-Original hover:text-white w-full rounded-lg px-5 font-medium font-poppins border border-Original text-lg '>
              Update Profile 
            </button>

          </div>

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

export { SignUp }
