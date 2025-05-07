import React from 'react'

import HeroSection from './home-components/HeroSection'
import Portfolio from '../reUsedComponents/portfolio'
import ValueProposition from './home-components/ValueProposition'
import StatisticsSection from './home-components/Statistics'
import TestimonialCarousel from './home-components/Testimonial'
import JoinUsSection from './home-components/JoinUs'

function Home() {
  return (
    <>
    
    <HeroSection/>
    <Portfolio/>
    <ValueProposition />
    <StatisticsSection />
    <TestimonialCarousel />
    <JoinUsSection />

    </>
  )
}

export default Home
