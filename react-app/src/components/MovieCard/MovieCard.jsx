import React from "react";
import "./MovieCard.css";
import "../Button/Button";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import Poster from "../Poster/Poster"; // Импортируем новый компонент
import MovieTitle from "../MovieTitle/MovieTitle";

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
        <Poster src={poster} alt={`${title} poster`} className="movie-poster" />
        <Rating image={topImage} text={topText} />
      </div>
      <MovieTitle text={title} />
      <div className="bottom-content">
        <Button
          className="image-button"
          onClick={() => console.log("Добавлено в избранное")}
        >
          <img
            src={bottomImage}
            alt="Кнопка добавить"
            className="bottom-image"
          />
        </Button>
        <p className="bottom-text">{bottomText}</p>
      </div>
    </div>
  );
};

export default MovieCard;
