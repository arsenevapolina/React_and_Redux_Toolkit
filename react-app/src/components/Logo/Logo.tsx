import React from "react";
import styles from "./Logo.module.css";
import Link from "../Link/Link";
import { LogoProps } from "./Logo.types"; 


const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link className={`${styles['logo-link']} ${className}`}>
      <img className={styles.logo} src="./public/icons/logo.svg" alt="Логотип" />
    </Link>
  );
}

export default Logo;