import React from 'react';
import bg from '../../assets/header-img.png';


const Banner = () => {
    return (
      
        <div className="flex justify-between items-center flex-col md:flex-row lg:flex-row">
            <div className='w-[50%] py-3 relative'>
                <h3 className="text-xl font-bold text-white text-welcome">Welcome to Infenito!</h3>
                <h1 className="text-5xl text-white py-10 text-power">We power <br /> brands to build <br /> big!</h1>
                <button className="btn btn-sm md:btn-md lg:btn-lg bg-transparent border-2 border-[#fff] w-56 text-white">Join</button>
                <img src={bg} alt="" className='w-100 absolute' />
            </div>
            <img src="https://www.northbrisbanehomeloans.com.au/wp-content/uploads/2022/04/keep-an-open-mind-img.gif" className="rounded-lg w-[100%] md:w-[50%] lg:w-[50%] mt-16" alt='' />
        </div>
        
    );
};

export default Banner;