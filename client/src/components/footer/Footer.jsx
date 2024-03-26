import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-20 mt-10">
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 lg:w-1/5">
                    <h2 className="text-xl font-bold font-Montserrat">IRADA</h2>
                    <p className='font-Montserrat font-light'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/5">
                    <h2 className="text-xl font-medium font-Montserrat mt-10 md:mt-0">Links</h2>
                    <ul className="mt-4 text-gray-400 cursor-pointer leading-10 font-Montserrat">
                        <li>About Us</li>
                        <li>Team</li>
                        <li>What We Do</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/5 font-Montserrat">
                    <h2 className="text-xl font-bold mt-10 md:mt-0">More</h2>
                    <ul className="mt-4 text-gray-400 cursor-pointer leading-10">
                        <li>FAQ</li>
                        <li>Events</li>
                        <li>Donate</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/5 font-Montserrat">
                    <h2 className="text-xl font-bold mt-10 md:mt-0">Social Media</h2>
                    <ul className="mt-4 text-gray-400 cursor-pointer leading-10">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className="mt-8 font-Montserrat">
                    <h2 className="text-xl font-bold">Newsletter</h2>
                    <p>Subscribe to our newsletter for updates.</p>
                    <input className='text-white placeholder bg-black border border-gray-400 rounded px-5 py-3 mt-3' placeholder='Email' type="text" />
                    <button className='bg-white px-5 py-3 rounded text-black' type="submit">Submit</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
