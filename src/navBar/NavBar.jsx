import React, { useEffect } from 'react'
import "../navBar/naveBar.css"
import { icons } from '../constant'

const image = require("../assets/images/Informatiqu.png")
const iconM = require("../assets/icons/menui.png")
const NavBar = () => {
   
  return (
    <>
        
{/* Affichage Mobile */}

        <div className="navbarMobile">
             <div className="logoM">
                    <span>CH</span>
                </div>
            <img
            className='imageM'

            src={iconM}
             />
        </div>
{/* Affichage Mobile Fin */}


    <div className='containerNavBar'>
        <div className="navBar">
            <div className="left">
                <div className="logo">
                   <img src={icons.logo} />
                </div>
                    <h4>Cheikh Faye</h4>
            </div>
            <div className="right">
                <div className="buttoncaontainer">
                    <ul>
                        <li><a href="#">Home</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Competences</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">A propos</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="iconContainer">
                <div className="iconItem">
                    <img alt='icon' src={icons.github} />
                </div>
                <div className="iconItem">
                    <img alt='icon' src={icons.facebook} />
                </div>
                <div className="iconItem">
                    <img alt='icon' src={icons.twitter} />
                </div>
                <div className="iconItem">
                    <img alt='icon' src={icons.linkedin} />
                </div>
            </div>
        </div>

        
    </div>
    </>
  )
}

export default NavBar