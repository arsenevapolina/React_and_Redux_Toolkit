import React from "react"; 
import styles from "./Form.module.css";
import { FormProps } from "./Form.types"; 

const Form: React.FC<FormProps> = ({ children }) => {
  return <div className={styles.form}>{children}</div>;
};

export default Form;