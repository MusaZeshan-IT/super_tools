import React from 'react';
import AiHuman from '../assets/ai-human.jpg';

const Hero = () => {
    return (
        <div className='bg-gradient-to-r from-blue-900 to-blue-800 h-[500px] px-20 flex gap-x-20 items-center justify-between'>
            {/* Text Section */}
            <div className='w-7/12'>
                <h1 className='text-[48px] font-bold font-poppins text-white leading-tight tracking-wide'>
                    Get the Best AI-Powered Tools for Your Business
                </h1>
                <p className='text-[18px] text-gray-200 mt-4 font-poppins leading-relaxed'>
                    Take your business to the next level with cutting-edge AI tools designed to streamline your content creation process. Get accurate grammar checks, concise text summaries, and engaging content with our all-in-one platform.
                </p>
                {/* Search Bar */}
                <div className='mt-10'>
                    <div className='h-12'>
                        <input
                            type='text'
                            placeholder='Search for AI tools...'
                            className='px-4 h-full font-poppins rounded-l-md text-gray-700 w-[280px] focus:outline-none'
                        />
                        <button className='px-6 h-full bg-amber-600 text-white tracking-wide rounded-r-md hover:bg-amber-500'>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Image or Illustration Section */}
            <div className='hidden lg:block w-5/12'>
                <img
                    src={AiHuman}
                    alt='AI tools illustration'
                    className='h-[400px] w-full rounded-lg shadow-[0px_0px_5px_3px_rgb(23,37,84)]'
                />
            </div>
        </div>
    );
};

export default Hero;
