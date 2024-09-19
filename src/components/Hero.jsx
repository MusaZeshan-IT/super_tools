import React from 'react';
import BusinessWoman from '../assets/smiling-business-woman-w-laptop.png';

const Hero = () => {
    return (
        <div className='bg-gradient-to-r from-blue-900 to-blue-800 h-fit py-6 lg:px-14 md:px-10 px-6 flex flex-row gap-x-16 items-center justify-between'>
            {/* Text Section */}
            <div className='lg:w-7/12 mt-10'>
                <h1 className='text-[48px] font-bold font-poppins text-white sm:leading-tight leading-[1.1] tracking-wide'>
                    Get the Best AI-Powered Tools for Your Business
                </h1>
                <p className='text-[18px] text-gray-200 mt-4 font-poppins leading-relaxed'>
                    Take your business to the next level with cutting-edge AI tools designed to streamline your content creation process. Get accurate grammar checks, concise text summaries, and engaging content with our all-in-one platform.
                </p>
                {/* Search Bar */}
                <div className='mt-12'>
                    <div className='h-12 flex'>
                        <input
                            type='text'
                            placeholder='Search for AI tools...'
                            className='px-4 h-full font-poppins rounded-l-md text-gray-700 sm:w-[280px] focus:outline-none'
                        />
                        <button className='sm:px-6 px-4 h-full bg-amber-600 text-white tracking-wide rounded-r-md hover:bg-amber-500'>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Image or Illustration Section */}
            <div className='hidden lg:block lg:w-5/12'>
                <img
                    src={BusinessWoman}
                    alt='AI tools illustration'
                    className='h-[480px]'
                />
            </div>
        </div>
    );
};

export default Hero;
