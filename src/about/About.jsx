import React from 'react'
import "./about.css"
import { icons, images } from "../constant"
import Experienceitem from '../components/Experienceitem'
import { Skills } from '../components'
const About = () => {
  return (
    <div className='About'>
      <div className="aboutContainer">
        <div className="leftcontainer">
          <div className="profilcontainer">
            <div className="imgcontainer">
              <img src={images.profil} />
            </div>
            <div className="profilitem">
              <h3>Cheikh faye</h3>
              <b>Devoloppeur web et mobile</b>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="skills">
              <div className="item">
                <span>dev Reactjs</span>
              </div>
              <div className="item">
                <span>dev React native</span>
              </div>
              <div className="item">
                <span>dev Nodejs</span>
              </div>
            </div>
          </div>
          <div className="lines"></div>
          <div className="profilink">
            <span>Profil link</span>
            <div className="linkcontainer">
              <input type="text" readOnly placeholder='https:wwww.linked.com/cheikh19' />
              <a href="https:wwww.linked.com/cheikh19"> <img src={icons.linkedin} /></a>
            </div>
          </div>
          <div className="contactcontainer">
            <div className="itemcontact">
              <img src={icons.email} alt="email" />
              <label htmlFor="">fayedev93@gmail.com</label>
            </div>
            <div className="itemcontact">
              <img src={icons.phone} alt="phone" />
              <label htmlFor="">00221773394513</label>
            </div>
            <div className="itemcontact">
              <img src={icons.add} alt="add" />
              <label htmlFor="">Dakar,Almadies</label>
            </div>
          </div>
          <div className="lines"></div>

          <div className="jobcontainer">
            <h3>You looking for dev contact me</h3>
            <img src={images.dev} alt="dev  " />
            <button type="submit">Contact us</button>
          </div>
        </div>
        <div className="rightcontainer">
          <div className="headercontainer">
            <h1>A propos</h1>
            <div className="iconcontainer">
              <img src={icons.github} />
              <img src={icons.linkedin} />
              <span>Open to Job</span>
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit optio dolorem non atque ad quaerat delectus adipisci officiis quae quisquam enim recusandae, voluptatum iste vel repudiandae est nobis ipsam?</p>
          <div className="lines"></div>
          <div className="experiencecontainer">
           <h2>Working Experience</h2>
            <Experienceitem job="Junior Developper Web" 
            time={"fulltime"}
            entreprise="kemitik"
            datestart={"jan 2021-present"}
            duration="1y 7month"
            />
            <div className="line" />
            <Experienceitem job="Junior Developper Web" 
            time={"fulltime"}
            entreprise="kemitik"
            datestart={"jan 2021-present"}
            duration="1y 7month"
            />
            <div className="line" />
            <Experienceitem job="Junior Developper Web" 
            time={"fulltime"}
            entreprise="kemitik"
            datestart={"jan 2021-present"}
            duration="1y 7month"
            />
          </div>
          <div className="lines"/>

          <Skills />
        </div>
      </div>
    </div>
  )
}

export default About