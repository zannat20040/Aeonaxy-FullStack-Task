import React from 'react';

const Heading = ({heading1 , heading2}) => {
    return (
        <>
            <h1 className='text-3xl font-bold '>{heading1}</h1>
            <p className='text-gray-400 mt-4
            '>{heading2}</p>
        </>
    );
};

export default Heading;