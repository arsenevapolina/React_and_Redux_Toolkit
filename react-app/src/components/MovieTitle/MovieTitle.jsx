import React from "react";
import "./MovieTitle.css"; 

const Title = ({ text }) => {
  return <h3 className="movie-title">{text}</h3>;
};

export default Title;
