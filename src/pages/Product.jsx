import React from 'react'
import {ProductHeader,ProductNumbers,ProductContent,Vedio,Map}  from "../components/ProductComponents/index"
import Footer from "../components/CommonComponents/Footer"
const Product = () => {
  return (
    <div>
      <ProductHeader/>
      <ProductNumbers/>
      <ProductContent/>
      <Vedio/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Product
