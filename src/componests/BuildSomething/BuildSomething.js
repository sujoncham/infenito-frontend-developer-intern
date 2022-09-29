import React from 'react';
import connecting from '../../assets/connecting.png';
import horiline from '../../assets/horiline.png';
import insta from '../../assets/insta.png';
import lin from '../../assets/lin.png';
import twt from '../../assets/twt.png';
import ContactForm from '../ContactForm/ContactForm';

const BuildSomething = () => {
    return (
        <div className='container mx-auto mt-20'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
               
                <div className="">
                    <img src={horiline} alt="" />
                    <h1>Let's Build Something <br /> AWESOME!</h1>
                    <p>One of the Tech Experts will reach out to you within next 48 business hours.</p>
                    <div>
                        <img src={connecting} alt="" />
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <img src={twt} alt="" />
                        <img src={lin} alt="" />
                        <img src={insta} alt="" />
                    </div>
                </div>
                <ContactForm />
               
            </div>
        </div>

    );
};

export default BuildSomething;