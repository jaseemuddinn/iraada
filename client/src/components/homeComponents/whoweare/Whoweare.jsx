import React from 'react'
import Heading from '../heading/Heading'
import whoweareBg from '../../../assets/whoweareBg.png'

function Whoweare() {
    return (
        <div className='md:h-lvh'>
            <Heading initial={"Who we"} name={"Are"} />
            <div className='md:flex md:mt-16 mt-5 justify-between'>
                <div className='md:px-24 px-7 leading-normal'>
                    <h1 className='font-bold text-3xl mb-3 md:text-5xl'>Who Do We Represent?</h1>
                    <p>
                        We are a group of passionate, motivated, and enthusiastic young people from the constituent colleges of University of Delhi who are students by day and leaders as well as activists by passion.
                        <br />
                        <br />
                        The mission we share is to protect the environment. Our mutual objective is to bring about a positive change in our neighbourhood by bringing attention to the serious environmental problems we are currently facing.
                        <br />
                        <br />
                        Therefore, we are planning to host one of the largest Youth Environmental Summit. This summit will serve as a platform for students, academicians, environmentalists to come together and exchange ideas, strategies, and best practices to mitigate the impact of climate change, global warming and other concurrent environmental issues and preserve our natural resources.
                        <br /><br />
                        We invite you to join us, as we work towards creating a greener, more sustainable future for ourselves and generations to come.
                    </p>
                    <div className='md:flex md:justify-evenly text-center mb-10'>
                        <div className='mt-12'>
                            <h1 className='font-bold font-Montserrat text-5xl'>
                                7B+
                            </h1>
                            <p className='text-lg font-medium text-gray-500'>Population</p>
                        </div>
                        <div className='mt-12'>
                            <h1 className='font-bold font-Montserrat text-5xl'>
                                400+
                            </h1>
                            <p className='text-lg font-medium text-gray-500'>Countries</p>
                        </div>
                        <div className='mt-12'>
                            <h1 className='font-bold font-Montserrat text-5xl'>
                                20+
                            </h1>
                            <p className='text-lg font-medium text-gray-500'>Care Homes</p>
                        </div>
                    </div>
                </div>
                <div className='w-full px-2 md:mr-10 md:px-4 hidden md:block'>
                    <img src={whoweareBg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Whoweare