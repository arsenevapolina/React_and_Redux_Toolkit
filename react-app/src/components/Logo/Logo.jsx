import "./Logo.css"; 
import Link from "../Link/Link";

function Logo() {
  return (
    <Link className="logo-link">
      <img className="logo" src="./public/icons/logo.svg" alt="Логотип" />
    </Link>
  );
}

export default Logo;