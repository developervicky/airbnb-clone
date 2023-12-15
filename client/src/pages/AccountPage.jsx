import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
function AccountPage() {
  const { ready, user } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage == undefined) {
    subpage = "account";
  }
  console.log(subpage);

  if (!ready) {
    return (
      <div className="flex h-96 justify-center items-end">
        <RiseLoader color="#FE385D" />
      </div>
    );
  }

  if (!user && ready) {
    return <Navigate to={"/signin"} />;
  }

  const topbarStyle = (type) => {
    let classes = "px-7 py-4 font-semibold tracking-wider";
    if (type === subpage) {
      classes += " bg-primary rounded-full text-white";
    }
    return classes;
  };

  return (
    <div>
      <nav className="flex justify-around gap-3">
        <Link className={topbarStyle("account")} to={"/account"}>
          Profile
        </Link>
        <Link className={topbarStyle("bookings")} to={"/account/bookings"}>
          Bookings
        </Link>
        <Link
          className={topbarStyle("accommodations")}
          to={"/account/accommodations"}
        >
          Your Accommodations
        </Link>
      </nav>
    </div>
  );
}

export default AccountPage;
