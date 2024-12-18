import React from "react";
import styles from "./MovieCard.module.css";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import Poster from "../Poster/Poster";
import MovieTitle from "../MovieTitle/MovieTitle";
import { Link } from "react-router-dom";
import { MovieCardProps } from "./MovieCard.types";
import { addMovie, removeMovie } from "../../store/favoriteMoviesSlice";
import { useDispatch } from "react-redux";

const MovieCard: React.FC<
  MovieCardProps & { isFavorite: boolean }
> = ({ movie, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeMovie({ id: movie["#IMDB_ID"] })); 
    } else {
      dispatch(addMovie(movie)); 
    }
  };

  return (
    <div className={styles["movie-card"]}>
      <Link to={`/movie/${movie["#IMDB_ID"]}`}>
        <div className={styles["wrapper"]}>
          <div className={`${styles["poster-wrapper"]}`}>
            <Poster src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} />
            <Rating image="" text={movie["#RANK"]} />
          </div>
          <MovieTitle
            className={styles["movie-title"]}
            text={movie["#TITLE"]}
          />
        </div>
      </Link>
      <div className={styles["bottom-content"]}>
        <Button
          className={styles["image-button"]}
          onClick={handleToggleFavorite}
        >
          <img
            src={isFavorite ? "/icons/bookmark.svg" : "/icons/like.svg"}
            alt={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
            className={styles["bottom-image"]}
          />
        </Button>
        <p className={isFavorite ? styles.favorite : styles.notFavorite}>
          {isFavorite ? "В избранном" : "Добавить в избранное"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;


