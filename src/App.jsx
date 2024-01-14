import { useEffect, useState } from 'react'
import Header from './Components/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import AskQuestion from './screens/AskQuestion'
import QuestionPage from './screens/QuestionPage'
import axios from 'axios'
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
          console.log(res,"refresh api data")
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
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/question' element={<AskQuestion/>}/>
      <Route path='/question/:q_id' element={<QuestionPage/>}/>
       
      </Routes>
   </div>
  )
}

export default App
