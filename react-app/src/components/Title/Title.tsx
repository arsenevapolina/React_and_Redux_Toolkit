import React from "react";
import styles from "./Title.module.css";
import { TitleProps } from "./Title.types"; 

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
}

export default Title;