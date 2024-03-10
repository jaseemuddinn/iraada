import React from 'react'

function FaqCard({ q, a }) {
    return (
        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-one">
            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                {q}
                <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p className="text-gray-800">
                    {a}
                </p>
            </div>
        </div>



    )
}

export default FaqCard