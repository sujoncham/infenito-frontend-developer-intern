import React from 'react';
import horiline from '../../assets/horiline.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';




const HowItWorks = () => {
    return (
        <div className='container mx-auto p-5 md:p-5 lg:p-5'>
            <div>
                <img src={horiline} alt="" />
                <h1 className='text-3xl font-bold mt-3 text-[#0E0E2C]'>Let's See <br /> how it works</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20'>
                <div className='flex flex-col items-center shadow-xl p-5 rounded-md'>
                    <div className='w-32 h-32 border-8 border-[#6563FF] rounded-full flex justify-center items-center'>
                        <img src={icon1} alt="" />
                    </div>
                    <h3 className='text-xl font-bold text-[#6563FF]'>Query Sent</h3>
                    <p>Give your prerequisites and an tell us what all you need</p>
                </div>
                <div className='flex flex-col items-center shadow-xl p-5 rounded-md'>
                    <div className='w-32 h-32 border-8 border-[#FF7C7C] rounded-full flex justify-center items-center'>
                        <img src={icon2} alt="" />
                    </div>
                    <h3 className='text-xl font-bold text-[#FF7C7C]'>Designing</h3>
                    <p>Get latest High Fiedility Designs with adaptive nature</p>
                </div>
                <div className='flex flex-col items-center shadow-xl p-5 rounded-md'>
                    <div className='w-32 h-32 border-8 border-[#31D0AA] rounded-full flex justify-center items-center'>
                        <img src={icon3} alt="" />
                    </div>
                    <h3 className='text-xl font-bold text-[#31D0AA]'>Development</h3>
                    <p>Get yor website deployed and start growing</p>
                </div>
                <div className='flex flex-col items-center shadow-xl p-5 rounded-md'>
                    <div className='w-32 h-32 border-8 border-[#F4C751] rounded-full flex justify-center items-center'>
                        <img src={icon4} alt="" />
                    </div>
                    <h3 className='text-xl font-bold text-[#F4C751]'>Production</h3>
                    <p>See detailed analytics of your product with experts support</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;