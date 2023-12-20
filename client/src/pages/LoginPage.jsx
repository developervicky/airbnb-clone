import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Toastify } from "../common/toastify/Toastify.jsx";
import { UserContext } from "../components/UserContext.jsx";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const { user, setUser } = useContext(UserContext);
  if (user) {
    return <Navigate to={"/"} />;
  }
  const signinUser = async (e) => {
    e.preventDefault();
    try {
      await axios
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
      <form className="flex flex-col gap-4" onSubmit={signinUser}>
        <div className="">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="border-2 w-full font-medium tracking-wider font-medium rounded-full px-4 py-3 focus:outline-none "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <div className="flex flex-row items-center border-2 rounded-full ps-0 pe-2 py-0">
            <input
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              type={hidePassword ? "password" : "text"}
              className=" w-full font-medium font-medium tracking-wider rounded-full px-4 py-3 focus:outline-none"
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
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                style={{ color: !hidePassword ? "#17A191" : "#c3c3c3" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
          </div>
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
          {" "}
          Signup
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
