import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function AddPlace() {
  return (
    <Link
      to={"/account/accommodations/new"}
      className="flex flex-col items-center  gap-3 border-2 p-16 rounded-3xl cursor-pointer font-semibold  hover:border-primary hover:bg-primary hover:text-white"

    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>

      <button className="tracking-wide ">Add New Place</button>
    </Link>
  );
}

export default AddPlace;
