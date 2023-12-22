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
import AccountPage from "../pages/AccountPage";
import EmailVerify from "../common/EmailVerify/EmailVerify";
import UserAccommodationPage from "../pages/UserAccommodationPage";
import ErrorPage from "../pages/ErrorPage";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Homepage />} />
      <Route path="signin" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="/account/:subpage?" element={<AccountPage />} />
      <Route path="/account/:subpage/:action" element={<AccountPage />} />
      <Route
        path="/account/:subpage/:action/:id"
        element={<UserAccommodationPage />}
      />
      <Route path="error" element={<ErrorPage />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
    </Route>
  )
);

export default router;
