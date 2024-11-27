import React from "react";
import { NavLink } from "react-router-dom"; 
import styles from "./Links.module.css";
import Counter from "../Counter/Counter";
import { LinkProps } from "./Links.types";

const Link: React.FC<LinkProps> = ({
  to, 
  children,
  count,
  onCounterClick,
  img,
}) => {
  return (
    <div className={styles["link-container"]}>
      <NavLink
        to={to} 
        className={({ isActive }) =>
          
         `${styles["link"]} ${styles["link-container"]} ${isActive ? styles.activeLink : ""}`
        } 
      >
        {children}
        {img && <img src={img} alt="Аватар" />}
      </NavLink>
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


