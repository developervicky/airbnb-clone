import React from "react";
import ReactDOM from "react-dom/client";
import router from "./src/router/router.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContextProvider } from "./src/components/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserContextProvider>
  </React.StrictMode>
);
