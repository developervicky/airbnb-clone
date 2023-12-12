import React from "react";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <div>
      <div>
        <div>
          <header className="py-6 flex justify-around">
            <a href="/" className="flex items-center gap-2">
              <svg
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
              </svg>
              <span className="text-xl font-bold text-2xl text-primary">
                airbnb
              </span>
            </a>
            <div className="flex border-2 border-gray-200 rounded-full py-2 pr-3 pl-8 gap-3 items-center shadow-md shadow-gray-200">
              <div className="font-semibold tracking-wider">Anywhere</div>
              <div className="text-xl text-gray-300">|</div>
              <div className="font-semibold tracking-wider">Any week</div>
              <div className="text-xl text-gray-300">|</div>
              <div className="font-medium text-gray-400 tracking-wider">
                Add guests
              </div>
              <button className="bg-primary text-white rounded-full p-3">
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
            <Link
              to={"/signin"}
              className="flex border-2 border-gray-200 rounded-full py-2 pr-2 pl-5 gap-3 items-center shadow-md shadow-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#707170"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
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
            </Link>
          </header>
          <div className="border-t pb-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
