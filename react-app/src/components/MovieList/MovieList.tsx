import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import { MovieListProps } from "./MovieList.types";
import { NotFound } from "../../pages/NotFound/NotFound";

const MovieList: React.FC<MovieListProps> = ({
  movies,
  isLoading,
  error,
  noResults,
}) => {
   if (isLoading) {
     return (
       <div className={`${styles["movie-text"]}`}>Загружаем фильмы...</div>
     );
   }

   if (noResults) {
     return <NotFound/>; 
   }

  return (
    <div className={`${styles["movie-list"]}`}>
      {error && <>{error}</>}
      {!isLoading &&
        movies.map((movie) => (
          <MovieCard key={movie["#IMDB_ID"]} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;