import React from 'react';
import horiline from '../../assets/horiline.png';
import meeting from '../../assets/meeting.png';
import paper from '../../assets/paper.png';
import yoga from '../../assets/yoga.png';

const Gallery = () => {
    return (
        <div className='container mx-auto bg-[#FFE5F7] rounded-md'>
            <div className='flex flex-col justify-center items-center p-20 gap-5'>
                <img className='w-32' src={horiline} alt="" />
                <h1 className='text-3xl font-bold text-[#0E0E2C]'>Still have a doubt ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                <div className='flex justify-center items-center gap-2'>
                    <img src={meeting} alt="" />
                    <div>
                        <h3>About Infenito, <br /> insights about us</h3>
                        <img src={horiline} alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <img src={paper} alt="" />
                    <div>
                        <h3>About Infenito, <br /> insights about us</h3>
                        <img src={horiline} alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <img className='w-64 h-72 rounded-2xl' src={yoga} alt="" />
                    <div>
                        <h3>About Infenito, <br /> insights about us</h3>
                        <img src={horiline} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;