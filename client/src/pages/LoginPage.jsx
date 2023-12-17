import React, { useContext, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { Link, Navigate, resolvePath } from "react-router-dom";
import axios from "axios";
import { Toastify } from "../common/toastify/Toastify.jsx";
import { UserContext } from "../components/UserContext.jsx";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, serPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);
  if (user) {
    return <Navigate to={"/"} />;
  }
  const signinUser = async (e) => {
    e.preventDefault();
    try {
      const data = await axios
        .post("/signin", {
          email,
          password,
        })
        .then((res) => {
          if (res.status == 202) {
            console.log(res.status);
            Toastify("fail", `${res.data.message}`);
          } else {
            console.log(res.data);
            setUser(res.data);
            Toastify("success", "Successful Login!");
            setRedirect(true);
          }
        });
    } catch (e) {
      return e;
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex flex-col grow justify-center items-center gap-5 mb-36">
      <div className=" text-3xl font-bold">
        Welcome to
        <span className="text-3xl font-medium text-primary tracking-wider">
          {" "}
          trip<span className="font-bold">R</span>over
        </span>
      </div>
      <div className="text-3xl font-bold underline underline-offset-4 decoration-primary ">
        Login
      </div>
      <form className="flex flex-col items-center gap-4 " onSubmit={signinUser}>
        <div className="border-2 rounded-full ">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="border-2 rounded-full ">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              serPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center items-stretch border-2 rounded-full hover:border-primary hover:bg-primary hover:text-white">
          <button className="border-none w-96 py-3 font-semibold tracking-widest">
            Login
          </button>
        </div>
      </form>
      <div>
        Don't have a account?{" "}
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
