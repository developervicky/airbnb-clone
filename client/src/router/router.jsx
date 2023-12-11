import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

export default router;
