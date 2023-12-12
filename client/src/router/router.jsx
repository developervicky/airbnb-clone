import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Layout from "../Layout/Layout";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Homepage />} />
      <Route path="signin" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </Route>
  )
);

export default router;
