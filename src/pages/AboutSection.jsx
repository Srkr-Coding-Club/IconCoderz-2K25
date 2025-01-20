import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="px-5 py-10 text-white" id="about">

<div className="flex flex-col items-center justify-center space-y-8 font-semibold md:flex-row md:space-y-0 md:space-x-8">

  {/* Second card */}
  <div className="flex flex-col items-center p-8 text-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-56 min-h-full">
    {/*<span className="text-4xl text-pink-500">
      {inView && <CountUp start={0} end={24} duration={2} />}
    </span>*/}
    <h4 className="text-white text-2xl font-extrabold mb-3 flex">
      <span>Expert</span>
      <span className="ml-1">Level</span>
    </h4>
    <span className="text-lg text-gray-200">1st & 2nd Years</span>
  </div>

  {/* Third card */}
  <div className="flex flex-col items-center p-8 text-center bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-56 min-h-full">
    {/*<span className="text-4xl text-orange-500">
      {inView && <CountUp start={0} end={1000} duration={2} separator="," suffix="+" />}
    </span>*/}
    <h4 className="text-white text-2xl font-extrabold mb-3 flex">
      <span>Beginner</span>
      <span className="ml-1">Level</span>
    </h4>
    <span className="text-lg text-gray-200">3rd & 4th Years</span>
  </div>

</div>



      <div className="grid gap-8 mt-10 font-medium md:grid-cols-2">
        <div className="flex items-center justify-center h-full p-6 bg-gray-700 rounded-lg">
          <div className="max-w-lg overflow-y-auto text-white">
            <h2 className="mb-10 text-4xl font-bold text-center titles">
              What is Icon Coderz
            </h2>
            <p className="mb-4 text-lg">
              Icon Coderz is an inter-college coding competition hosted by the{" "}
              <strong>SRKR Coding Club</strong> at{" "}
              <strong>Sagi Rama Krishnam Raju Engineering College (Autonomous), Bhimavaram, Andhra Pradesh.</strong>
              This event is designed to test and enhance the programming skills of students across all years,
              with two levels of participation: Beginner Level for 1st and 2nd-year students and Expert Level for 3rd and 4th-year students.
            </p>
            <p className="mb-4 text-lg">
              The competition provides a platform for students to showcase their coding expertise
              while solving challenging problems and competing against peers. Icon Coderz fosters creativity, collaboration,
              and innovation, encouraging participants to think critically and develop efficient solutions.
              Whether you're an experienced programmer or new to coding, this event is a fantastic opportunity to learn, compete,
              and gain recognition as an outstanding coder.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full h-auto p-3 bg-gray-600 rounded-lg">
          <img
            src="/team.jpg"
            alt="Hackathon"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
