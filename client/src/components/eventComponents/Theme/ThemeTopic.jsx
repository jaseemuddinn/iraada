import React from 'react'

function ThemeTopic({ name }) {
    return (
        <div className='rounded-full p-8 bg-gray-500 hover:bg-gradient-to-bl from-green-400 via-teal-400 to-blue-500 hover:shadow-2xl overflow-hidden transition-transform duration-200 ease-in-out transform hover:scale-105 hover:text-black'>
            {name}
        </div>
    )
}

export default ThemeTopic