import React from 'react'
import "./welcom.css"
import { images } from '../constant'

const Welcom = () => {
  return (
    <main className='Welcom'>
      <div className="welcomContainer">
        <div className="descriptionContainer">
          <h2>Ravie de vous retrouver, je m’appellle Cheikh Faye</h2>
          <p>Je suis developpeur Front-end passionne pour contruire des application web et mobile que les utilisateur aime </p>
          <div className="buttonContainer">
            <button>contacter moi</button>
            <button><a href="../cvcheikhfaye1.pdf">Telecharger mon cv</a></button>
          </div>

        </div>
        <div className="profilContainer">
          <img src={images.profil} />
          <div className="contain"></div>
        </div>
      </div>
    </main>
  )
}

export default Welcom