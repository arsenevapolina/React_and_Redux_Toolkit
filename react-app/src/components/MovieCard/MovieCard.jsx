import React from "react";
import "./MovieCard.css";

const MovieCard = ({
  title,
  poster,
  topImage,
  topText,
  bottomImage,
  bottomText,
}) => {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img src={poster} alt={`${title} poster`} className="movie-poster" />
        <div className="top-content">
          <img src={topImage} alt="Star" className="top-image" />
          <p className="top-text">{topText}</p>
        </div>
      </div>
      <h3 className="movie-title">{title}</h3>
      <div className="bottom-content">
        <button
          className="image-button"
          onClick={() => console.log("Добавлено в избранное")}
        >
          <img src={bottomImage} alt="Кнопка добавить" className="bottom-image" />
        </button>
        <p className="bottom-text">{bottomText}</p>
      </div>
    </div>
  );
};

export default MovieCard;
