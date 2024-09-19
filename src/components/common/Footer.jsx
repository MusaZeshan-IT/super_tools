import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-blue-800 text-white py-8'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:gap-10 gap-y-4 md:flex-row'>
                    {/* Logo and Description */}
                    <div className='mb-6 md:mb-0 md:w-2/4'>
                        <h1 className='text-3xl font-poppins font-bold mb-2'>Super Tools</h1>
                        <p className='text-[16.5px] font-poppins'>
                            Your one-stop solution for all the best tools and resources. Empowering your projects with the best quality and service.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className='md:w-2/4 flex xs:flex-row flex-col xs:gap-x-24 md:justify-end justify-start'>
                        <div className='flex flex-col md:flex-row mb-6 md:mb-0'>
                            <div className='flex flex-col mb-4 md:mb-0'>
                                <h2 className='text-xl font-semibold mb-3'>Navigation</h2>
                                <Link to='/' className='block hover:underline mb-2'>Home</Link>
                                <Link to='/about-us' className='block hover:underline mb-2'>About Us</Link>
                                <Link to='/contact-us' className='block hover:underline'>Contact Us</Link>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className='flex flex-col'>
                            <h2 className='text-xl font-semibold mb-3'>Contact Us</h2>
                            <p className='mb-2'>Email: <a href="mailto:info@supertools.com" className='hover:underline'>info@supertools.com</a></p>
                            <p>Phone: +92 3079410053</p>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className='flex xs:justify-center gap-6 mt-10'>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-300'>
                        <i className='fa-brands fa-facebook-f text-2xl'></i>
                    </a>
                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-300'>
                        <i className='fa-brands fa-twitter text-2xl'></i>
                    </a>
                    <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-300'>
                        <i className='fa-brands fa-instagram text-2xl'></i>
                    </a>
                    <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-300'>
                        <i className='fa-brands fa-linkedin-in text-2xl'></i>
                    </a>
                </div>

                {/* Footer Bottom */}
                <div className='border-t border-blue-600 mt-6 pt-4 text-center'>
                    <p className='text-sm'>
                        &copy; {new Date().getFullYear()} Super Tools. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
