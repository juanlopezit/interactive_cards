import React from "react"

import leaving from '../music/leaving.mp3'

import './Player.css'

function Player(){
    return (
      <div>
        <audio className="audio-element" src={leaving} type="audio/mp3" controls></audio>
      </div>
    )
  }

export default Player