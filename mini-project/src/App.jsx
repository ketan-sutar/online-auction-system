import React from 'react'
import Login from './Components/LoginPage/Login'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/MainPage/Main'
import CreateAcc from './Components/LoginPage/CreateAcc'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/main" element={<Main />} />
      <Route path="/create" element={<CreateAcc />} />
      

    </Routes>
    </BrowserRouter>
      
      


    </>
  )
}

export default App