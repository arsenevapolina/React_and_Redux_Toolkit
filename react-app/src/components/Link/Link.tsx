import React from "react";
import styles from "./Link.module.css";
import Counter from "../Counter/Counter";
import { LinkProps } from "./Link.types"; 

const Link: React.FC<LinkProps> = ({
  children,
  count,
  onCounterClick,
  img,
}) => {
  return (
    <div className={styles["link-container"]}>
      <a className={`${styles["link-container"]} ${styles.link}`} href="#">
        {children}
        {img && <img src={img} alt="Аватар" />}
      </a>
      {count !== undefined && (
        <Counter
          count={count}
          onClick={onCounterClick ? onCounterClick : undefined}
        />
      )}
    </div>
  );
};

export default Link;


