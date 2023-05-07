import React, { useEffect, useState } from 'react'
import NavBar from './navBar/NavBar'
import "./App.css"
import Home from './Home/Home'
import Welcom from './welcom/Welcom'
import Footer from './footer/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './about/About'
import Message from './contact/Message'


const App = () => {
  const [show, setShow] = useState(null)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='App' onMouseOut={() => setShow(null)}>
        <NavBar />
        <Welcom />
        <Footer show={show} setShow={setShow} />
      </div>
    },
    {
      path: "/contact",
      element: <div className='App' onMouseOut={() => setShow(null)}>
        <NavBar />
        <Message />
        <Footer show={show} setShow={setShow} />
      </div>
    },
    {
      path: "/about",
      element: <div className='App' onMouseOut={() => setShow(null)}>
        <NavBar />
        <About />
       
      </div>
    },
  ]);
  return (
    <RouterProvider router={router}/>

    
  )
}

export default App