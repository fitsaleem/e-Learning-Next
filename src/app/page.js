import React from 'react'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Course from './components/Course'
import Reviews from './components/Reviews'
import Internship from './components/Internship'
import Footer from './components/Footer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Explore/>
    <Internship/>
      <Course/>
      
      <Reviews/>
     
      <Footer/>
    </div>
  )
}

export default Home