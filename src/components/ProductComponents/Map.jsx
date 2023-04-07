import React from 'react'
import "./Map.css"
import map from "../../assets/map.png"
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import c4 from "../../assets/c4.png"
import c5 from "../../assets/c5.png"
import c6 from "../../assets/c6.png"
import c7 from "../../assets/c7.png"
import c8 from "../../assets/c8.png"

const Map = () => {
  return (
    <div className='mapMain'>
       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam nunc, commodo.</h2>
       <div className='mapImage'>
       <img src={map}/>
       <div>
       </div>
       </div>
       <div className='mapImageWrapper c1'>
       <img src={c1}/>
       </div>
       <div className='mapImageWrapper c2'>
       <img src={c2} />
       </div>
       <div className='mapImageWrapper c3'>
       <img src={c3} />
       </div>
       <div className='mapImageWrapper c4'>
       <img src={c4}/>
       </div>
       <div className='mapImageWrapper c5'>
       <img src={c5}/>
       </div>
       <div className='mapImageWrapper c6'>
       <img src={c6}/>
       </div>
       <div className='mapImageWrapper c7'>
       <img src={c7}/>
       </div>
       <div className='mapImageWrapper c8'>
       <img src={c8} />
       </div>
    </div>
  )
}

export default Map
