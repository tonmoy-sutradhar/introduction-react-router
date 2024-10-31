import { Link, useNavigate } from "react-router-dom";
import "./User.css";

const User = ({ user }) => {
  const { id, name, phone, website, email } = user;

  const navaigate = useNavigate();
  const handleMoreInfo = () => {
    navaigate(`/user/${id}`);
  };
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
      <button
        onClick={handleMoreInfo}
        className="text-white bg-green-500 hover:bg-green-700 ml-5 rounded-lg p-2"
      >
        More Info
      </button>
    </div>
  );
};

export default User;
