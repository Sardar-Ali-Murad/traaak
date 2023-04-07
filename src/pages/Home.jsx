import React from 'react'
import {HomeHeader,Problem,Solution,Customer,Project,Intergration,SnapShot,Compare,Use}  from "../components/HomeComponents/index"

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
    </div>
  )
}

export default Home
