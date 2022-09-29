import React from 'react';
import footImg from '../../assets/footer-circle.png';

const Footer = () => {
    return (
      
            <footer className="bg-sky-900 relative text-white py-10">
                <div className='container mx-auto'>
                    <div className='flex justify-start gap-5'>
                        <div className='flex flex-col w-48'>
                            <h1 className='text-2xl font-bold mt-5 mb-5'>Company</h1>
                            <a className="link link-hover">Branding</a> 
                            <a className="link link-hover">Design</a> 
                            <a className="link link-hover">Marketing</a> 
                            <a className="link link-hover">Advertisement</a>
                        </div> 
                        <div className='flex flex-col w-48'>
                            <h1 className='text-2xl font-bold mt-5 mb-5'>Contact</h1>
                            <a className="link link-hover">About us</a> 
                            <a className="link link-hover">Contact</a> 
                            <a className="link link-hover">Jobs</a> 
                            <a className="link link-hover">Press kit</a>
                        </div> 
                        <div className='flex flex-col w-48'>
                            <h1 className='text-2xl font-bold mt-5 mb-5'>More</h1>
                            <a className="link link-hover">Terms of use</a> 
                            <a className="link link-hover">Privacy policy</a> 
                            <a className="link link-hover">Cookie policy</a>
                        </div> 
                    </div>
                </div>
                <div>
                    <img className='w-56 absolute top-0 right-0' src={footImg} alt="" />
                </div>
            </footer>
    );
};

export default Footer;