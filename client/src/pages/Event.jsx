import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Landing from '../components/eventComponents/Landing/Landing'
import Theme from '../components/eventComponents/Theme/Theme'
import Eligibility from '../components/eventComponents/Eligibility/Eligibility'
import Footer from '../components/footer/Footer'

function Event() {
  return (
    <div>
      <div className="md:flex justify-center items-center">
        <Navbar />
      </div>
      <Landing />
      <Theme />
      <Eligibility />
      <Footer />
    </div>
  )
}

export default Event