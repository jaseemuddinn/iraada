import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 md:rounded-full md:m-10 md:fixed md:top-0 md:z-50 md:bg-opacity-75">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 ">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <h1 className="text-white font-bold text-xl font-Montserrat">IRADA</h1>
                        </div>
                        <div className="hidden md:block ">
                            <div className="mx-10 flex items-baseline space-x-4 style font-Montserrat">
                                <a onClick={() => navigate('/')} className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a onClick={() => navigate('/event')} className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Event</a>
                                <a onClick={() => navigate('/team')} className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Team</a>
                                <a onClick={() => navigate('/sponsor')} className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sponsorship</a>
                                <a onClick={() => navigate('/contact')} className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact us</a>
                                <a onClick={() => navigate('/faq')} className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQs</a>

                            </div>


                        </div>
                    </div>
                    <button className='hidden md:block flex-shrink-0 text-black font-medium bg-white px-5 py-2 rounded items-right'>
                        Donate
                    </button>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a onClick={() => navigate("/")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a onClick={() => navigate("/event")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Event</a>
                        <a onClick={() => navigate("/team")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Our Team</a>
                        <a onClick={() => navigate("/sponsor")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sponsorship</a>
                        <a onClick={() => navigate("/contact")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact us</a>
                        <a onClick={() => navigate("/faq")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQs</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
