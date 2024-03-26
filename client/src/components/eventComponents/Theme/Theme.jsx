import React from 'react'
import ThemeTopic from './ThemeTopic'
import ObjectiveCard from './ObjectiveCard'

function Theme({ name }) {


    return (
        <div className='mt-10 px-10'>
            <h1 className='font-Montserrat font-bold text-7xl hover:italic cursor-pointer'>
                Theme
            </h1>
            <p>
                <span className='font-bold text-lg'>
                    "IRADA"
                </span>
                aims to bring together young leaders, activist, professionals, and stakeholders from around the world to address pressing environmental challenges. Through three fundamental pillars of Awareness, Action, and Advocacy, the summit seeks to mobilise youth to take a proactive role in safeguarding our planet's future.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 flex-wrap gap-3 text-white mt-5 text-center font-Montserrat font-bold text-xl '>
                <ThemeTopic name='Water' />
                <ThemeTopic name='Climate Change' />
                <ThemeTopic name='Circular Economy' />
                <ThemeTopic name='Energy' />
                <ThemeTopic name='Air' />
                <ThemeTopic name='Startup/Business Ecosystems' />
                <ThemeTopic name='Scope in EVS - Care, Academic and Research Prospects' />
                <ThemeTopic name='Youth Celebrity Champions and Green Influencers' />
                <ThemeTopic name='Health' />
                <ThemeTopic name='Wildlife Ecology' />
            </div>
            <div className='mt-10'>
                <h1 className='font-Montserrat font-bold text-7xl hover:italic cursor-pointer'>
                    Objectives
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <ObjectiveCard topic={"Establish a Regional Platform"} description={"Create a regional platform that brings together young individuals passionate about environmental issues from across India, fostering collaboration and knowledge sharing."} no={"1"} />
                    <ObjectiveCard topic={"Collaborative Initiatives"} description={"Identify and launch collaborative initiatives to bridge the gap between youth-driven environmental action and the industry."} no={"2"} />
                    <ObjectiveCard topic={"Address Issues and Solutions"} description={"Facilitate discussions on critical environmental issues and emerging solutions with their socio-economic impact."} no={"3"} />
                    <ObjectiveCard topic={"Foster Community Building"} description={"Cultivate a sense of community among participants and partners by providing ample opportunities for networking and exchanging ideas, creating a supportive environment for youth engagement in environmental initiatives."} no={"4"} />
                    <ObjectiveCard topic={"Inspire and Engage Youth"} description={"Inspire and engage youth participants by providing platform for actions, empowering them to contribute to environmental solutions and promoting eco-entrepreneurship."} no={"5"} />
                </div>
            </div>




        </div>
    )
}

export default Theme