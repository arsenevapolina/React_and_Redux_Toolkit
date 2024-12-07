import { useLoaderData } from "react-router-dom";
import { MovieDetailsProps } from "./MovieDetails.types";
import styles from "./MovieDetails.module.css"; 

export function MovieDetails() {
  const data = useLoaderData<MovieDetailsProps>();

  console.log("Полученные данные:", data);

  const { name } = data.short || {};

  return (
    <div className={`${styles["wrapper"]}`}>
      <p className={`${styles["p"]}`}>Поиск фильмов</p>
      <p className={`${styles["movie-title"]}`}> {name || "Имя не указано"}</p>
    </div>
  );
}