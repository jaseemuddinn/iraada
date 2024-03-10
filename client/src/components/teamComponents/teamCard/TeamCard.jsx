import React from 'react'

function TeamCard({ name, position, imgSrc, description }) {
    return (
        <div>
            <div className="bg-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 ">
                <div className="overflow-hidden rounded-2xl">
                    <img src={imgSrc} alt=""
                        className="object-cover object-top w-full h-48" />
                </div>
                <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden rounded-full">
                    <img src={imgSrc} alt="Team Member Photo"
                        className="object-cover object-top w-full h-32 " />
                </div>
                <div className="p-4">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                        <p className="mt-1 text-base text-gray-600">{position}</p>
                    </div>
                    <div className="px-10 overlay opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center bg-black bg-opacity-75">
                        <p className="text-white text-center">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard