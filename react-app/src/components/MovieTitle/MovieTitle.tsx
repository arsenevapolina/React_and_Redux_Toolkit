import React from "react";
import styles from "./MovieTitle.module.css";
import { MovieTitleProps } from "./MovieTitle.types"; 

const Title: React.FC<MovieTitleProps> = ({ text }) => {
  return <h3 className={`${styles["movie-title"]}`}>{text}</h3>;
};

export default Title;