import React from 'react';
import support from '../../assets/support.png';
import system from '../../assets/system.png';

const Supports = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center'>
                <div className='w-[100%]'>
                    <h1 className='text-3xl font-bold text-center md:text-start lg:text-start text-[#0E0E2C]'>What you get besides <br /> the above things?</h1>
                </div>
                <div className='w-[100%] flex justify-center items-center sm:p-10'>
                    <img src={support} alt="" />
                    <p>24/7 Support</p>
                </div>
                <div className='w-[100%] flex justify-end sm:justify-center'>
                    <img className='w-100' src={system} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Supports;