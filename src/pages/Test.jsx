import React from 'react';
import { useParams } from 'react-router-dom';
import WritingToolsList from '../helpers/WritingToolsList';

const WritingTool = () => {
    const { toolUrlName } = useParams();
    const tool = WritingToolsList.find((tool) => tool.urlName === toolUrlName);

    if (!tool) {
        return <div>Tool not found</div>;
    }

    return (
        <div className="px-8 md:px-24 mt-20 mb-40 max-w-screen-lg mx-auto">
            {/* Heading Section */}
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-gray-900 text-center leading-tight">
                    {tool.toolName}
                </h1>
                <p className="text-center text-gray-600 mt-3 w-[80%] md:w-[55%] leading-relaxed">
                    {tool.toolFullDesc}
                </p>
                <div className="flex gap-x-4 mt-6">
                    <button className="text-gray-800 hover:text-white hover:bg-gray-800 border border-gray-800 px-6 py-2 rounded-lg transition-all duration-300 shadow-sm">
                        See Examples
                    </button>
                    <button className="text-gray-800 hover:text-white hover:bg-gray-800 border border-gray-800 px-6 py-2 rounded-lg transition-all duration-300 shadow-sm">
                        Learn How to Use
                    </button>
                </div>
            </div>

            {/* Input and Output Section */}
            <div className="mt-16 grid md:grid-cols-2 gap-x-14">
                {/* Input Text */}
                <div className="h-full">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Input Text</h2>
                    <div className="bg-white backdrop-blur-lg shadow-md rounded-2xl p-6 relative overflow-hidden">
                        <textarea
                            className="w-full h-[85%] bg-transparent outline-none text-gray-700 resize-none rounded-t-xl leading-7"
                            placeholder="Start typing here..."
                            style={{ verticalAlign: 'top' }}
                        />
                        <div className="flex items-center gap-4 mt-4">
                            <button className="bg-gray-800 text-white py-2 px-4 rounded-lg transition hover:bg-gray-900 flex items-center gap-x-2 shadow-md">
                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                                Generate
                            </button>
                            <button className="bg-gray-800 text-white py-2 px-4 rounded-lg transition hover:bg-gray-900 flex items-center gap-x-2 shadow-md">
                                <i className="fa-regular fa-clipboard"></i>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>

                {/* Output Text */}
                <div className="h-full">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Output Text</h2>
                    <div className="bg-white backdrop-blur-lg shadow-md rounded-2xl p-6 relative overflow-hidden">
                        <textarea
                            className="w-full h-[85%] bg-transparent outline-none text-gray-700 resize-none rounded-t-xl leading-7"
                            readOnly
                            placeholder="Output will appear here..."
                            style={{ verticalAlign: 'top' }}
                        />
                        <div className="flex items-center gap-4 mt-4">
                            <button className="bg-gray-800 text-white py-2 px-4 rounded-lg transition hover:bg-gray-900 flex items-center gap-x-2 shadow-md">
                                <i className="fa-regular fa-clipboard"></i>
                                Copy to Clipboard
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WritingTool;
