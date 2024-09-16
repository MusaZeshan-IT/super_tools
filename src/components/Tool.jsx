import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ iconName, toolName, toolDesc, urlName }) => {
    return (
        <>
            <Link to={`${urlName}`}>
                <div className='flex gap-x-4 hover:cursor-pointer hover:text-blue-600'>
                    <i className={`fa-solid ${iconName} text-4xl`}></i>
                    <div>
                        <h4 className='text-xl'>{toolName}</h4>
                        <p className='text-sm text-gray-500'>{toolDesc}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Tool;
