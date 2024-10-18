import react, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {

  return (
    <>
     <Header />
     <Outlet/>
     <Footer />
    </>
  )
}

export default App
