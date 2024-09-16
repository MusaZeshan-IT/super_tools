import React, { useState } from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='px-14 py-3 flex justify-between'>
            <div className='flex items-center gap-x-3'>
                <img className='h-10 w-10' src={Logo} alt="" />
                <h1 className='text-4xl text-blue-600 font-poppins tracking-tight'>Super Tools</h1>
            </div>
            <div className='flex items-center gap-x-10'>
                <p className='text-[22px] font-poppins'>Home</p>
                <p className='text-[22px] font-poppins'>About Super Tools</p>
                <p className='text-[22px] font-poppins'>Contact Us</p>
                <div className={`rounded-full bg-blue-500 h-10 flex gap-x-2 justify-center items-center px-3`}>
                    <input className={`w-full h-full bg-blue-500 text-white outline-none ${open ? 'block rounded-full' : 'hidden'}`} type="text" name="" id="" />
                    <i onClick={() => setOpen(!open)} className="fa-solid fa-magnifying-glass text-lg text-white"></i>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
