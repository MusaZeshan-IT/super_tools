import React from 'react';
import Hero from '../components/Hero'
import WritingTools from '../components/WritingTools'

const Home = () => {
    return (
        <div className='flex flex-col gap-y-24 mb-24'>
            <Hero />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <WritingTools />
            </div>
        </div>
    );
}

export default Home;
