import React from 'react';
import logo from '../assets/png-transparent-design-community-dribbble-dribbbler-dribbble-logo-social-media-icon-thumbnail-removebg-preview.png'
import { Link, Outlet } from 'react-router-dom';


const AfterSignup = () => {
    return (
        <>
            <div className='bg-white sticky top-0 px-10 mx-auto'>
                <Link to='/'><img src={logo} className='container  h-24 w-24 ' /></Link>

            </div>
            <div className='container mx-auto px-10 py-10'>
                <Outlet></Outlet>
            </div>
        </>

    );
};

export default AfterSignup;