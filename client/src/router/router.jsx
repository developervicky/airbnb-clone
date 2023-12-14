import React from "react";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Layout from "../Layout/Layout";
import axios from "axios";
import AccountPage from "../pages/AccountPage";
import BookingPage from "../pages/BookingPage";
import AccommodationPage from "../pages/AccommodationPage";
import AccountLayout from "../Layout/AccountLayout";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Homepage />} />
      <Route path="signin" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="/account" element={<AccountLayout />}>
        <Route index element={<AccountPage />} />
        <Route path="bookings" element={<BookingPage />} />
        <Route path="accommodations" element={<AccommodationPage />} />
      </Route>
    </Route>
  )
);

export default router;
