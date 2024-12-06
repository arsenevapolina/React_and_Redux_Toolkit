import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import { MovieListProps } from "./MovieList.types";


const MovieList: React.FC<> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return;
  }
  return (
    <div className={`${styles["movie-list"]}`}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.IMDB_ID}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MovieList;