import React, { useEffect, useState } from 'react';
import logo from '../assets/png-transparent-design-community-dribbble-dribbbler-dribbble-logo-social-media-icon-thumbnail-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEnvelopeCircleCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faTwitter, faSquareFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Button from '../Component/Button';
import Heading from '../Component/Heading';
import Navbar from '../Component/Navbar';
import { useFormContext } from '../Context/FormProvider';
import axios from 'axios';
import Footer from '../Component/Footer';

const Verify = () => {

    const { formData } = useFormContext()
    const { username ,email,name} = formData;
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${username}`);
                setUserData(response.data);
                await sendEmail()
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (username) {
            fetchData();
        }
    }, [username]);

    
    const sendEmail = async () => {
        try {
            await axios.post('https://api.resend.com/send-email', {
                from: 'zannatulhema0110@email.com',
                to: email,
                subject: 'Thank you message',
                body: `Thank you ${name} for choosing Dribbble`,
            });
            console.log('Confirmation email has been sent.');
        } catch (error) {
            console.error('Error sending confirmation email:', error);
        }
    };

    return (
        <div>
            <div className='bg-white shadow sticky top-0'>
                <Navbar />
            </div>
            <div className='px-10 max-w-xl mx-auto text-center py-20 '>
                <Heading heading1={'Please verify your email... '} />
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='text-[100px] text-[#EA4B8B]' />
                <Heading heading2={"Please verify your email address, We've sent a confirmation email to:"} />
                <h3 className='my-4 font-bold'>{userData?.email}</h3>
                <Heading heading2={"Click the confirmation link in that email to begin using Dribble"} />
                <p className='mt-4 text-gray-400'>Didn't recieve the email? Check your Spam Folder , it may have been caught by a filter. If you still don't see it, you can <span className='text-[#EA4B8B] font-bold'>resend the confirmation email</span></p>
                <p className='text-gray-400 mt-4'>Wrong email address? <span className='text-[#EA4B8B] font-bold' n>Change it</span></p>

            </div>
           <Footer />
           
        </div>
    );
};

export default Verify;