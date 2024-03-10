import React from 'react'
import FaqCard from '../FaqCard/FaqCard'

function FAQ() {
    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Your questions, answered</h2>
                    <p className="mt-1 text-gray-600 ">Answers to the most frequently asked questions.</p>
                </div>
                <div className="max-w-[85rem]">
                    <div className="max-w-2xl mx-auto">
                        <div className="hs-accordion-group">
                            <FaqCard q={"Can I Cancel Anytime?"} a={"Yes you can cancel it anytime."} />
                            <FaqCard q={"What is Iraada?"} a={"Iraada is environmental organisation."} />
                            <FaqCard q={"How Iraada is different from other organisation?"} a={"It focuses on global health and for everyone."} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ