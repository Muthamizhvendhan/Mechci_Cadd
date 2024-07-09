import React from 'react'
import Banner from '../Components/Home/Banner'
import About from '../Components/Home/About'
import Blog from '../Components/Home/Blog'
import Form from '../Components/Home/Form'
import Portfolio from '../Components/Home/Portfolio'
import Services from '../Components/Home/Services'
import Testimonials from '../Components/Home/Testimonials'
import WhyChoose from '../Components/Home/WhyChoose'

const Home = () => {
  return (
    <>
      <Banner/>
      <About/>
      <Services/>
      <WhyChoose/>
      <Portfolio/>
      <Testimonials/>
      <Form/>
      <Blog/>
    </>
  )
}

export default Home
