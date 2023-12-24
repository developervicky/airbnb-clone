import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AccommodationPage from "./AccommodationPage";
import ProfilePage from "./ProfilePage";
import BookingPage from "./BookingPage";
import LoadingPage from "./LoadingPage";

function AccountPage() {
  const { ready, user } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage == undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return <LoadingPage />;
  }

  if (!user && ready) {
    return <Navigate to={"/signin"} />;
  }

  const topbarStyle = (type) => {
    let classes =
      "text-xl px-7 pb-4 pt-2 font-semibold tracking-wider hover:border-b-2 hover:border-primary hover:text-primary";
    if (type === subpage) {
      classes += " border-b-2 border-primary text-primary";
    }
    return classes;
  };

  return (
    <div className="flex flex-col py-6 grow justify-between  ">
      <div className="w-10/12  mx-auto  ">
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
    </div>
  );
}

export default AccountPage;
