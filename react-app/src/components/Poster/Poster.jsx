import React from "react";
import "./Poster.css"; 

const Poster = ({ src, alt }) => {
  return <img src={src} alt={alt} className="movie-poster" />;
};

export default Poster;
