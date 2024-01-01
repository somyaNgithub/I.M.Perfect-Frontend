import { useState } from 'react'
import Header from './Components/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
function App() {

  return (
   <div> 
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/login' element={<Login/>}/>
      </Routes>
   </div>
  )
}

export default App
