import React from 'react'
import "./Map.css"
import map from "../../assets/map.png"

const Map = () => {
  return (
    <div className='mapMain'>
       <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam nunc, commodo.</h1>
       <div className='mapImage'>
       <img src={map}/>
       </div>
    </div>
  )
}

export default Map
