import React from 'react';
import people from '../../assets/people-1.png';
import testimonial from '../../assets/testimonial.png';

const Testimonial = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center'>
                <div>
                    <h1>What you get besides <br /> the above things</h1>
                </div>
                <div>
                    <img src={testimonial} alt="" />
                    <p>24/7 Support</p>
                </div>
                <div>
                    <img src={people} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;