import { useEffect, useState } from 'react'
import Header from './Components/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import {AskQuestion} from './screens/AskQuestion'
// import QuestionPage from './screens/QuestionPage'
import ScrollTop from './Components/ScrollTop'
import axios from 'axios'
import Users from './screens/Users'
import { User } from './screens/User'
import { Footer } from './Components/Footer'
import { ProfilePage } from './screens/Profile'
import MyQuestions from './screens/Profile/MyQuestions'
import { QuestionDetails } from './screens/QuestionDetails'
import { SignUp } from './screens/SignUp'
import QuestionsPage from './screens/Questions'
import { ForgetPassword } from './screens/ForgetPssword'
function App() {
  const refreshToken = async () =>{
        if(localStorage?.getItem('Token_refresh')){
          const data ={
            "refresh_token":     localStorage?.getItem('Token_refresh')   }
           await axios.post("http://3.108.227.195:8000/refresh-token/",data,{
             headers: {
            "Content-Type": "application/json",
            // "token": token
          }
        }).then((res)=>{
          // console.log(res,"refresh api data")
          localStorage?.setItem("Token",res?.data?.access_token)

        }).
        catch((err)=>console.log(err))
  }
  }
  useEffect(()=>{
          setInterval(()=>{refreshToken()},300000)
          refreshToken()
  },[])


  
  return (
   <div> 
    {/* <Header /> */}
    <ScrollTop />
   
    <Routes> 
      
      <Route path='/' element={<Home/>}/>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      
      <Route path='/question' element={<QuestionsPage/>}/>
      <Route path='/question/:id' element={<QuestionDetails/>}/>
      
      <Route path='/ask-question' element={<AskQuestion/>}/>

        <Route path='/forget-password' element={<ForgetPassword />} />
       <Route path ='/users' element={<Users/>}/>
       <Route path='/user/:id' element={<User hidHeader={true}/>}/>
       <Route path='/profile' element={<ProfilePage/>}>
        <Route path='edit' element={<User />}/>
        <Route path='my-question' element={<MyQuestions/>}/>
        </Route> 
      </Routes>
      <Footer/>
   </div>
  )
}

export default App
