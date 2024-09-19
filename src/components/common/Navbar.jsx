import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* Desktop Navbar */}
            <div className='hidden lg:flex px-14 py-3 justify-between'>
                <div className='flex items-center gap-x-3'>
                    <img className='h-10 w-10' src={Logo} alt="" />
                    <h1 className='text-4xl text-blue-600 font-poppins tracking-tight'>Super Tools</h1>
                </div>
                <div className='flex items-center gap-x-10'>
                    <Link to='/'>
                        <p className='text-[22px] font-poppins'>Home</p>
                    </Link>
                    <Link to='/about-us'>
                        <p className='text-[22px] font-poppins'>About Super Tools</p>
                    </Link>
                    <Link to='/contact-us'>
                        <p className='text-[22px] font-poppins'>Contact Us</p>
                    </Link>
                    <div className={`rounded-full bg-blue-500 h-10 flex gap-x-2 justify-center items-center px-3`}>
                        <input className={`w-full h-full bg-blue-500 text-white outline-none ${open ? 'block rounded-full' : 'hidden'}`} type="text" name="" id="" />
                        <i onClick={() => setOpen(!open)} className="fa-solid fa-magnifying-glass text-lg text-white"></i>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='lg:hidden flex md:px-10 px-6 py-3 justify-between items-center'>
                <div className='flex items-center gap-x-3'>
                    <img className='xs:h-10 xs:w-10 h-9 w-9' src={Logo} alt="" />
                    <h1 className='xs:text-4xl text-3xl text-blue-600 font-poppins tracking-tight'>Super Tools</h1>
                </div>
                <i onClick={() => setOpen(!open)} className={`fa-solid fa-bars text-blue-600 xs:text-2xl text-xl cursor-pointer`} />
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-gray-900 bg-opacity-90 transition-transform transform ${open ? 'translate-x-0' : 'translate-x-full'} lg:hidden w-64 z-50`}>
                <div className='flex flex-col p-6'>
                    <div className='flex justify-end'>
                        <i onClick={() => setOpen(false)} className='fa-solid fa-xmark text-white text-3xl cursor-pointer mb-3' />
                    </div>
                    <Link to='/' className='text-white text-2xl mb-4' onClick={() => setOpen(false)}>
                        <i className='fa-solid me-2 fa-house'></i>
                        Home
                    </Link>
                    <Link to='/about-us' className='text-white text-2xl mb-4' onClick={() => setOpen(false)}>
                        <i className='fa-solid me-2 fa-circle-info'></i>
                        About Us
                    </Link>
                    <Link to='/contact-us' className='text-white text-2xl mb-4' onClick={() => setOpen(false)}>
                        <i className='fa-solid fa-phone me-2'></i>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
