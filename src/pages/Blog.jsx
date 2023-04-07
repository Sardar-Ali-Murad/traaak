import React from 'react'
import Navbar from "../components/CommonComponents/Navbar"
import Footer from "../components/CommonComponents/Footer"
import Body from "../components/BlogComponents/Body"

const Blog = () => {
  return (
    <div>
      <Navbar text="Blogs"/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default Blog
