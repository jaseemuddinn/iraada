import React from 'react'
import cardBg from '../../../assets/cardBg.png'

function Card() {
    return (
        <div className='mb-10 hidden md:block'>
            <div className='flex justify-center items-center'>
                <img src={cardBg} alt="" />
                <div className='absolute w-1/2'>
                    <h1 className=' text-center text-white font-Montserrat font-bold text-4xl'>You Can Also Contribute to Make This World A Better Place</h1>
                    <div className='flex items-center justify-center gap-10 mt-5'>
                        <button className='bg-[#39e75f] px-5 py-2 rounded font-Montserrat font-medium'>
                            Join as a Volunteer
                        </button>
                        <button className='bg-white px-5 py-2 rounded font-Montserrat font-medium'>
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card