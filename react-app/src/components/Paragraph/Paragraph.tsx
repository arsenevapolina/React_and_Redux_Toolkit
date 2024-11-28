import React from "react";
import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.types"; 

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};

export default Paragraph;