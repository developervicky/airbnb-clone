import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/UserContext";

function AccountTopbar() {
  const { ready } = useContext(UserContext);
  if (ready) {
    return (
      <div>
        <nav className="flex justify-center gap-3">
          <Link
            className="px-7 py-4 bg-primary rounded-full text-white font-semibold tracking-wider"
            to={"/account"}
          >
            Profile
          </Link>
          <Link
            className="px-7 py-4 font-semibold tracking-wider"
            to={"/account/bookings"}
          >
            Bookings
          </Link>
          <Link
            className="px-5 py-4 font-semibold tracking-wider"
            to={"/account/accommodations"}
          >
            Your Accommodations
          </Link>
        </nav>
      </div>
    );
  }
}

export default AccountTopbar;
