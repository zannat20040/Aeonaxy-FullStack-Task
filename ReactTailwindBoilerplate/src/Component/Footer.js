import React from 'react';
import logo from '../assets/png-transparent-design-community-dribbble-dribbbler-dribbble-logo-social-media-icon-thumbnail-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faTwitter, faSquareFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className=" p-10 bg-gray-100 ">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 justify-between container mx-auto'>

                <aside className='col-span-1 lg:col-span-2'>
                    <img src={logo} className='h-24' />

                    <p className='text-gray-400'>Dribble is the world's leading community the creatives to shine, grow, and get hired.</p>

                    <ul className='flex gap-3  mt-5'>
                        <li><FontAwesomeIcon icon={faDribbble} className='text-xl text-gray-400' /></li>
                        <li><FontAwesomeIcon icon={faTwitter} className='text-xl text-gray-400' /></li>
                        <li><FontAwesomeIcon icon={faSquareFacebook} className='text-xl text-gray-400' /></li>
                        <li><FontAwesomeIcon icon={faInstagram} className='text-xl text-gray-400' /></li>
                        <li><FontAwesomeIcon icon={faPinterest} className='text-xl text-gray-400' /></li>
                    </ul>
                </aside>

                <nav className='flex flex-col gap-3'>
                    <h6 className="footer-title font-bold">For designer</h6>
                    <a className="text-sm text-gray-500">Go Pro</a>
                    <a className="text-sm text-gray-500">Explore design work</a>
                    <a className="text-sm text-gray-500">Design blog</a>
                    <a className="text-sm text-gray-500">Overtime podcast</a>
                    <a className="text-sm text-gray-500">Playoffs</a>
                    <a className="text-sm text-gray-500">Weekly Warm-up</a>
                    <a className="text-sm text-gray-500">Refer a friend</a>
                    <a className="text-sm text-gray-500">Code of conduct</a>
                </nav>

                <div>
                    <nav className='flex flex-col gap-3'>
                        <h6 className="footer-title font-bold " >Hire designers</h6>
                        <a className="text-sm text-gray-500">Post a job opening</a>
                        <a className="text-sm text-gray-500">Post a freelance project</a>
                        <a className="text-sm text-gray-500">Search for designers</a>

                    </nav>
                    <nav className='flex flex-col gap-3 mt-3 '>
                        <h6 className="footer-title font-bold ">Brand</h6>
                        <a className="text-sm text-gray-500">Advertise with us</a>
                    </nav>
                </div>

                <nav className='flex flex-col gap-3'>
                    <h6 className="footer-title font-bold">Company</h6>
                    <a className="text-sm text-gray-500">About</a>
                    <a className="text-sm text-gray-500">Careers</a>
                    <a className="text-sm text-gray-500">Supports</a>
                    <a className="text-sm text-gray-500">Media kit</a>
                    <a className="text-sm text-gray-500">Testimonials</a>
                    <a className="text-sm text-gray-500">API</a>
                    <a className="text-sm text-gray-500">Terms of  service</a>
                    <a className="text-sm text-gray-500">Privacy policy</a>
                    <a className="text-sm text-gray-500">Cookie policy</a>
                </nav>

                <div>
                    <nav className='flex flex-col gap-3'>
                        <h6 className="footer-title font-bold">Directories</h6>
                        <a className="text-sm text-gray-500">Design jobs</a>
                        <a className="text-sm text-gray-500">Designers for hire</a>
                        <a className="text-sm text-gray-500">Freelance designers for hire</a>
                        <a className="text-sm text-gray-500">Tags</a>
                        <a className="text-sm text-gray-500">Place</a>


                    </nav>
                    <nav className='flex flex-col mt-3 gap-3'>
                        <h6 className="footer-title font-bold">Design assets</h6>
                        <a className="text-sm text-gray-500">Dribbble Marketplace</a>
                        <a className="text-sm text-gray-500">Creative Market</a>
                        <a className="text-sm text-gray-500">Fortspring</a>
                        <a className="text-sm text-gray-500">Font Squirrel</a>
                    </nav>
                </div>


                <nav className='flex flex-col  gap-3 '>
                    <h6 className="footer-title font-bold">Design Resources</h6>
                    <a className="text-sm text-gray-500">Freelancing</a>
                    <a className="text-sm text-gray-500">Design Hiring</a>
                    <a className="text-sm text-gray-500">Design Portfolio</a>
                    <a className="text-sm text-gray-500">Design Education</a>
                    <a className="text-sm text-gray-500">Creative Process</a>
                    <a className="text-sm text-gray-500">Creative Industry</a>

                </nav>
               
            </div>
            <hr className='w-full block mt-10'/>
                <div className='w-full pt-5 flex gap-5 sm:gap-10 flex-wrap items-center justify-between '>
                    <p className='text-gray-400'>&copy; 2023 Dribbble.All rights reserved.</p>
                    <p className='text-gray-400'><span className='font-bold text-black'>20,501,853</span> shots dribbbled <FontAwesomeIcon icon={faDribbble} className='text-xl text-[#EA4B8B]' /></p>
                </div>
        </footer>
    );
};

export default Footer;