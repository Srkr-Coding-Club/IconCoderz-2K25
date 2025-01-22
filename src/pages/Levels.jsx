import React from 'react';

const Levels = () => {
    // Handlers for card clicks
    const handleBeginnerClick = () => {
        window.location.href = 'https://forms.gle/KdMBv6Y6Dykk5nMX9'; // Redirect to the form
    };

    const handleExpertClick = () => {
        window.location.href = 'https://forms.gle/KdMBv6Y6Dykk5nMX9'; // Same form for both cards in this case
    };

    return (
        <div className="text-center space-y-8 mb-12">
            {/* Title Section */}
            <div>
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-100 tracking-wide uppercase animate__animated animate__fadeIn">
                    Choose Your Challenge
                </h2>
            </div>

            {/* Levels Cards */}
            <div className="flex flex-col items-center justify-center space-y-8 font-semibold md:flex-row md:space-y-0 md:space-x-8">
                {/* Beginner Card */}
                <div
                    className="flex flex-col items-center p-8 text-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-56 min-h-full cursor-pointer"
                    onClick={handleBeginnerClick} // Attach click handler
                >
                    <h4 className="text-white text-2xl font-extrabold mb-3 flex">
                        <span>Beginner</span>
                        <span className="ml-1">Level</span>
                    </h4>
                    <span className="text-lg text-gray-200">1st & 2nd Years</span>
                </div>

                {/* Expert Card */}
                <div
                    className="flex flex-col items-center p-8 text-center bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-56 min-h-full cursor-pointer"
                    onClick={handleExpertClick} // Attach click handler
                >
                    <h4 className="text-white text-2xl font-extrabold mb-3 flex">
                        <span>Expert</span>
                        <span className="ml-1">Level</span>
                    </h4>
                    <span className="text-lg text-gray-200">3rd & 4th Years</span>
                </div>
            </div>
            
        </div>
    );
};

export default Levels;
