import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../Component/Button';
import Heading from '../Component/Heading';
import DiableButton from '../Component/DiableButton';
import axios from 'axios';
import { useFormContext } from '../Context/FormProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [preview, setPreview] = useState(null);
    const navigator = useNavigate()
    const { formData } = useFormContext()
    const { username } = formData;
    console.log(username)


    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        setImageUrl('')
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setPreview(reader.result); // Set the preview image
        };

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", 'qyx6upkj');
        data.append("cloud_name", 'ddtzy5jml');
        data.append("folder", "Cloudinary-React");

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/ddtzy5jml/image/upload`,
                {
                    method: "POST",
                    body: data,
                }
            );
            const res = await response.json();
            setImageUrl(res.secure_url);
        } catch (error) {
            console.log(error);
            setImageUrl('')
        }
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const HandleDefault = () => {
        setImageUrl('https://i.ibb.co/sjNpVr4/Neutral-placeholder-profile-300x300.jpg')
        setPreview('https://i.ibb.co/sjNpVr4/Neutral-placeholder-profile-300x300.jpg')
    }

    const HandleNext = async (e) => {
        e.preventDefault()

        try {

            const response = await axios.put(`http://localhost:5000/users/${username}`, {
                location: location,
                imageUrl: imageUrl
            });
            console.log(response.data)
            navigator('/profile/whatbrings')

        } catch (error) {
            console.error('Error storing data:', error);
        }

    }

    console.log(location)
    const isNextDisabled = !imageUrl || !location;

    return (
        <div className='max-w-xl mx-auto '>
            <Heading heading1={"Welcome! Let's create your profile"} heading2={"Let's other get to know you better! You can do these later"} />

            <form onSubmit={HandleNext}>
                <h1 className='text-lg font-bold mt-8 mb-4'>Add an avatar</h1>

                <div className='flex gap-5 justify-between sm:flex-row flex-col'>
                    <input id='upload' type='file' name='file' className='hidden' onChange={handleImageUpload} />
                    <label className={`w-36 h-36 rounded-full ${preview ? '' : 'border-dashed border-2 border-gray-400'} flex justify-center items-center`} htmlFor='upload'>
                        {preview ? <img src={preview} alt="Preview" className='w-full h-full rounded-full' /> : (imageUrl ? <img src={imageUrl} alt="Uploaded" className='w-full h-full rounded-full' /> : <FontAwesomeIcon icon={faCamera} className='text-xl text-gray-400' />)}
                    </label>
                    <div className='w-2/3 flex flex-col gap-3 items-start'>
                        <label htmlFor='upload' className='px-4 py-2 rounded-md bg-white border border-gray-100 text-sm'>Choose image</label>
                        <p onClick={HandleDefault} className='text-gray-400 cursor-pointer text-sm'><FontAwesomeIcon icon={faChevronRight} className='mr-1 text-sm' />Or choose one of our defaults</p>
                    </div>
                </div>

                <h1 className='text-lg font-bold mt-10 mb-4'>Add your location</h1>

                <input type='text' className='border-0 outline-0 border-b border-gray-300 w-full py-1 text-sm mb-8' placeholder='Enter a location' onChange={handleLocationChange} />

                {isNextDisabled ? <DiableButton label={'Next'} /> :<Button label={'Next'} />}

            </form>
        </div>
    );
};

export default Profile;
