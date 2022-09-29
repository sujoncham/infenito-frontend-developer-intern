import React from 'react';
import horiline from '../../assets/horiline.png';
import serviceImg from '../../assets/services.png';

const Services = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className='flex justify-center items-center flex-col'>
                <img className='' src={horiline} alt="" />
                <h1 className='text-3xl font-bold'>Services we Provide</h1>
                <p>We serve the users in different categories with latest tools</p>
            </div>
                <img className='w-[100%]' src={serviceImg} alt="" />
        </div>
    );
};

export default Services;