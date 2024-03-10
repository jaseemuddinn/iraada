import React from 'react'
import TeamCard from '../components/teamComponents/teamCard/TeamCard'
import ayush from '../assets/team/ayush.jpg'
import Navbar from '../components/navbar/Navbar'
import TeamHome from '../components/teamComponents/teamHome/TeamHome'
import Footer from '../components/footer/Footer'

function Team() {
    return (
        <div>
            <div className='md:flex justify-center items-center'>
                <Navbar />
            </div>
            <TeamHome />
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 mt-10">
                <h2 className="text-2xl font-bold font-Montserrat md:text-6xl md:leading-tight ">Our Team</h2>
                <p className="mt-1 text-gray-600 ">Green Warrior</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mb-10'>
                <TeamCard name={"Ayush Verma"} position={"Social Media Team"} description={"lorem ipsum lorem ipsium lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} imgSrc={ayush} />
                <TeamCard name={"Achintya"} position={"Social Media Team"} description={"lorem ipsum lorem ipsium lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} imgSrc={ayush} />
                <TeamCard name={"Ayush Verma"} position={"Social Media Team"} description={"lorem ipsum lorem ipsium lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} imgSrc={ayush} />
                <TeamCard name={"Achintya"} position={"Social Media Team"} description={"lorem ipsum lorem ipsium lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} imgSrc={ayush} />
                <TeamCard name={"Ayush Verma"} position={"Social Media Team"} description={"lorem ipsum lorem ipsium lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} imgSrc={ayush} />
            </div>
            <Footer />
        </div>
    )
}

export default Team