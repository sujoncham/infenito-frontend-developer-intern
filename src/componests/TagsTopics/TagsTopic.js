import React from 'react';
import ai from '../../assets/ai.png';
import applicate from '../../assets/application.png';
import blockchain from '../../assets/blockchain.png';
import database from '../../assets/database.png';
import game from '../../assets/game.png';
import horiImg from '../../assets/horiline.png';
import topicImg from '../../assets/topic.png';
import website from '../../assets/website.png';

const TagsTopic = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <img src={horiImg} alt="" />
                <h1>See popular tags <br /> and browse differnt topics</h1>
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
                        <img src={horiImg} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                    <div className='w-[100%]'>
                        <img src={database} alt="" />
                        <h1>Database stacks</h1>
                        <img src={horiImg} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                    <div className='w-[100%]'>
                        <img src={ai} alt="" />
                        <h1>AI stacks</h1>
                        <img src={horiImg} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                    <div className='w-[100%]'>
                        <img src={blockchain} alt="" />
                        <h1>Blockchain stacks</h1>
                        <img src={horiImg} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                    <div className='w-[100%]'>
                        <img src={game} alt="" />
                        <h1>Game stacks</h1>
                        <img src={horiImg} alt="" />
                        <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagsTopic;