import React from "react";
import "./Rating.css"; 

const Rating = ({ image, text }) => {
  return (
    <div className="top-content">
      <img src={image} alt="Rating image" className="top-image" />
      <p className="top-text">{text}</p>
    </div>
  );
};

export default Rating;