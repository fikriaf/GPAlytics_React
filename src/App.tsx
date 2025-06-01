import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
