import React from 'react'
import "./home.css"
const Home = () => {
  const cheikh = require("../assets/images/cheikh.png")
  return (
    <div className='HomeContainer'>
      <div className="Home">
       <div className="profile">
         <h1>Developpeur Web et Mobile</h1>
         <img src={cheikh}  alt="cheikh " />
       </div>
        <hr />

      <div className="skillContainer">
        <div className="left">
          <h2>Backend</h2>
        <b>react</b>
        <b>react</b>
        <b>react</b>
        <b>react</b>
        <b>react</b>
        <b>react</b>
        </div>
        <div className="line"></div>
        <div className="right">
          <h2>Frontend</h2>
          <b>react</b>
        <b>react</b>
        
        <b>react</b>
      
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home