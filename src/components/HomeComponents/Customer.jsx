import React from 'react'
import "./Customer.css"
import Img from "../../assets/customer.png"
import hBar from "../../assets/horizontalBar.png"

const Customer = () => {
  return (
    <div className='customerBigMain'>
        <div className='customerMain'>
            <div className='customerContent'>
           <h1 className='homeHead'>Customer Tasks</h1>
           <p className='homePara'>Be well equipped to manage your customer post sales lifecycle from pre-boarding through to growth. Track and execute customer activities helping you build trust and hopefully repeat patronage. Bring all your trackers, spreadsheets, and customer documents into one single, easily accessible platform saving you time and effort. Tasks can be targeted towards customer in specific stages of the lifecycle or individually depending on what need to be achieved and a choice of notifications ensures that nothing is missed.</p>
           <button className='homeBtnCommon'>Book a Demo</button>
            </div>
            <div className='customerImages'>
                <img src={Img} className='mainImg'/>
                <img src={hBar} className='customerBars'/>
            </div>
        </div>
    </div>
  )
}

export default Customer
