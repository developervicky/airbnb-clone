import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { format, differenceInCalendarDays } from "date-fns";
import AccTitle from "../components/accommodation_containers/AccTitle";
import AccPhotos from "../components/accommodation_containers/AccPhotos";
import { FaLongArrowAltRight, FaRegCalendarAlt } from "react-icons/fa";
import { IoPeopleSharp,} from "react-icons/io5";
import { MdEmail, MdOutlinePhone, MdNightsStay } from "react-icons/md";
import AccAmenities from "../components/accommodation_containers/AccAmenities";
import { UserContext } from "../components/UserContext";
import LoadingPage from "./LoadingPage";
import ImageCarousel from "../common/ImageCarousel";

export default function UserBookingPage() {
  const [bookingData, setBookingData] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { windowSize } = useContext(UserContext);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`/api/bookings/${id}`).then(({ data }) => {
      setBookingData(data);
    });
  }, [id]);

  let numberOfNights = 0;

  if (bookingData.checkinDate && bookingData.checkoutDate) {
    numberOfNights = differenceInCalendarDays(
      new Date(bookingData.checkoutDate),
      new Date(bookingData.checkinDate)
    );
  }

  const delBooking = async () => {
    try {
      await axios.delete(`/api/bookings/user/${id}`).then(({ data }) => {
        console.log(data);
        setRedirect(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    return <Navigate to={"/account/bookings/"} />;
  }

  if (showPhotos) {
    return <ImageCarousel setShowPhotos={setShowPhotos} place={bookingData.place} />;
  }

  return (
    <>
      {id == bookingData._id ? (
        <div className="flex flex-col gap-2 py-8  mx-auto w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12  ">
          <AccTitle place={bookingData.place} />
          <AccPhotos place={bookingData.place} setShowPhotos={setShowPhotos} />
          <div className="flex flex-col gap-2 border-2 mt-4 p-4 rounded-2xl shadow-lg ">
            <h1 className="text-xl md:text-2xl truncate font-medium tracking-wide border-b-2 border-primary pb-2">
              Booking Information
            </h1>
            <div className="flex flex-col gap-5 md:gap-2 md:flex-row justify-around tracking-wide text-xl g text-gray-500  py-4">
              <p className="flex flex-col md:flex-row text-base md:text-xl gap-2 md:items-center  ">
                <FaRegCalendarAlt className="text-primary" />{" "}
                <div>
                  {format(new Date(bookingData.checkinDate), "MMM d, yyyy ")}(
                  {bookingData.place?.checkIn}
                  {bookingData.checkIn >= "12:00" ? " PM" : " AM"})
                </div>
                {windowSize[0] > 425 && <FaLongArrowAltRight />}{" "}
                <div>
                  {format(new Date(bookingData.checkoutDate), "MMM d, yyyy ")}(
                  {bookingData.place?.checkOut}
                  {bookingData.checkOut >= "12:00" ? " PM" : " AM"})
                </div>
              </p>
              <p className="flex text-base md:text-xl gap-2 items-center  ">
                <MdNightsStay className="text-primary" />
                {numberOfNights} Nights
              </p>
            </div>
          </div>
          <div className="flex flex-col truncate gap-2 border-2 mt-4 p-4 rounded-2xl shadow-lg ">
            <h1 className="text-xl md:text-2xl font-medium tracking-wide border-b-2 border-primary pb-2">
              Guest Information
            </h1>
            <div className="flex md:text-xl  gap-2 flex-col  md:flex-row md:justify-around tracking-wide text-gray-500 py-4">
              <div className="flex  gap-2 items-center ">
                <p>{bookingData.fullName}</p>
              </div>
              <p className="flex gap-3 items-center ">
                <IoPeopleSharp className="text-primary" />
                {bookingData.noGuests}{" "}
                {bookingData.noGuests > 1 ? "Guests" : "Guest"}
              </p>
            </div>
            <div className="flex md:text-xl gap-2 flex-col truncate  md:flex-row md:justify-around tracking-wide text-gray-500 ">
              <div className="flex gap-3  whitespace-pre items-center  ">
                <MdEmail className=" text-primary" />
                {bookingData.email}
              </div>
              <p className="flex gap-3 items-center ">
                <MdOutlinePhone className="text-primary" /> {bookingData.phone}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-2 truncate mt-4 p-4 rounded-2xl shadow-lg ">
            <h1 className="text-xl md:text-2xl font-medium tracking-wide border-b-2 border-primary pb-2">
              Accommodation Information
            </h1>
            <div className="px-20">
              <AccAmenities place={bookingData?.place} />
            </div>
          </div>
          <div className="flex flex-col gap-2 border-2 mt-4 p-4 truncate  rounded-2xl shadow-lg ">
            <h1 className="text-xl md:text-2xl font-medium tracking-wide border-b-2 border-primary pb-2">
              Payment Information
            </h1>
            <div className="flex flex-col   md:text-xl  gap-2 sm:flex-row tracking-wide justify-between px-4 md:items-center text-gray-500 border-b-2  py-4">
              <div className="flex flex-col sm:flex-row md:gap-3  ">
                <span>
                  {bookingData.noRooms}
                  {bookingData.noRooms > 1 ? "Rooms" : "Room"}
                </span>
                <span>&#10006;</span>
                <span>
                  {numberOfNights}
                  {numberOfNights > 1 ? "Nights" : "Night"}
                </span>
                <span>&#10006;</span>
                <span>&#8377;{bookingData.place?.price}/room</span>
              </div>
              <p className="flex ">
                <span className="flex grow justify-end">
                  &#8377;{bookingData.price}
                </span>
              </p>
            </div>
            <div className="flex text-base md:text-xl  gap-2 flex-row tracking-wide justify-between px-4 items-center text-gray-500  py-2">
              <p className="flex gap-3 ">Total Charge</p>
              <p>
                <span>&#8377;{bookingData.price}</span>
              </p>
            </div>
            <div className="flex text-base md:text-xl gap-2 flex-row tracking-wide justify-start px-4 items-center text-gray-500  pb-2">
              <p className="flex gap-3 ">Payment Method: Cash</p>
            </div>
          </div>
          <div className="flex flex-row-reverse p-3">
            <button
              onClick={() => delBooking()}
              className="border-2 px-4 py-2 rounded-xl bg-caution text-white tracking-wide border-caution hover:bg-cautionl"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
