import React from 'react'
import "./SnapShot.css"
import Img from "../../assets/snapShot.png"
// import hBar from "../../assets/horizontalBar.png"
import vBar from "../../assets/verticalBar.png"

const SnapShot = () => {
  return (
    <div className='snapShotBigMain'>
        <div className='snapShopMain'>
            <img src={vBar} className='snapMiddleBar'/>
            <img src={vBar} className='snapTopBar'/>
           <div className='snapShotImage'>
                <img src={Img}/>               
           </div>
           <div className='snapShotContent'>
               <h1 className='homeHead'>Snapshots</h1>
               <p className='homePara'>Get a bird’s eye view of customer records and ongoing work from. How many customers are currently on your portfolio, number of customers in each customer lifecycle stage, number of active vs competed tasks, assigned and received tasks over a specific period. This gives you quick access to required information and parameters needed for your day-to-day decision making.</p>
               <button className='homeBtnCommon'>Book a Demo</button>
           </div>
        </div>
    </div>
  )
}

export default SnapShot
