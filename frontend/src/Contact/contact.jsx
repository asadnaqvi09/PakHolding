import React from 'react'
import ContactHero from './contactComponents/ContactHero'
import Contactus from './contactComponents/Contactus'
import ContactFormSection from './contactComponents/ContactForm'
import LocationsSection from './contactComponents/Location'

function contact() {
  return (
    <>
    <ContactHero />
    <Contactus />
    <ContactFormSection/>
    <LocationsSection />
    </>
  )
}

export default contact
