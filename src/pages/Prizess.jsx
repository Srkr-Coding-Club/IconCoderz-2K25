import React, { useState } from "react";
import "./Prizess.css"
import { assets } from "../assets/assets";
const Card = ({
  medal,
  image,
  level,
  title, // The title for the back side
  onClick,
  isFlipped,
  showBackButton,
  onBackClick,
}) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="card-inner">
        <div className="card-front" onClick={onClick}>
          <div className="medal">
            <img src={medal} alt="Medal" className="drop-shadow-5xl"/>
          </div>
          <h3>{level}</h3>
          <button className="view-prize-button">View Prize</button>
        </div>
        <div className="card-back">
          <div className="card-back-title">{title}</div> {/* Title for the back */}
          <img src={image} alt="Card Back" className="card-back-image drop-shadow-4xl" />
          {showBackButton && (
            <button className="back-button" onClick={onBackClick}>
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Prizess = () => {
  const [flipped, setFlipped] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  const cardData = [
    {
      medal: assets.begginer, 
      image: assets.watch1, 
      level: "Beginner Level",
      title: "1st Prize", 
    },
    {
      medal: assets.expert, // Replace with your image path
      image: assets.airpods1, // Replace with your image path
      level: "Expert Level",
      title: "2nd Prize", // Title for the back of the card
    },
  ];

  const handleCardClick = () => {
    setFlipped(true);
    setShowBackButton(true);
  };

  const handleBackClick = () => {
    setFlipped(false);
    setShowBackButton(false);
  };

  return (

  <div  id='prizess'>
    <div className="mb-5 mt-12">
    <h1 className="text-4xl font-extrabold text-center text-gray-100 tracking-wide uppercase animate__animated animate__fadeIn ">
            Prizes
            </h1>
    </div>
    <div className="card-container">
      
      {cardData.map((data, index) => (
        <Card
          key={index}
          medal={data.medal}
          image={data.image}
          level={data.level}
          title={data.title} // Pass title to the back side
          isFlipped={flipped}
          showBackButton={showBackButton}
          onClick={handleCardClick}
          onBackClick={handleBackClick}
        />
      ))}
    </div>
  </div>

    
  );
};

export default Prizess;
