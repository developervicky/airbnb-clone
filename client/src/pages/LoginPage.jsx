import React, { useContext, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Toastify } from "../common/toastify/Toastify.jsx";
import { UserContext } from "../components/UserContext.jsx";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const signinUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/signin", {
        email,
        password,
      });
      setUser(data);
      Toastify("success", "Successful Login!");
      setRedirect(true);
    } catch (e) {
      Toastify("fail", "Wrong Credentials!");
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  
  return (
    <div className="flex flex-col grow justify-center items-center gap-5 mb-36">
      <div className=" text-3xl font-bold">
        Welcome to <span className="text-primary">airbnb!</span>
      </div>
      <div className="text-3xl font-bold underline underline-offset-4 decoration-primary ">
        Login
      </div>
      <form className="flex flex-col items-center " onSubmit={signinUser}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <button className="border-2  w-96 mt-3 px-4 py-3 font-semibold tracking-widest rounded-full hover:border-primary hover:bg-primary hover:text-white">
          Login
        </button>
      </form>
      <div>
        Don't have a account?
        <Link
          to="/signup"
          className="tracking-wider underline underline-offset-4 decoration-primary hover:font-semibold hover:text-primary"
        >
          Signup
        </Link>
      </div>
      {/* <LoginComponent /> */}
    </div>
  );
}

export default LoginPage;
