import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const UDetails = useLoaderData();
  const { name, email } = UDetails;
  return (
    <div>
      <h1>User details are here: </h1>
      <p>
        Name: <span className="font"> {name}</span>
      </p>
      <p>
        Email: <span className="email">{email}</span>
      </p>
    </div>
  );
};

export default UserDetails;
