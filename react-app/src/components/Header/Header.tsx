import React from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { HeaderProps } from "./Header.types"; 

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className={styles.header}>
      <Logo />
      {children}
    </div>
  );
}

export default Header;