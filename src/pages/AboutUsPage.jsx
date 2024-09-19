import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                    At <span className="font-bold text-blue-600">Super Tools</span>, we are dedicated to providing top-notch services and products that exceed expectations. Our mission is to deliver excellence in every project we undertake, ensuring the highest level of customer satisfaction.
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Vision Section */}
                <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2">
                    <svg
                        className="h-12 w-12 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M4 6h16M4 6a2 2 0 012-2h12a2 2 0 012 2M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6"></path>
                    </svg>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">Our Vision</h2>
                    <p className="mt-2 text-gray-600 font-poppins text-center">
                        To be a global leader in delivering innovative, customer-centric solutions that inspire and drive growth.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2">
                    <svg
                        className="h-12 w-12 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">Our Mission</h2>
                    <p className="mt-2 text-gray-600 font-poppins text-center">
                        We strive to empower businesses and individuals by providing cutting-edge services and fostering long-lasting relationships built on trust and integrity.
                    </p>
                </div>

                {/* Values Section */}
                <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2">
                    <svg
                        className="h-12 w-12 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 8c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3z"></path>
                        <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    </svg>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">Our Values</h2>
                    <p className="mt-2 text-gray-600 font-poppins text-center">
                        Innovation, integrity, and customer-first are the pillars of our success, and we uphold these values in every endeavor.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
