import React from "react";
import styles from "./Poster.module.css";
import { PosterProps } from "./Poster.types"; 

const Poster: React.FC<PosterProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={`${styles["movie-poster"]}`}/>;
};

export default Poster;