import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>This is User page👨‍👨‍👧 {users.length}</h1>

      <div className="users-c">
        {users.map((u) => (
          <User key={u.id} user={u}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
