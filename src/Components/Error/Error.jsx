import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1 className="text-red-600 font-bold text-3xl text-center">Error!!</h1>
      <p className="text-red-600 font-bold text-center ">Not Found !!</p>

      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div className="text-center">
          <p>Page not found</p>
          <p>Go back to home page.</p>
          <Link to="/">
            <button className="text-white bg-green-500 hover:bg-green-700 ml-5 rounded-lg p-2">
              Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Error;
