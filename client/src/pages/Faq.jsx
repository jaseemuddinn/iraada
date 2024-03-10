import React from 'react'
import FAQ from '../components/FaqComponents/FAQ/FAQ'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

function Faq() {
  return (
    <div>
      <div className='md:flex justify-center items-center'>
        <Navbar />
      </div>
      <div className='md:mt-32'>
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default Faq