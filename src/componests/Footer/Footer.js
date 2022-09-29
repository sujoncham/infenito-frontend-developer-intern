import React from 'react';
import { Link } from 'react-router-dom';
import footImg from '../../assets/footer-circle.png';

const Footer = () => {
    return (
      
            <footer className="bg-[#0E0E2C]">
                <div className=' text-white relative py-10 max-w-[1500px] mx-auto'>
                    <div className='container mx-auto'>
                        <div className='flex justify-start gap-5'>
                            <div className='flex flex-col w-48'>
                                <h1 className='text-2xl font-bold mt-5 mb-5'>Company</h1>
                                <Link to='/' className="link link-hover">Branding</Link>
                                <Link to='/' className="link link-hover">Design</Link>
                                <Link to='/' className="link link-hover">Marketing</Link>
                                <Link to='/' className="link link-hover">Advertisement</Link>
                            </div> 
                            <div className='flex flex-col w-48'>
                                <h1 className='text-2xl font-bold mt-5 mb-5'>Contact</h1>
                                <Link to='/' className="link link-hover">About us</Link>
                                <Link to='/' className="link link-hover">Contact</Link>
                                <Link to='/' className="link link-hover">Jobs</Link>
                                <Link to='/' className="link link-hover">Press kit</Link>
                            </div> 
                            <div className='flex flex-col w-48'>
                                <h1 className='text-2xl font-bold mt-5 mb-5'>More</h1>
                                <Link to='/' className="link link-hover">Terms of use</Link>
                                <Link to='/' className="link link-hover">Privacy policy</Link>
                                <Link to='/' className="link link-hover">Cookie policy</Link>
                            </div> 
                        </div>
                    </div>
                    <div>
                        <img className='w-56 absolute bottom-0 right-0' src={footImg} alt="" />
                    </div>      
                </div>
            </footer>
    );
};

export default Footer;