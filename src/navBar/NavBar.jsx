import React from 'react'
import "../navBar/naveBar.css"

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

        <div className="presentationContainer">
            <h2>Hi, I’m Cheikh Faye. Nice to meet you.</h2>

            <span>I am a Full-Stack Developer who specializes in creating beautiful and efficient websites for small and large-scale companies. With a passion for the entire website development process, I work with my clients from concept to design and then development and launch.</span>
        </div>
        
    </div>
    </>
  )
}

export default NavBar