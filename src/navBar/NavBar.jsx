import React from 'react'
import "../navBar/naveBar.css"

const image = require("../assets/images/Informatiqu.png")
const iconM = require("../assets/icons/menui.png")
const NavBar = () => {
  return (
    <>
        <img 
        src={image}
    
        alt="Image"
        className='image'
        />
        <div className="navbarMobile">
             <div className="logoM">
                    <span>CH</span>
                </div>
            <img
            className='imageM'

            src={iconM}
             />
        </div>
    <div className='navBar'>
        <div className="navcontainer">
            <div className="left">
                <div className="logo">
                    <span>CH</span>
                </div>
                    <h4>Cheikh Faye</h4>
            </div>
            <div className="right">
                <div className="buttoncaontainer">
                    <ul>
                        <li><a href="#">About</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Projects</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Competences</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default NavBar