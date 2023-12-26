import { useContext, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import { UserContext } from "../UserContext";
import axios from "axios";
import { Toastify } from "../../common/toastify/Toastify";
import { Navigate } from "react-router-dom";

export default function AccBooking({ place }) {
  const { user } = useContext(UserContext);
  const [checkinDate, setCheckInDate] = useState();
  const [checkoutDate, setCheckOutDate] = useState();
  const [noGuests, setNoGuests] = useState(1);
  const [noRooms, setNoRooms] = useState(1);
  const [fullName, setFullName] = useState(
    user ? user.fname + " " + user.lname : ""
  );
  const [email, setEmail] = useState(user ? user.email : "");
  const [phone, setPhone] = useState();
  const [redirect, setRedirect] = useState("");

  let numberOfNights = 0;
  if (checkinDate && checkoutDate) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkoutDate),
      new Date(checkinDate)
    );
  }

  let price = numberOfNights * place.price * noRooms;

  const bookAcc = async () => {
    try {
      const response = await axios.post("/bookings", {
        checkinDate,
        checkoutDate,
        noGuests,
        noRooms,
        fullName,
        email,
        phone,
        place: place._id,
        ownerId: place.ownerId,
        price: price,
      });
      const bookingId = response.data._id;
      setRedirect(`/account/bookings`);
    } catch (error) {
      return error;
    }
  };
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      <div className=" flex  w-min items-start justify-center lg:sticky lg:top-24 py-5 md:pt-10 md:pb-2 md:px-4 lg:px-2 xl:p-10">
        <div className="flex flex-col justify-start border-2 px-3 py-4 md:px-10 md:py-4 lg:px-5 lg:py-8 gap-6 rounded-2xl shadow-xl">
          <h1 className="text-2xl text-primary font-bold tracking-wider ">
            &#8377;{place.price}/night
          </h1>
          <div className=" flex flex-col border-2 border-primary rounded-2xl">
            <div className="flex border-b-2 border-primary  ">
              <div className=" border-r-2 border-primary p-5 md:pl-6 md:pr-24 lg:p-5">
                <label className="flex flex-col tracking-wide gap-2 font-semibold cursor-pointer">
                  Check-In
                  <input
                    type="date"
                    className="font-medium"
                    value={checkinDate}
                    onChange={(e) => {
                      setCheckInDate(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="p-5 md:pl-6 md:pr-24 lg:p-5">
                <label className="flex flex-col tracking-wide gap-2 font-semibold cursor-pointer">
                  Check-Out
                  <input
                    type="date"
                    className="font-medium "
                    value={checkoutDate}
                    onChange={(e) => {
                      setCheckOutDate(e.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-5">
              <label className="flex flex-col tracking-wide gap-2  font-semibold cursor-pointer">
                No of Guests
                <input
                  type="number"
                  value={noGuests}
                  onChange={(e) => {
                    setNoGuests(e.target.value);
                  }}
                  className="font-medium border-2 rounded-2xl p-2 outline-none hover:border-primary focus:border-primary  "
                />
              </label>
              <label className="flex flex-col tracking-wide gap-2  font-semibold cursor-pointer">
                No of Rooms
                <input
                  type="number"
                  value={noRooms}
                  onChange={(e) => {
                    setNoRooms(e.target.value);
                  }}
                  className="font-medium border-2 rounded-2xl p-2 outline-none hover:border-primary focus:border-primary  "
                />
              </label>
            </div>
            {user && numberOfNights > 0 && (
              <div className="p-5 border-primary flex flex-col gap-4 border-t-2">
                <label className="flex flex-col tracking-wide gap-2  font-semibold cursor-pointer">
                  Full Name
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    className="font-medium border-2 rounded-2xl p-2 tracking-wide outline-none hover:border-primary focus:border-primary  "
                  />
                </label>
                <label className="flex flex-col tracking-wide gap-2  font-semibold cursor-pointer">
                  Email
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="font-medium border-2 tracking-wide rounded-2xl p-2 outline-none hover:border-primary focus:border-primary  "
                  />
                </label>
                <label className="flex flex-col tracking-wide gap-2  font-semibold cursor-pointer">
                  Phone Number
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="font-medium border-2 tracking-wide rounded-2xl p-2 outline-none hover:border-primary focus:border-primary  "
                  />
                </label>
              </div>
            )}
          </div>
          <button
            onClick={
              user ? () => bookAcc() : () => Toastify("fail", "Login to Book")
            }
            className="border-2 p-4 font-bold tracking-wide rounded-2xl bg-primary text-white"
          >
            Book your Room {numberOfNights > 0 && <span>(&#8377;{price})</span>}
          </button>
        </div>
      </div>
    </>
  );
}
