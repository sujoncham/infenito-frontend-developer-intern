import React from 'react';
import ai from '../../assets/ai.png';
import applicate from '../../assets/application.png';
import blockchain from '../../assets/blockchain.png';
import database from '../../assets/database.png';
import game from '../../assets/game.png';
import horiImg from '../../assets/horiline.png';
import line2 from '../../assets/line-2.png';
import line3 from '../../assets/line-3.png';
import line4 from '../../assets/line-4.png';
import line5 from '../../assets/line-5.png';
import line6 from '../../assets/line-6.png';
import topicImg from '../../assets/topic.png';
import website from '../../assets/website.png';

const TagsTopic = () => {
    return (
        <div className='container mx-auto p-20'>
            <div className='mb-20'>
                <img src={horiImg} alt="" />
                <h1 className='text-3xl font-bold'>See popular tags <br /> and browse differnt topics</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='w-[100%]'>
                    <img className='w-100' src={topicImg} alt="" />
                </div>
                <div className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
                    <div className='w-[100%]'>
                        <img src={applicate} alt="" />
                        <h1>Application stacks</h1>
                        <img src={horiImg} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                    <div className='w-[100%]'>
                        <img src={website} alt="" />
                        <h1>Website stacks</h1>
                        <img src={line2} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                    <div className='w-[100%]'>
                        <img src={database} alt="" />
                        <h1>Database stacks</h1>
                        <img src={line3} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                    <div className='w-[100%]'>
                        <img src={ai} alt="" />
                        <h1>AI stacks</h1>
                        <img src={line4} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                    <div className='w-[100%]'>
                        <img src={blockchain} alt="" />
                        <h1>Blockchain stacks</h1>
                        <img src={line5} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                    <div className='w-[100%]'>
                        <img src={game} alt="" />
                        <h1>Game stacks</h1>
                        <img src={line6} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagsTopic;