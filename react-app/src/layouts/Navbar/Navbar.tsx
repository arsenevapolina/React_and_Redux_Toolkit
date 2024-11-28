import React from "react"; 
import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.types"; 

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return <div className={styles.navbar}>{children}</div>;
}

export default Navbar;