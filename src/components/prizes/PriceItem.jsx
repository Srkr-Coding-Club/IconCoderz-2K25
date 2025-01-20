import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { assets } from "../../assets/assets";

const PriceItem = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Ranks and corresponding icons
  const ranks = {
    0: "/prize.svg",
    1: "/1st_Place_Medal.webp",
    2: "/2nd_Place_Medal.webp",
    3: "/3rd_Place_Medal.webp",
  };

  const iconNum = props.rank || 0;
  const icon = ranks[iconNum];

  // Award descriptions for each rank
  const awards = {
    1: [{ image: assets.airpods1, name: "AirPods" }],
    2: [{ image: assets.watch1, name: "Watch" }],
  };

  const awardList = awards[props.rank] || [];

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div
        className={`glassy-div w-[21rem] h-[30rem] sm:w-[18rem] sm:h-[25rem] max-[768px]:w-[15rem] max-[768px]:h-[22rem] flex flex-col items-center gap-4 p-4 rounded-3xl relative overflow-hidden m-4`}
      >
        <img
          className="w-[50%] max-w-[8rem] mx-auto"
          src={icon}
          alt="Rank Icon"
        />
        <ul className="mt-4 text-white list-none flex flex-col items-center gap-6">
          {awardList.map((award, index) => (
            <li key={index} className="flex flex-col items-center gap-2">
              <img
                className="w-63 h-63 max-w-[16rem] max-h-[16rem] scale-x-[-1] drop-shadow-3xl"
                src={award.image}
                alt={award.name}
              />
            </li>
          ))}
        </ul>
        {awardList.length > 3 && (
          <button
            onClick={() => setIsFlipped(true)}
            className="px-6 py-2 mt-4 text-lg font-semibold text-white bg-[#232323] rounded-full"
          >
            More
          </button>
        )}
        <div className="absolute w-[150%] rounded-full aspect-square bg-[#232323] -z-10 translate-y-[-65%]"></div>
      </div>

      {/* Back Side */}
      <div
        className={`glassy-div w-[21rem] h-[30rem] sm:w-[18rem] sm:h-[25rem] max-[768px]:w-[15rem] max-[768px]:h-[22rem] flex flex-col items-center gap-4 p-4 rounded-3xl relative overflow-hidden m-4`}
      >
        <img
          className="w-[50%] max-w-[8rem] mx-auto rounded-md shadow-lg"
          src="/more_awards.svg"
          alt="More Awards Icon"
        />
        <ul className="mt-4 text-white list-none flex flex-col items-center gap-6">
          {awardList.slice(3).map((award, index) => (
            <li key={index} className="flex flex-col items-center gap-2">
              <img
                className="w-16 h-16 max-w-[4rem] max-h-[4rem] rounded-full shadow-lg border-[2px] border-[#ffffff80]"
                src={award.image}
                alt={award.name}
              />
              <span className="text-lg font-medium text-center max-w-[8rem] truncate">
                {award.name}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsFlipped(false)}
          className="px-6 py-2 mt-4 text-lg font-semibold text-white bg-[#232323] rounded-full"
        >
          Back
        </button>
        <div className="absolute w-[150%] rounded-full aspect-square bg-[#232323] -z-10 translate-y-[-65%]"></div>
      </div>
    </ReactCardFlip>
  );
};

export default PriceItem;
