import React from 'react'
import "./Navbar.css"
import bar from "../../assets/bar.png";
import Word from "../../assets/T.png";
import Traak from "../../assets/Traaak.png";
import HeaderImg from "../../assets/headerImg.png"
import line from "../../assets/headerLine.png"

const Navbar = () => {
  return (
    <div className='navbarBigMain'>
        <div className='navbarMain'>

            <div className='navBarIcons'>
        <div className="headerIcons">
          <div className="traakLogo">
            <div className="wordBox">
              <img src={Word} className="word" />
            </div>
            <img src={Traak} className="traak" />
          </div>
          <img src={bar} className="bar" />
        </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar
