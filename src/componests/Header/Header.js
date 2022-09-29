import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import Banner from '../Banner/Banner';
import './Header.css';

const Header = () => {

    const menubar = (<>
        <li className='active-menu'><Link to='/' >Home</Link></li>
        <li><Link to='/'>Portfolio</Link></li>
        <li><Link to='/'>About us</Link></li>
        <li><Link to='/'>Pricing</Link></li>
    </>)

    return (
        <div className='header'>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 uppercase shadow bg-base-100 rounded-box w-52">
                            {menubar}
                        </ul>
                        </div>
                        <Link to='/' className="text-xl">
                            <img className='w-36' src={logoImg} alt="" />
                        </Link>
                    </div>
                
                    <div className="navbar-end">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu uppercase menu-horizontal p-0">
                                {menubar}
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-sm">Login</Link>
                    </div>
                </div>
                <Banner />
            </div>
        </div>
    );
};

export default Header;