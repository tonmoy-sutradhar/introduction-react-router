import { Outlet } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
const Home = () => {
  return (
    <div className="font">
      <Header></Header>
      <h1>Hello from Home Page</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
