// Prizes.js
import React from "react";
import PriceItem from "./prizes/PriceItem";
import BenefitsCard from "./prizes/BenefitsCard"; // Import the BenefitsCard

const Prizes = () => {
  return (
    <>
      <div
        className="flex flex-col items-center w-full gap-12 mt-24"
        id="prizes">
        <h1 className="text-4xl font-extrabold text-center text-gray-100 tracking-wide uppercase animate__animated animate__fadeIn">
          Prizes
        </h1>
        <h2 className="text-lg font-bold text-orange-300 sm:text-3xl ">
          Prizes for both Beginers and Expert Levels
        </h2>
        <div className="grid justify-center max-[800px]:grid-cols-1 grid-cols-2 w-fit ">
          <PriceItem rank={1} />
          {/*<BenefitsCard />*/} {/* Add the BenefitsCard here */}
          <PriceItem rank={2} />
        </div>
      </div>
    </>
  );
};

export default Prizes;
