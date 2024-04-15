import React from 'react'
import Heading from '../heading/Heading'
import visionBg from '../../../assets/visionBg.png'
import icon1 from '../../../assets/Icon1.svg'
import icon2 from '../../../assets/Icon2.svg'
import icon3 from '../../../assets/Icon3.svg'
import icon4 from '../../../assets/Icon4.svg'


function Vision() {
    return (
        <div className='bg-[#e5e5e5] md:h-lvh'>
            <Heading initial={"What's Our"} name={"Vision"} />
            <div className='md:flex md:mt-16 mt-5 justify-between'>
                <div className='md:px-24 px-7 leading-normal'>
                    <h1 className='font-bold text-3xl mb-3 md:text-5xl'>What Are We Seeing?</h1>

                    <div className='w-2/3'>
                        <div className='flex'>
                            {/* <img src={icon1} alt="" /> */}
                            <div className='leading-normal px-4 mt-5'>
                                {/* <h1 className='font-bold font-Montserrat text-2xl'>Animal Support</h1> */}
                                <p>With an overwhelming number of youths all over the world, it is clear that solutions to all our current ecological problems cannot be achieved unless we involve young people.
                                    We yearn for the much-needed yet delayed change in our habits, in order to fulfil our greater mission of conserving our planet for a sustainable future.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            {/* <img src={icon2} alt="" /> */}
                            <div className='leading-normal px-4 mt-5'>
                                {/* <h1 className='font-bold font-Montserrat text-2xl'>Health Benefits</h1> */}
                                <p>The summit is a step in the right direction as it aims to bring together the changemakers from diverse backgrounds, build their leadership skills, and empower them to lead the fight against the environmental crisis by engaging them in an inter generational dialogue with the leading experts in the field.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            {/* <img src={icon3} alt="" /> */}
                            <div className='leading-normal px-4 mt-5'>
                                {/* <h1 className='font-bold font-Montserrat text-2xl'>Scholarships</h1> */}
                                <p>We yearn for the much-needed yet delayed change in our habits, in order to fulfil our greater mission of conserving our planet for a sustainable future.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            {/* <img src={icon4} alt="" /> */}
                            <div className='leading-normal px-4 mt-5 mb-3'>
                                {/* <h1 className='font-bold font-Montserrat text-2xl'>Animal Support</h1> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex justify-center items-center pr-24 hidden'>
                    <img className='w-[1000px] h-[500px]' src={visionBg} alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Vision