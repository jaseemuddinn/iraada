import React from 'react'
import TierCard from './TierCard'

function Tier() {
    return (
        <div className='mt-10 px-10'>
            <h1 className='font-Montserrat font-bold text-7xl hover:italic cursor-pointer'>
                Tiers
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center mt-5 mb-10'>
                <TierCard title={"Diamond"} detail={""} />
                <TierCard title={"Platinum"} detail={""} />
                <TierCard title={"Gold"} detail={""} />
                <TierCard title={"Silver"} detail={""} />
                <TierCard title={"Bronze"} detail={""} />
            </div>
            <div>
                <p className='text-lg font-medium'>In addition to the above, we offer 5 exclusive Premier Partnership Segmenets that provide exceptional benefits and opportunities for our esteemed partners:</p>

                <h1>
                    <ul className='mt-5 font-bold text-2xl md:text-4xl font-Montserrat'>
                        Principle Partners
                    </ul>
                    <li className='font-medium font-Montserrat'>
                        Session Partner/Knowledge Partner
                    </li>
                    <li className='font-medium font-Montserrat'>
                        Industry Partner
                    </li>
                    <li className='font-medium font-Montserrat'>Award Partner</li>
                    <li className='font-medium font-Montserrat'>Food and Beverage Partner</li>
                    <li className='font-medium font-Montserrat'>Media Partner</li>
                </h1>
                <h1>
                    <ul className='mt-5 font-bold text-2xl md:text-4xl font-Montserrat'>
                        Executive Partners
                    </ul>
                    <li className='font-medium font-Montserrat'>
                        Associate Partner
                    </li>
                    <li className='font-medium font-Montserrat'>
                        Goodies Partner
                    </li>
                    <li className='font-medium font-Montserrat'>Kit Partner</li>
                </h1>
                <h1 className='mt-5 font-bold text-2xl md:text-4xl font-Montserrat'>
                    Sponsorship in Kind
                </h1>
                <p className='font-medium font-Montserrat mt-1'>
                    We also warmly welcome Sponsorship in kind for various aspects such as Venue, Logistics, Grants & Awards, and more. Your generous support in these areas would be extremely appreciated and contribute significantly to the success of the
                    event.
                    <br /> <br />
                    If you are interested in becoming a partner or wish to explore our sponsorship opportunities further, please contact us at <a href="mailto:esummit24@gmail.com">esummit24@gmail.com</a>. We would be delighted to furnish you with comprehensive information and address any queries you may have.
                </p>
            </div>
        </div>
    )
}

export default Tier