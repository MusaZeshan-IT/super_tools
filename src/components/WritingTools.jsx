import React from 'react';
import Tool from './Tool';
import WritingToolsList from '../helpers/WritingToolsList';

const WritingTools = () => {

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='text-center font-poppins text-blue-500 font-semibold text-2xl'>AI Writing Tools</h2>
                <h3 className='text-center font-poppins font-bold text-gray-700 text-4xl mt-2'>Super Tools - AI Generator Tools</h3>
                <p className='font-poppins mt-3 text-gray-600 text-lg text-center w-11/12'>
                    Write smarter and faster with AI, boosting productivity by 60% and creating top-tier, compelling content 5x quicker. Save time, unlock creativity, and focus on delivering impactful results effortlessly!
                </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20'>
                {WritingToolsList.map((tool) => (
                    <Tool
                        key={tool.id}
                        iconName={tool.iconName}
                        toolName={tool.toolName}
                        toolDesc={tool.toolDesc}
                        urlName={tool.urlName}
                    />
                ))}
            </div>
        </div>
    );
}

export default WritingTools;