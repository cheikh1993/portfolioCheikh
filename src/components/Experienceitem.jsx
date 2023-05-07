import React from 'react'
import { icons, images } from '../constant'

const Experienceitem = ({job,time,entreprise,duration,datestart}) => {
  return (
    <div className='experience'>
        <img src={images.img1} alt="img1" />
        <div className="experitemcontainer">
           <div className="levelcontainer">
            <h5>{job}</h5>
            <span>working</span>
           </div>
          <div className="containertime">
             <div className="timecontainer">
            <img src={icons.bookmark} />
            <span>{time}</span>
            <div className="linh"></div>
           </div>
           <div className="timecontainer">
            <img src={icons.home} />
            <span>{entreprise}</span>
            <div className="linh"></div>
           </div>
           <div className="timecontainer">
            <img src={icons.calendar} />
           <div className="range">
             <span>{datestart}</span>
             <span>{duration}</span>
           </div>
            
           </div>
          </div>
          <div className="descontainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore, veritatis commodi illum libero dicta sunt impedit sed provident, ipsa esse exercitationem cumque labore, consectetur architecto maiores reprehenderit ea neque?</p>
          
          </div>
        </div>
        
    </div>
  )
}

export default Experienceitem