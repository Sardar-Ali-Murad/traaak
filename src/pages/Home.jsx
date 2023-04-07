import React from 'react'
import {HomeHeader,Problem,Solution,Customer,Project,Intergration,SnapShot,Compare,Use}  from "../components/HomeComponents/index"
import Footer from "../components/CommonComponents/Footer"

const Home = () => {
  return (
    <div>
      <HomeHeader/>
      <Problem/>
      <Solution/>
      <Customer/>
      <Intergration/>
      <Project/>
      <SnapShot/>
      <Compare/>
      <Use/>
      <Footer/>
    </div>
  )
}

export default Home
