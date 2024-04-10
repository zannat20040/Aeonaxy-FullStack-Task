import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faEnvelopeCircleCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faTwitter, faSquareFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';
import logo from '../assets/png-transparent-design-community-dribbble-dribbbler-dribbble-logo-social-media-icon-thumbnail-removebg-preview.png'
import { Link } from 'react-router-dom';
import { useFormContext } from '../Context/FormProvider';
import axios from 'axios';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const { formData } = useFormContext()
    const { username } = formData;
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${username}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (username) {
            fetchData();
        }
    }, [username]);

    console.log(userData)

    return (
        <nav className='container mx-auto px-10 sm:px-0 '>
            <div className='py-3 xl:py-0 flex flex-wrap justify-around sm:justify-center xl:justify-between gap-3 xl:gap-10 items-center '>
                <div className='w-full sm:w-fit  flex gap-8 justify-between items-center relative'>
                  <Link to='/'> <img src={logo} className='h-24 col-span-1' /></Link> 

                    <Link className='sm:flex hidden text-gray-500 text-sm'>Inspiration</Link>
                    <Link className='sm:flex hidden  text-gray-500 text-sm'>Find Work</Link>
                    <Link className='sm:flex hidden  text-gray-500 text-sm'>Learn Design</Link>
                    <Link className='sm:flex hidden  text-gray-500 text-sm'>Go Pro</Link>
                    <Link className='sm:flex hidden  text-gray-500 text-sm'>hre Designers</Link>
                    <div className=' sm:hidden flex text-gray-500 text-sm' onClick={() => setShowMenu(!showMenu)}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>



                    {/* hidden menu */}
                    {showMenu && <ul className='sm:hidden flex sm flex-col gap-3 justify-center items-center bg-white shadow-md w-full p-5 absolute top-[106px] right-0'>

                        <li><Link className=' text-gray-500 text-sm'>Inspiration</Link></li>
                        <li><Link className=' text-gray-500 text-sm'>Find Work</Link></li>
                        <li><Link className='text-gray-500 text-sm'>Learn Design</Link></li>
                        <li><Link className='  text-gray-500 text-sm'>Go Pro</Link></li>
                        <li><Link className='  text-gray-500 text-sm'>hre Designers</Link></li>
                        <li>
                            <div className="border border-gray-100 p-2 rounded flex gap-3 items-center bg-gray-100 ">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-300 " />
                                <input type="search" name="search" id="" className="outline-0 w-40 bg-gray-100" placeholder="Search" />
                            </div>
                        </li>
                        <li><FontAwesomeIcon icon={faBagShopping} className='text-2xl' /></li>
                        <li><img src={userData?.imageUrl} className='w-10 h-10 rounded-full bg-slate-400' /></li>
                        <li><Button label={'Upload'} /></li>
                    </ul>}




                </div>
                <ul className=' hidden sm:flex gap-8 items-center text-gray-500 justify-between'>
                    <li>
                        <div className="border border-gray-100 p-2 rounded flex gap-3 items-center bg-gray-100">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-300 " />
                            <input type="search" name="search" id="" className="outline-0 bg-gray-100" placeholder="Search" />
                        </div>
                    </li>
                    <li><FontAwesomeIcon icon={faBagShopping} className='text-2xl' /></li>
                    <li><img src={userData?.imageUrl} className='w-10 h-10 rounded-full bg-slate-400' /></li>
                    <li><Button label={'Upload'} /></li>

                </ul>
            </div>
        </nav>

    );
};

export default Navbar;