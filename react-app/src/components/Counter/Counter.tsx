import React from "react";
import styles from "./Counter.module.css";
import { CounterProps } from "./Counter.types"; 

const Counter: React.FC<CounterProps> = ({ count, onClick }) => {
  return (
    <button className={styles.counter} onClick={onClick}>
      {count}
    </button>
  );
};

export default Counter;