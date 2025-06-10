import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Mahasiswa from './pages/Mahasiswa'
import UpdateNilai from './pages/UpdateNilai'
import StatistikAkademik from './pages/StatistikAkademik'
import SupportCenter from './pages/SupportCenter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mahasiswa" element={<Mahasiswa />} />
        <Route path="/update-nilai" element={<UpdateNilai />} />
        <Route path="/statistik-akademik" element={<StatistikAkademik />} />
        <Route path="/support-center" element={<SupportCenter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
