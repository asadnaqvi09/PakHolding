import React from 'react'
import Portfolio from '../reUsedComponents/portfolio.jsx'
import ContentSection from './servicesComponents/ContentSection.jsx'
import ServicesHero from './servicesComponents/ServicesHero.jsx'

function services() {
  return (
    <>
    <ServicesHero />
    <Portfolio darkMode={false}/>
    <ContentSection />
    </>
  )
}

export default services
