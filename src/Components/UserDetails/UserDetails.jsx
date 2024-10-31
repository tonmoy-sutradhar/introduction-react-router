import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const UDetails = useLoaderData();
  const { name, email } = UDetails;

  const { userID } = useParams();
  console.log(userID);
  return (
    <div>
      <h1>User details are here: </h1>
      <p>
        Name: <span className="font"> {name}</span>
      </p>
      <p>
        Email: <span className="email">{email}</span>
      </p>
      <button
        onClick={handleGoBack}
        className="text-white bg-green-500 hover:bg-green-700 ml-5 rounded-lg p-2"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
