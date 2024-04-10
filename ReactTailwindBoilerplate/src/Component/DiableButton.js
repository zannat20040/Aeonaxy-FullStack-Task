import React from 'react';

const DiableButton = ({label}) => {
    return (
        <button className='rounded-md text-white bg-[#EA4B8B] opacity-50 px-20  py-2 text-sm' disabled>{label}</button>
    );
};

export default DiableButton;