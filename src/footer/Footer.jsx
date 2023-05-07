import React, { useState } from 'react'
import "./footer.css"
import { icons, images } from '../constant'
import { data } from '../dummydata'

const Detail = ({ detail, setShow }) => {
    function handclick() {
        setShow(null)
    }
    const NUMBER = 450;
    const calcul = detail.capacity * 100 / NUMBER
    return (
        <div className='Detail'>
            <span onClick={handclick}>X</span>
            <h1 style={{ fontSize: 184 / detail.cat.length, color: "tomato" }}>{detail.cat}</h1>
            <div className="descriptionc">
                <p>{detail.comment}</p>

                <li>Competences</li>
                <div className="competContainer">
                    <div className="compet" style={{width: NUMBER}}>
                        <div className="pourcentage" style={{ width: `${Math.floor(calcul) }%`}}></div>
                        
                    </div>
                    <b>{Math.floor(calcul)} % </b>

                </div>
               <div className="line"></div>
                <li>Technologie</li>

                <div className="techno">
                    <h3>{detail.label}</h3>
                    <img src={detail.logo} alt='logo' />
                </div>
            </div>
        </div>
    )
}
const Footer = ({show, setShow}) => {
    const [detail, setDetail] = useState([])
    const handlover = (id) => {
        setShow(id)
    }
    return (
        <footer className='Footer'>
            <div className="itemContainer" >
                {
                    data.map((item, index) => (
                        <div className="item" key={item.id} onMouseOver={() => {
                            handlover(item.id)
                            setDetail(item)
                        }} >
                            <img src={item.logo} alt='icon' />

                            {
                                show == item.id && <Detail detail={detail} setShow={setShow} />
                            }
                        </div>

                    ))
                }
            </div>
        </footer>
    )
}

export default Footer