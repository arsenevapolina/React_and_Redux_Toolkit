import styles from "./MovieCard.module.css";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import Poster from "../Poster/Poster";
import MovieTitle from "../MovieTitle/MovieTitle";
import { Link } from "react-router-dom";
import { MovieCardProps } from "./MovieCard.types";

const MovieCard = ({ movie }) => {

  return (
    <Link to={`/movie/${movie.IMDB_ID}`} className={`${styles["movie-card"]}`}>
      <div className={`${styles["poster-wrapper"]}`}>
        <Poster
          src={movie.IMG_POSTER}
          alt={`${movie.AKA} poster`}
          className={styles["movie-poster"]}
        />
        <Rating image="" text={`${movie.RANK}`}/>{" "}
      </div>
      <MovieTitle text={movie.TITLE} /> 
      <div className={`${styles["bottom-content"]}`}>
        <Button
          variant="image"
          className={styles["image-button"]}
          onClick={() => console.log("Добавлено в избранное")}
        >
          <img
            src="/icons/like.svg"
            alt="Кнопка добавить"
            className={styles["bottom-image"]}
          />
        </Button>
        <p className={`${styles["bottom-text"]}`}>В избранное</p>{" "}}
      </div>
    </Link>
  );
};

export default MovieCard;