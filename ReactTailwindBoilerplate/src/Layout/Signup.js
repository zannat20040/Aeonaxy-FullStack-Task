import React, { useContext, useState } from 'react';
import signupimg from '../assets/ezgif-1-1d3e447503-removebg-preview.png'
import logo from '../assets/png-transparent-design-community-dribbble-dribbbler-dribbble-logo-social-media-icon-thumbnail-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Component/Button';
import swal from 'sweetalert';
import axios from 'axios'
import DiableButton from '../Component/DiableButton';
import FormProvider, { useFormContext } from '../Context/FormProvider';

const Signup = () => {
    const { formData, handleChange } = useFormContext()

    const navigate = useNavigate();
    const [usernameTaken, setUsernameTaken] = useState('');


    const { name, username, email, pass, termsChecked } = formData;

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/users', formData); // Use Axios to make a POST request

            if (response.status === 200) {
                swal('Great', 'You have created an account successfully', 'success');
                setUsernameTaken('');
                navigate('/profile');

            }
            else if (response.status === 400) {
                setUsernameTaken('Username has already been taken');

                swal('Great', 'You have created an account successfully', 'success');
            }
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.message === 'Username has already been taken') {
                setUsernameTaken(error.response.data.message);
            } else {
                swal('Error', 'Failed to create an account', 'error');
            }
        }

    };

    // Check if all input fields are filled
    const isFormFilled = name && username && email && pass.length >= 6 && termsChecked;


    return (
        <div className='grid grid-col-1 md:grid-cols-2 gap-5 items-center '>
            <div className='h-full bg-[#F2D184] px-10 pb-10 flex justify-between flex-col gap-10'>
                <img src={logo} alt="" className='h-24 w-24' />
                <h1 className='text-[#836014] text-3xl font-bold'>Discover the world's top Designer & Creatives.</h1>
                <img src={signupimg} className=' w-full' />
                <span className='text-[#836014]'>Art by <Link className='italic underline'>Peter Tarka</Link></span>
            </div>
            <div className='p-10 '>
                <p className='text-end font-medium '>Already a member? <Link className='text-blue-700'>Sign in</Link></p>
                <div className='mt-10 max-w-2xl mx-auto'>
                    <h1 className='text-3xl font-bold'>Sign up to Dribbble</h1>
                    <p className='text-red-500 mt-4'>{usernameTaken}</p>

                    <form action="" className='mt-10 ' onSubmit={handleSubmit}>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between items-center'>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="name" className='font-medium'>Name</label>
                                <input onChange={handleChange} id='name' required type="text" className='bg-[#F3F3F3] p-3 text-sm rounded-md outline-0' name='name' />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="username" className='font-medium  
                        '>Username</label>
                                <input onChange={handleChange} id='username' required type="text" className='bg-[#F3F3F3] p-3 text-sm rounded-md outline-0' name='username' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label htmlFor="email" className='font-medium  
                        '>Email</label>
                            <input onChange={handleChange} id='email' required type="email" className='bg-[#F3F3F3] p-3 rounded-md text-sm outline-0' name='email' />
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label htmlFor="pass" className='font-medium  
                        '>Password</label>
                            <input onChange={handleChange} required id='pass' type="password" placeholder='6+ character' className='bg-[#F3F3F3] text-sm p-3 rounded-md outline-0' name='pass' />
                        </div>
                        <div className='mt-6 flex gap-2 mb-8 '>
                            <input onChange={handleChange} name='termsChecked' id='termsChecked' required type="checkbox" className='w-4 h-4 border rounded-none mt-1' />
                            <label htmlFor="termsChecked" className='w-[95%] text-sm text-gray-600  '>Creating an account means you are okay with our <Link className='text-blue-700'>Terms of services, Privacy, Policy</Link> and our default <Link className='text-blue-700'>Notification Settings.</Link> </label>
                        </div>

                        {isFormFilled ? <Button label={'Create Account'} /> : <DiableButton label={'Create Account'} />
                        }

                        <span className='text-gray-500 block  mt-6 text-sm'>This site is protected by reCAPTCHA and the google <Link className='text-blue-700'>Privacy Policy</Link> and <Link className='text-blue-700'>Terms of Service</Link> apply.</span>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;