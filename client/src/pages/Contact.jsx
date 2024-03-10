import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function Contact() {

  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    setSubmit(true)
    console.log("Submitted");
    e.preventDefault();
  }

  const navigate = useNavigate();
  return (
    <div>
      <div className='md:flex justify-center items-center md:mt-24'>
        <Navbar />
      </div>
      <div className="max-w-xl mx-auto mt-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600">
            We'd love to talk about how we can help you.
          </p>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto md:flex">

        <div className="max-w-lg mx-auto">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 ">

            {submit ? (
              <div>
                <h2 className="mb-2 text-xl font-semibold text-gray-800 ">
                  Form Filled
                </h2>
                <p>
                  Thank you for your inquiry. We will get back to you in 1-2 business days.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
                  Fill in the form
                </h2>
                <form>
                  <div className="grid gap-4 lg:gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label htmlFor="hs-firstname-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium ">First Name</label>
                        <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                      </div>

                      <div>
                        <label htmlFor="hs-lastname-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium ">Last Name</label>
                        <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-gray-300 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label htmlFor="hs-email-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium ">Email</label>
                        <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autoComplete="email" className="py-3 px-4 block w-full border-gray-300 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                      </div>

                      <div>
                        <label htmlFor="hs-phone-number-1" className="block mb-2 text-sm text-gray-700 font-medium ">Phone Number</label>
                        <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border-gray-300 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hs-about-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium ">Details</label>
                      <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full border-gray-300 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"></textarea>
                    </div>
                  </div>

                  <div className="mt-6 grid">
                    <button onClick={handleSubmit} type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#fcc94c] text-black hover:bg-[#e9be53] disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">
                      We'll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
              </div>
            )}
            {/* <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="hs-firstname-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium ">First Name</label>
                    <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium ">Last Name</label>
                    <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-gray-300 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="hs-email-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium ">Email</label>
                    <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autoComplete="email" className="py-3 px-4 block w-full border-gray-300 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                  </div>

                  <div>
                    <label htmlFor="hs-phone-number-1" className="block mb-2 text-sm text-gray-700 font-medium ">Phone Number</label>
                    <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border-gray-300 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium ">Details</label>
                  <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full border-gray-300 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button onClick={() => { handleSubmit }} type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#fcc94c] text-black hover:bg-[#e9be53] disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form> */}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 items-center gap-4 lg:gap-8 justify-center ">
          <a onClick={() => navigate('/faq')} className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 p-4 sm:p-6 cursor-pointer border">
            <svg className="size-9 text-gray-800 mx-auto " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 ">FAQ</h3>
              <p className="mt-1 text-gray-500">Search our FAQ for answers to anything you might ask.</p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-black">
                Visit FAQ
                <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </p>
            </div>
          </a>
          <a className="border group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 p-4 sm:p-6" href="mailto:contact@iraada.com">
            <svg className="size-9 text-gray-800 mx-auto " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 ">Contact us by email</h3>
              <p className="mt-1 text-gray-500">If you wish to write us an email instead please use contact@iraada.com</p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-black ">
                Send Email
                <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </p>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact