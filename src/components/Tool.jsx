import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ iconName, toolName, toolDesc, urlName }) => {
    return (
        <>
            <Link to={`/writing-tools/${urlName}`}>
                <div className='flex gap-x-4 transition-all duration-200 ease-linear hover:cursor-pointer hover:shadow-[0_0_5px_0.5px_rgba(0,0,0,0.2)] rounded-lg p-4'>
                    <i className={`fa-solid ${iconName} text-gray-800 text-4xl`}></i>
                    <div>
                        <h4 className='text-[22px]'>{toolName}</h4>
                        <p className='text-[15px] text-gray-500'>{toolDesc}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Tool;
