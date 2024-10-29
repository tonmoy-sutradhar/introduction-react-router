import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <h1>My Website</h1>
        <Link className="ancor" to="/">
          Home
        </Link>
        <Link className="ancor" to="/about">
          About
        </Link>
        <Link className="ancor" to="/contact">
          Contact Us
        </Link>
        <Link className="ancor" to="/user">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Header;
