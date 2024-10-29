import { Link } from "react-router-dom";
import "./User.css";

const User = ({ user }) => {
  const { id, name, phone, website, email } = user;
  return (
    <div className="user-container">
      <h1>Name: {name}</h1>
      <p>
        Email: <span className="email">{email}</span>
      </p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <Link to={`/user/${id}`}>
        <button className="btn">Show Details</button>
      </Link>
    </div>
  );
};

export default User;
