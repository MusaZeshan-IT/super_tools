import React from 'react';
import Hero from '../components/Hero'
import WritingTools from '../components/WritingTools'

const Home = () => {
    return (
        <div className='flex flex-col gap-y-24 mb-24'>
            <Hero />
            <div className='px-24'>
                <WritingTools />
            </div>
        </div>
    );
}

export default Home;
