import React from 'react'
import sponsorBg from '../../../assets/sponsor/sponsorBG.jpg'


function Hero() {
    return (
        // <div className='h-screen'>
        //     <div>

        //         <img className='' src={sponsorBg} alt="sponsor" />
        //         <div className='bg-[#39e75f] opacity-40 absolute top-0 left-0 w-full h-full'></div>
        //     </div>
        // </div>
        <div>
            <div className='h-screen'>
                <div className='relative'>
                    <img className='object-cover h-screen' src={sponsorBg} alt="sponsor" />
                    <div className='bg-[#39e75f] opacity-90 absolute top-0 left-0 w-full h-full'></div>
                    <div className='absolute inset-0 flex flex-col mx-10 justify-center'>
                        <h1 className='text-2xl md:text-6xl text-white font-bold font-Montserrat'>BECOME A PARTNER</h1>
                        <p className='text-white font-Montserrat font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ipsa vel aperiam, voluptate iure perferendis autem facere. Nam est impedit, sunt sapiente ducimus soluta illum architecto corporis odit quam reprehenderit!</p>
                        <button className='bg-black px-2 py-3 rounded-md mt-3 hover:bg-slate-900 text-white'>
                            Email For Queries
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero