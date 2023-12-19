import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../components/UserContext";
import { LuLogOut } from "react-icons/lu";
import axios from "axios";
function Topbar() {
  const [redirect, setRedirect] = useState("");

  const { user } = useContext(UserContext);

  const logout = async () => {
    await axios.post("/logout");
    setRedirect("/");
  };

  console.log(redirect);
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="sticky top-0 bg-white">
      <header className="py-6 flex justify-around gap-4">
        <a href="/" className="flex items-center gap-2">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-11 h-11 -rotate-90 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>

          <span className="text-xl font-medium text-2xl text-primary tracking-wider">
            trip<span className="font-bold">R</span>over
          </span>
        </a>
        <div className="flex flex-row justify-between items-center w-96 gap-2 border-2 border-gray-200 rounded-full py-0 pr-3 pl-2 shadow-md shadow-gray-200">
          <input
            type="text"
            placeholder="where the next adventure, fella!"
            className="border-none w-full h-full rounded-full px-4 py-3 font-medium tracking-wider focus:outline-none"
          />
          <button className="bg-primary text-white rounded-full px-3 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="w-4 h-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-row gap-5 ">
          <Link
            to={user ? "/account" : "/signin"}
            className="flex border-2 border-gray-200 rounded-full py-2 px-4  gap-2 font-medium items-center shadow-md shadow-gray-200  hover:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#707170"
              className="w-9 h-9"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            {user ? (
              <div className="font-semibold text-gray-500 tracking-wider ">
                {user.fname}
              </div>
            ) : (
              <div className="font-semibold text-gray-500 tracking-wider ">
                Login
              </div>
            )}
          </Link>
          {user && (
            <Link
              className="flex border-2 border-gray-200 rounded-full py-2 pr-4 pl-5 gap-2 font-medium items-center shadow-md shadow-gray-200 hover:text-white hover:bg-primary"
              onClick={logout}
            >
              <LuLogOut />
            </Link>
          )}
        </div>
      </header>
      <div className="border-t pb-6"></div>
    </div>
  );
}

export default Topbar;
