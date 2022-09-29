import React from 'react';
import design from '../../assets/design.png';
import development from '../../assets/development.png';
import horiline from '../../assets/horiline.png';
import production from '../../assets/production.png';
import query from '../../assets/query.png';


const HowItWorks = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <img src={horiline} alt="" />
                <h1 className='text-3xl font-bold'>Let's See <br /> how it works</h1>
            </div>
            <div className='flex justify-between items-center gap-4 mt-20'>
                <div className='flex flex-col items-center'>
                    <div className='w-32 h-32 border-8 rounded-full p-5 z-10 flex justify-center items-center'>
                        <img src={query} alt="" />
                    </div>
                    <h3 className='text-xl font-bold'>Query Sent</h3>
                    <p>Give your prerequisites and an tell us what all you need</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-32 h-32 border-8 rounded-full p-5 z-10 flex justify-center items-center'>
                        <img src={design} alt="" />
                    </div>
                    <h3 className='text-xl font-bold'>Designing</h3>
                    <p>Get latest High Fiedility Designs with adaptive nature</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-32 h-32 border-8 rounded-full p-5 z-10 flex justify-center items-center'>
                        <img src={development} alt="" />
                    </div>
                    <h3 className='text-xl font-bold'>Development</h3>
                    <p>Get yor website deployed and start growing</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-32 h-32 border-8 rounded-full p-5 z-10 flex justify-center items-center'>
                        <img src={production} alt="" />
                    </div>
                    <h3 className='text-xl font-bold'>Production</h3>
                    <p>See detailed analytics of your product with experts support</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;