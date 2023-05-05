import React, { useEffect } from 'react'
import NavBar from './navBar/NavBar'
import "./App.css"
import Home from './Home/Home'
import Welcom from './welcom/Welcom'
import Footer from './footer/Footer'
const App = () => {
  useEffect(() => {
   
  },[])
  
  return (
    <div className='App'>
      <NavBar />
      <Welcom />
      <Footer />
    </div>
  )
}

export default App