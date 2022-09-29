import React from 'react';
import connecting from '../../assets/connecting.png';
import horiline from '../../assets/horiline.png';
import insta from '../../assets/insta.png';
import lin from '../../assets/lin.png';
import twt from '../../assets/twt.png';
import ContactForm from '../ContactForm/ContactForm';

const BuildSomething = () => {
    return (
        <div className='container mx-auto mt-20 mb-20 p-5 md:p-5 lg:p-5'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
               
                <div className="">
                    <img src={horiline} alt="" />
                    <h1 className='text-[#09002A] text-2xl font-bold py-10'>Let's Build Something <br /> AWESOME!</h1>
                    <p>One of the Tech Experts will reach out to you within next <br /> 48 business hours.</p>
                    <div>
                        <img src={connecting} alt="" />
                    </div>
                    <div>
                        <h3 className='text-[#09002A] text-xl font-bold'>Follow on us</h3>
                        <div className='flex justify-start items-center gap-5'>
                            <img src={twt} alt="" />
                            <img src={lin} alt="" />
                            <img src={insta} alt="" />
                        </div>
                    </div>
                </div>
                <ContactForm />
               
            </div>
        </div>

    );
};

export default BuildSomething;