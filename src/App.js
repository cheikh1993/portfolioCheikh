import React from 'react'
import NavBar from './navBar/NavBar'
import "./App.css"
import Home from './Home/Home'
import Welcom from './welcom/Welcom'
const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Welcom />
    </div>
  )
}

export default App