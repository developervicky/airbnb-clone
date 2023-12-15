import React, { useContext, useState } from "react";
import SignupComponent from "../components/SignupComponent";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Toastify } from "../common/toastify/Toastify.jsx";
import { UserContext } from "../components/UserContext.jsx";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUser } = useContext(UserContext);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("/register", {
          name,
          email,
          password,
        })
        .then(({ data }) => {
          setUser(data);
        });
      setRedirect(true);
      Toastify("success", "Account Created!");
    } catch (e) {
      Toastify("fail", "Cannot Create an Account!");
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
        Signup
      </div>
      <form className="flex flex-col" onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button className="border-2  w-96 px-4 py-3 mt-3 font-semibold tracking-widest rounded-full  hover:border-primary hover:bg-primary hover:text-white">
          Signup
        </button>
      </form>
      <div>
        Already having a account!{" "}
        <Link
          to="/signin"
          className="tracking-wider underline underline-offset-4 decoration-primary hover:font-semibold hover:text-primary"
        >
          {" "}
          Signin
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
