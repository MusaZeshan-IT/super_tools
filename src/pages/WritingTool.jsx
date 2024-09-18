import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import WritingToolsList from '../helpers/WritingToolsList';
import api from '../apis/api'; // Ensure this is configured to hit your backend API

const WritingTool = () => {
    const { toolUrlName } = useParams();
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    // Find the tool based on the URL name
    const tool = WritingToolsList.find((tool) => tool.urlName === toolUrlName);

    // Function to handle generating output
    const handleGenerateOutput = async () => {
        if (!inputText.trim()) {
            alert("Please enter some text to process.");
            return;
        }

        try {
            const response = await api.post(`writing-tools/`, {
                text: inputText,
                task: tool.task,
            });

            const data = response.data;
            console.log(response.data);
            setOutputText(data.output); // Ensure this matches the response from your API
        } catch (error) {
            console.error('Error generating output:', error.response?.data || error.message);
        }
    };

    const handleCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Text copied to clipboard');
    };

    if (!tool) {
        return <div>Tool not found</div>;
    }

    return (
        <div className="px-24 mt-20 mb-40">
            {/* Heading Section */}
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-poppins text-gray-800 text-center">{tool.toolName}</h1>
                <p className="text-center font-poppins text-gray-600 mt-3 w-[55%]">{tool.toolFullDesc}</p>
                <div className="flex gap-x-4">
                    <button className="text-gray-700 hover:text-white hover:bg-gray-700 font-poppins border border-gray-700 px-5 py-2 rounded-md mt-6 transition-all duration-300">
                        See Examples
                    </button>
                    <button className="text-gray-700 hover:text-white hover:bg-gray-700 font-poppins border border-gray-700 px-5 py-2 rounded-md mt-6 transition-all duration-300">
                        Learn How to Use
                    </button>
                </div>
            </div>

            {/* Input and Output Section */}
            <div className="mt-16">
                <div className="grid grid-cols-2 h-[400px] gap-x-14">
                    {/* Input Text */}
                    <div className="h-full">
                        <h1 className="text-3xl font-poppins text-gray-700">Input Text</h1>
                        <div className="h-full bg-white pt-5 px-5 shadow-[0_5px_12px_0_rgba(0,0,0,0.15)] rounded-xl mt-3">
                            <textarea
                                className="bg-white-100 outline-none text-gray-700 font-poppins w-full h-[85%] resize-none"
                                placeholder="Start typing here..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <div className="w-full flex items-center gap-x-5">
                                <button
                                    className="bg-gray-800 hover:bg-gray-900 rounded-md py-2 px-4 font-poppins text-white flex items-center gap-x-1"
                                    onClick={handleGenerateOutput}
                                >
                                    <i className="fa-solid fa-wand-magic-sparkles text-[17px] text-white"></i>
                                    Generate
                                </button>
                                <button
                                    className="bg-gray-800 hover:bg-gray-900 rounded-md py-2 px-4 font-poppins text-white flex items-center gap-x-1"
                                    onClick={() => handleCopyToClipboard(outputText)}
                                >
                                    <i className="fa-solid fa-copy text-[17px] text-white"></i>
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Output Text */}
                    <div className="h-full">
                        <h1 className="text-3xl font-poppins text-gray-700">Output Text</h1>
                        <div className="h-full bg-white pt-5 px-5 shadow-[0_5px_12px_0_rgba(0,0,0,0.15)] rounded-xl mt-3">
                            <textarea
                                className="bg-white-100 outline-none text-gray-700 font-poppins w-full h-[85%] resize-none"
                                readOnly
                                value={outputText}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WritingTool;
