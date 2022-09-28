import React from 'react';

const Banner = () => {
    return (
      
            <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                <img src="https://www.northbrisbanehomeloans.com.au/wp-content/uploads/2022/04/keep-an-open-mind-img.gif" className="rounded-lg z-[-1] w-100" alt='' />
                <div className=''>
                    <h1 className="text-xl font-bold">Welcome to Infenito!</h1>
                    <h1 className="text-5xl">We power <br /> brands to build <br /> big!</h1>
                    <button className="btn btn-primary">Join</button>
                </div>
            </div>
        
    );
};

export default Banner;