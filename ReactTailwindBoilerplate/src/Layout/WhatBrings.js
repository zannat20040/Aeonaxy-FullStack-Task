import React, { useState } from 'react';
import Heading from '../Component/Heading';
import img1 from '../assets/5817153_Монтажная-область-1-1.png'
import img2 from '../assets/graphc.png'
import img3 from '../assets/WhatsApp-Image-2022-07-12-at-2.13.56-PM-8.jpeg'
import Button from '../Component/Button';
import DiableButton from '../Component/DiableButton';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormContext } from '../Context/FormProvider';
import swal from 'sweetalert'

const WhatBrings = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const { formData } = useFormContext()
    const { username, email, name } = formData;
    const navigate =useNavigate()

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    const isButtonEnabled = selectedOption !== '';

    const handleFinish = async (e) => {
        e.preventDefault()
        console.log(selectedOption)
        console.log(username , email)
        if (username && email) {
            try {
          
                const  emailResponse = await axios.put(`http://localhost:5000/users/${username}`, {
                    status: selectedOption
                })

                // Check if both requests were successful
                if (emailResponse.status === 200) {
                    console.log('check mail')
                 
                    console.log(emailResponse.data)
                    navigate('/verify');
                } else {
                    console.error('Error updating data or sending email');
                }
            } catch (error) {
                console.error('Error updating data or sending email:', error);
            }
        }
    };


    return (
        <div className='text-center pb-20'>


            <Heading heading1={"What brings you to Dribble"} heading2={"Select the option that best describe you. Don't worry you can express other options later "} />

<form onSubmit={handleFinish}>
<div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-16 justify-between '>
                <div className='h-full hover:border-pink-600 p-6 border-2 border-gray-200 rounded-md flex justify-between flex-col'>
                    <label htmlFor='share' className=' items-center flex flex-col '><img className='h-40' src={img1} /><p className='py-3 font-bold'>I'm a designer looking to share my work</p></label>
                    <input type='radio' id='share' name='option' onChange={() => handleOptionChange('share')} />
                </div>
                <div className='h-full p-6 hover:border-pink-600  border-2 border-gray-200 rounded-md flex justify-between flex-col'>
                    <label htmlFor='hire' className='mx-auto text-center flex flex-col '><img className='h-40' src={img2} /><p className='py-3 font-bold'>I'm looking to hire a deisgner</p></label>
                    <input type='radio' id='hire' name='option' onChange={() => handleOptionChange('hire')} />
                </div>
                <div className='h-full p-6 hover:border-pink-600  border-2 border-gray-200 rounded-md flex justify-between flex-col'>
                    <label htmlFor='design' className='mx-auto text-center flex flex-col '><img className='h-40' src={img3} /><p className='py-3 font-bold'>I'm a designer looking for deisgn inspiration</p></label>
                    <input type='radio' id='design' name='option' onChange={() => handleOptionChange('design')} />
                </div>


            </div>

            {isButtonEnabled ? <Button label={'Finish'} /> : <DiableButton label={'Finish'} />}
</form>
         

        </div>
    );
};

export default WhatBrings;