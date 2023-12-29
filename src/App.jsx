import { useState } from 'react'
import Header from './Components/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './screens/Home'

function App() {

  return (
   <div> 
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
   </div>
  )
}

export default App
