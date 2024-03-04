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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae assumenda architecto corporis velit reiciendis aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste sunt explicabo temporibus earum, iusto adipisci esse nulla, delectus aliquid quas pariatur accusantium illum eum! Qui eos cupiditate fugiat a veritatis.
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