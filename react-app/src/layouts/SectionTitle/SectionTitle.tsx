import React from "react"; 
import styles from "./SectionTitle.module.css";
import { SectionTitleProps } from "./SectionTitle.types"; 

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <div className={`${styles['heading-wrapper']}`}>{children}</div>;
}

export default SectionTitle;