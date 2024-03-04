import React from 'react'

function Heading({ name, initial }) {
    return (
        <div className="relative flex">
            <h1
                className="font-Montserrat absolute left-0 text-[20px] lg:text-[70px] font-bold ml-[210px]  text-gray-900 opacity-15 md:block hidden">
                {name}
            </h1>
            <h1 className="pl-2 text-3xl font-bold md:text-5xl text-black flex items-center mt-10">
                <div className='h-[2px] w-20 bg-gray-900 mr-2' ></div>
                <span className='text-xl font-Montserrat'>
                    {initial} &nbsp;
                </span> {name}
            </h1>
        </div>
    )
}

export default Heading