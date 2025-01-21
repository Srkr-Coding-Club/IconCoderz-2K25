import React from 'react';

const MainRules = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white" id='rules'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-100 tracking-wide uppercase animate__animated animate__fadeIn">
          Main Rules & Guidelines
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Rule Card 1 */}
          <div className="w-full p-8 bg-gray-700 text-white rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp">
            <h3 className="text-3xl font-semibold mb-4 text-indigo-400">1. Submission Deadline</h3>
            <p className="text-lg">
              Submissions must be made before the specified time limit. Late submissions will not be accepted.
            </p>
          </div>

          {/* Rule Card 2 */}
          <div className="w-full p-8 bg-gray-700 text-white rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate__delay-1s">
            <h3 className="text-3xl font-semibold mb-4 text-indigo-400">2. Timely Arrival</h3>
            <p className="text-lg">
              All participants must arrive at the venue within the specified reporting time. No additional time will be granted to compensate for any delays.
            </p>
          </div>

          {/* Rule Card 3 */}
          <div className="w-full p-8 bg-gray-700 text-white rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate__delay-2s">
            <h3 className="text-3xl font-semibold mb-4 text-indigo-400">3. Code Plagiarism</h3>
            <p className="text-lg">
              Code plagiarism will result in immediate disqualification. Original work only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainRules;
