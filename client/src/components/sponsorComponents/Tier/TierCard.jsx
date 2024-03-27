import React from 'react'

function TierCard({title, detail}) {
    return (
        <div>
            <div className='bg-gray-100 rounded-xl shadow-xl p-10 hover:scale-105 duration-100 hover:bg-[#39e75f]'>
                <p className='text-center font-Montserrat font-bold text-xl md:text-2xl'>{title}</p>
                <p className='text-center font-Montserrat'>{detail}</p>
            </div>
        </div>
    )
}

export default TierCard