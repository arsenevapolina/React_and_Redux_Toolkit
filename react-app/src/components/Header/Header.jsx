import "./Header.css";
import Logo from "../Logo/Logo";

function Header({ children }) {
  return (
    <div className="header">
      <Logo />
      {children}
    </div>
  );
}

export default Header;
