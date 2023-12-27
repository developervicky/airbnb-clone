import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Toastify } from "../common/toastify/Toastify.jsx";
import { UserContext } from "../components/UserContext.jsx";

function SignupPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const { setUser, user } = useContext(UserContext);

  if (user) {
    return <Navigate to={"/"} />;
  }

  const handlePassword = (passwordValue) => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length == 5
        ? "Strong"
        : verifiedList.length >= 2
        ? "Medium"
        : "Weak";

    setPassword(passwordValue);
    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);
  };

  const getActiveColor = (type) => {
    if (type === "Strong") return "#8BC926";
    if (type === "Medium") return "#FEBD01";
    return "#FF0054";
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/register", {
        fname,
        lname,
        email,
        password,
      });

      // .then(({ data }) => {
      //   setUser(data);
      // });
      // setRedirect(true);
      Toastify("success", "Verification Email Sent!");
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
    } catch (e) {
      Toastify("fail", "Cannot Create an Account!");
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex flex-col justify-center grow   items-center gap-5 ">
      <div className=" text-3xl font-bold">
        Welcome to
        <span className="text-3xl font-medium text-primary tracking-wider">
          {" "}
          trip<span className="font-bold">R</span>over
        </span>
      </div>
      <div className="text-3xl font-bold underline underline-offset-4 decoration-primary ">
        Signup
      </div>
      <form className="flex flex-col gap-4" onSubmit={registerUser}>
        <input
          type="text"
          placeholder="First Name"
          className=" border-2 focus:outline-none w-full font-medium tracking-wider rounded-full px-4 py-3"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          className=" border-2 focus:outline-none font-medium tracking-wider w-full rounded-full px-4 py-3"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className=" border-2 focus:outline-none font-medium tracking-wider w-full rounded-full px-4 py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="input-container">
          <div className="flex flex-row items-center border-2 rounded-full ps-0 pe-2 py-0 bg-white">
            <input
              value={password}
              onChange={({ target }) => {
                handlePassword(target.value);
              }}
              className=" w-full font-medium rounded-full font-medium tracking-wider px-4 py-3 focus:outline-none"
              type={hidePassword ? "password" : "text"}
              placeholder="Password"
            />

            <a
              href="#"
              onClick={() => {
                setHidePassword(!hidePassword);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                style={{ color: !hidePassword ? "#17A191" : "#c3c3c3" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
            {/* <div className="progress-bg">
              <div
                className="progress"
                style={{
                  width: progress,
                  backgroundColor: getActiveColor(message),
                }}
              ></div>
            </div> */}
          </div>

          {password.length !== 0 ? (
            <p className="px-4 pt-2" style={{ color: getActiveColor(message) }}>
              Your password is {message}
            </p>
          ) : null}
        </div>
        {message == "Strong" ? (
          <div className="flex justify-center items-stretch border-2 rounded-full hover:border-primary hover:bg-primary hover:text-white">
            <button className="border-none w-96 py-3 font-semibold tracking-widest">
              Signup
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-stretch border-2 rounded-full bg-white">
            <button
              className="border-none w-96 py-3 font-semibold tracking-widest"
              disabled
            >
              Signup
            </button>
          </div>
        )}
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
