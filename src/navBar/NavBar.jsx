import React, { useEffect } from 'react'
import "../navBar/naveBar.css"
import { icons } from '../constant'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {

    return (
        <>

            {/* Affichage Mobile */}

            <div className="navbarMobile">
                <div className="logoM">
                    <span>CH</span>
                </div>

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
                                <NavLink to={"/"} className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <li>Home</li>

                                </NavLink>
                            </ul>

                            <ul>
                                <NavLink to={"/about"} className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <li>A propos</li>

                                </NavLink>
                            </ul>
                            <ul>
                                <NavLink to={"/contact"} className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <li>Contact</li>

                                </NavLink>
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