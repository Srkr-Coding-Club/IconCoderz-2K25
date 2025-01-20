import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll Link
import { assets } from '../assets/assets';

const HeroSection1 = () => {
  const countdownDate = new Date('2024-10-18T00:00:00').getTime();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex space-x-6 justify-center text-center mt-10">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <span className="text-5xl font-bold text-white">{days}</span>
          <span className="text-sm text-white opacity-80">Days</span>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-red-500 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <span className="text-5xl font-bold text-white">{hours}</span>
          <span className="text-sm text-white opacity-80">Hours</span>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <span className="text-5xl font-bold text-white">{minutes}</span>
          <span className="text-sm text-white opacity-80">Minutes</span>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <span className="text-5xl font-bold text-white">{seconds}</span>
          <span className="text-sm text-white opacity-80">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen md:flex-row items-center justify-center bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-10 px-5 overflow-hidden">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-serif text-white">SRKR CODING CLUB PRESENTS</h1>
        <h1 className="text-5xl md:text-6xl font-semibold text-gradient bg-clip-text text-transparent">ICON CODERZ~2K25</h1>
        <p className="text-2xl font-bold text-cyan-300">4TH FEB TUESDAY</p>
        <p className="text-xl text-white opacity-80">HACK FOR A CHANGE!</p>
        <Countdown date={countdownDate} renderer={renderer} />

        {/* Buttons container */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8">
          {/* Go to Themes Button */}
          <ScrollLink
            to="themes"
            smooth={true}
            duration={500}
            className="px-12 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          >
            Go to Themes
          </ScrollLink>

          {/* Register Now Button */}
          <a
            href="https://forms.gle/XuPZN1aBkxoofAqG7"
            target="_blank"
            className="px-12 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-8 md:mt-0 w-[500px] md:ml-8 md:w-[700px] flex justify-center items-center">
        <img
          src={assets.HeroSection}
          alt="Character"
          className="max-w-full h-auto md:h-[30rem] object-cover opacity-90 transition-all duration-300 transform hover:scale-110"
        />
      </div>

      {/* Modal for showing themes and PDF */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-11/12 max-w-4xl shadow-xl transform transition-all duration-300">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-900 font-bold"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Instructions</h2>
            <p className="mb-4 text-gray-700">
              Please review the themes and problem statements for HackOverflow 2024. Below is the official document:
            </p>

            {/* PDF iframe */}
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="/HACKOVERFLOW-2K24-PROBLEM-STATEMENTS.pdf"
                className="w-full h-96"
                title="HackOverFlow Problem Statements"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection1;
