import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
import AccommodationPage from "./AccommodationPage";
import ProfilePage from "./ProfilePage";
import BookingPage from "./BookingPage";

function AccountPage() {
  const { ready, user } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage == undefined) {
    subpage = "profile";
  }
  console.log(subpage);

  if (!ready) {
    return (
      <div className="flex h-96 justify-center items-end">
        <RiseLoader color="#17A191" />
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
    <div className="w-3/4 mx-auto flex flex-col  ">
      <nav className="flex justify-between mb-12 gap-3">
        <Link className={topbarStyle("profile")} to={"/account/profile"}>
          Profile
        </Link>
        <Link className={topbarStyle("bookings")} to={"/account/bookings"}>
          Bookings
        </Link>
        <Link
          className={topbarStyle("accommodations")}
          to={"/account/accommodations"}
        >
          Your Own Accommodations
        </Link>
      </nav>
      {subpage === "profile" && <ProfilePage />}
      {subpage === "bookings" && <BookingPage />}
      {subpage === "accommodations" && <AccommodationPage />}
    </div>
  );
}

export default AccountPage;
