import React from 'react'
import PrimaryBtn from '../Components/common/buttons/PrimaryBtn'
import Banner from '../Components/common/Banner'
import AboutOne from '../Components/About/AboutOne'
import AboutTwo from '../Components/About/AboutTwo'
import OurTeam from '../Components/About/OurTeam'
import Gallery from '../Components/About/Gallery'
import Clients from '../Components/About/Clients'
import WhyChoose from '../Components/About/WhyChoose'
import Cta from '../Components/About/Cta'

const About = () => {
  return (
    <>
      <Banner bannerImg="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" bannerCnt="About Us" />
      <AboutOne/>
      <AboutTwo/>
      <WhyChoose/>
      <OurTeam/>
      <Gallery/>
      <Cta/>
      <Clients/>
    </>
  )
}

export default About
