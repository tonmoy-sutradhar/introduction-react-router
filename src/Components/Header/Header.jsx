import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <h1>My Website</h1>
        <NavLink className="ancor" to="/">
          Home
        </NavLink>
        <NavLink className="ancor" to="/about">
          About
        </NavLink>
        {/* <Link className="ancor" to="/about">
          About
        </Link> */}
        <NavLink className="ancor" to="/contact">
          Contact Us
        </NavLink>
        <NavLink className="ancor" to="/user">
          Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
