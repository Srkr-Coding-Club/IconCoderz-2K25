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


      <div className="grid gap-8 mt-10 font-medium md:grid-cols-2">
        <div className="flex items-center justify-center h-full p-6 bg-gray-700 rounded-lg">
          <div className="max-w-lg overflow-y-auto text-white">
            <h2 className="mb-10 text-4xl font-bold text-center titles text-orange-300">
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
