import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import Users from "./Components/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Header",
        element: <Header></Header>,
      },
      {
        path: "/user",
        element: <Users></Users>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
