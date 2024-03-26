import React from 'react'
import bgEvent from '../../../assets/event/eventBG.png'
// import bgEvent1 from '../../../assets/event/eventBG1.jpg'
function Landing() {
    return (
        <div className=''>
            <img className='object-cover h-screen md:h-screen lg:h-screen' src={bgEvent} alt="IRADA" />
            <div className='flex justify-center items-center mt-[-50px] md:mt-[-70px]'>
                <div className='bg-slate-300 px-10 py-5 md:px-20 md:py-10 md:w-1/2 rounded-xl shadow-xl'>
                    <p className='font-Montserrat font-bold text-2xl md:text-4xl text-center'>IRADA 2024</p>
                    <p className='text-center font-Montserrat'>April 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Landing