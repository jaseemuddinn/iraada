import React from 'react'
import backgroundImg from '../../../assets/hero.png'
import videoIcon from '../../../assets/videoIcon.png'

function Hero() {
    return (
        <div className="bg-cover h-screen bg-center md:h-screen lg:h-screen flex items-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className='px-4 sm:px-6 lg:px-12'>
                <h1 className='text-white text-2xl md:text-7xl font-bold font-Montserrat'>
                    <span className='leading-normal'>INCLUSIVE CARE</span> <br /> FOR EARTH WITH <br /><span className='leading-normal'>SPECIAL NEEDS</span>
                </h1>
                <div className='flex'>
                    <button className='my-5'>
                        <a href='#' className='text-black bg-white px-4 py-3 font-medium rounded items-right'>What we do</a>
                    </button>
                    <button className='flex justify-center items-center mx-5 text-white font-medium'>
                        <img src={videoIcon} alt="Video Icon" className="w-6 h-6 mr-2" />
                        <span>Play video</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero