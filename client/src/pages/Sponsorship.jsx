import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from "../components/sponsorComponents/Hero/Hero"
import Tier from '../components/sponsorComponents/Tier/Tier'
import Footer from '../components/footer/Footer'

function Sponsorship() {
  return (
    <div>
      <div className='md:flex justify-center items-center'>
        <Navbar />
      </div>
      <Hero />
      <Tier />
      <Footer />
    </div>
  )
}

export default Sponsorship