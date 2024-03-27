import React from 'react'

function ObjectiveCard({ topic, description, no }) {
    return (
        <div>
            {/* <div className='shadow-xl bg-gradient-to-br from-green-400 via-teal-400 to-blue-500 p-10 rounded-xl'> */}
            <div className='shadow-xl bg-gray-100 p-10 rounded-xl'>
                <p className='text-center font-Montserrat font-bold text-xl md:text-2xl relative z-10'>{topic}</p>
                <h1 className='px-5 absolute ml-[-50px] text-9xl mt-[-90px] font-bold text-gray-400 opacity-50'>{no}</h1>
                <p className='text-center font-Montserrat relative z-10'>{description}</p>
            </div>
        </div>
    )
}

export default ObjectiveCard