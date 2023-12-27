import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import { Link, useParams } from "react-router-dom";
import { format, differenceInCalendarDays } from "date-fns";
import { FaLongArrowAltRight, FaRegCalendarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { MdNightsStay } from "react-icons/md";

function BookingPage() {
  const [bookings, setBookings] = useState([]);
  const [accBookings, setAccBookings] = useState([]);
  // const [pageName, setpageName] = useState("");
  // const [bookersID, setBookersID] = useState();

  // const { user } = useContext(UserContext);
  const { subpage } = useParams();

  useEffect(() => {
    axios.get("/api/bookings").then((res) => {
      setBookings(res.data);
    });
    axios.get("/api/accbookings").then((res) => {
      setAccBookings(res.data);
    });
  }, [subpage]);

  // console.log(bookings);

  return (
    <div className="flex grid sm:grid-cols-1 md:grid-cols-2 gap-8 grow">
      <div className="">
        <h1 className="text-xl font-bold tracking-wider">My Bookings</h1>
        <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-5 py-5">
          {bookings?.length > 0 &&
            bookings.map((booking) => (
              <Link
                key={booking._id}
                to={`user/${booking._id}`}
                className="flex flex-col  gap-2 border-2 border-primary p-3 rounded-xl text-gray-600 cursor-pointer shadow-lg shadow-gray-300 hover:bg-primary hover:text-white"
              >
                <h1 className="font-semibold tracking-wide truncate">
                  {booking.place.title}
                </h1>
                <p className="tracking-wide ">
                  <span className="font-semibold ">Name: </span>
                  <span>{booking.fullName}</span>
                </p>
                <p className="flex gap-2 tracking-wide  items-center">
                  <FaRegCalendarAlt />
                  {format(new Date(booking.checkinDate), "dd-MM-yyyy")}
                  <FaLongArrowAltRight />
                  {format(new Date(booking.checkoutDate), "dd-MM-yyyy")}
                </p>
                <p className="flex gap-2 tracking-wide items-center">
                  <MdNightsStay />
                  {differenceInCalendarDays(
                    new Date(booking.checkoutDate),
                    new Date(booking.checkinDate)
                  )}{" "}
                  Nights
                </p>
                <div className="flex gap-2 tracking-wide items-center">
                  <FaCreditCard />
                  <p className="tracking-wide">&#8377;{booking.price}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-wider">
          My Accommodation Bookings
        </h1>
        <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-5 py-5">
          {accBookings?.length > 0 &&
            accBookings.map((booking) => (
              <Link
                key={booking._id}
                to={`admin/${booking._id}`}
                className="flex flex-col  gap-2 border-2 border-primary p-3 text-gray-600 rounded-xl cursor-pointer shadow-lg shadow-gray-300 hover:bg-primary hover:text-white"
              >
                <h1 className="font-semibold tracking-wide truncate">
                  {booking.place?.title}
                </h1>
                <p className="tracking-wide">
                  <span className="font-semibold ">Name: </span>
                  {booking.fullName}
                </p>
                <p className="flex gap-2 tracking-wide items-center">
                  <FaRegCalendarAlt />
                  {format(new Date(booking.checkinDate), "dd-MM-yyyy")}
                  <FaLongArrowAltRight />
                  {format(new Date(booking.checkoutDate), "dd-MM-yyyy")}
                </p>
                <p className="flex gap-2 tracking-wide items-center">
                  <MdNightsStay />
                  {differenceInCalendarDays(
                    new Date(booking.checkoutDate),
                    new Date(booking.checkinDate)
                  )}{" "}
                  Nights
                </p>
                <div className="flex gap-2 tracking-wide items-center">
                  <FaCreditCard />
                  <p className="tracking-wide">&#8377;{booking.price}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
