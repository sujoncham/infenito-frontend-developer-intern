import React from 'react';
import people from '../../assets/people-1.png';

const Testimonial = () => {
    return (
        <div className='container mx-auto mt-20 p-5 sm:p-5 lg:p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
                <div>
                    <h1 className='text-3xl font-bold text-center mg:text-start lg:text-start text-[#0E0E2C]'>What you get besides <br /> the above things?</h1>
                </div>
                <div className='flex justify-content items-start gap-10 relative'>
                    <div className='w-[500px]'>
                       
                        <div style={{borderRadius:'28% 28% 0%'}} className='bg-[#31D0AA] p-8'>
                            <p className='text-white'>Look no further. These guys are great to work with! VERY GOOD COMPANY & GREAT TEAM SPIRIT! , strongly recommend them.</p>
                            <h3 className='text-white'>DAVID</h3>
                            <p className='text-white'>Jr. Manager at SUBROS, India</p>
                        </div>
                    </div>
                    <div className='p-10'>
                        <img className='absolute bottom-0 right-0' src={people} alt="" />
                    </div>
                    
                </div>
              
            </div>
        </div>
    );
};

export default Testimonial;