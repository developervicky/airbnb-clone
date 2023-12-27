import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format, differenceInCalendarDays } from "date-fns";
import AccTitle from "../components/accommodation_containers/AccTitle";
import AccPhotos from "../components/accommodation_containers/AccPhotos";
import { FaLongArrowAltRight, FaRegCalendarAlt } from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { IoPeopleSharp, IoCloseCircle } from "react-icons/io5";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import AccAmenities from "../components/accommodation_containers/AccAmenities";
import { UserContext } from "../components/UserContext";
import Image from "../common/Image";
import LoadingPage from "./LoadingPage";

export default function UserBookingPage() {
  const [bookingData, setBookingData] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);

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

  if (showPhotos) {
    return (
      <>
        <div className="absolute z-50 inset-0  min-w-full min-h-screen ">
          <div className="bg-gray-200 flex flex-col items-center gap-10 px-20 py-24 ">
            <button
              onClick={() => setShowPhotos(false)}
              className="sticky top-10"
            >
              <IoCloseCircle className="text-4xl text-primary " />
            </button>
            {bookingData.place?.photos?.length > 0 &&
              bookingData.place.photos.map((photo) => (
                <div>
                  <Image src={photo} alt="" />
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {id == bookingData._id ? (
        <div className="flex flex-col gap-2 py-8  mx-auto w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12  ">
          <AccTitle place={bookingData.place} />
          <AccPhotos place={bookingData.place} setShowPhotos={setShowPhotos} />
          <div className="flex flex-col gap-2 border-2 mt-4 p-4 rounded-2xl shadow-lg ">
            <h1 className="text-xl md:text-2xl font-medium tracking-wide border-b-2 border-primary pb-2">
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
          <div className="flex flex-col  gap-2 border-2 mt-4 p-4 rounded-2xl shadow-lg ">
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
            <div className="flex md:text-xl  gap-2 flex-col  md:flex-row md:justify-around tracking-wide text-gray-500 ">
              <div className="flex gap-3 items-center ">
                <MdEmail className="text-primary" />
                {bookingData.email}
              </div>
              <p className="flex gap-3 items-center ">
                <MdOutlinePhone className="text-primary" /> {bookingData.phone}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-2 mt-4 p-4 rounded-2xl shadow-lg ">
            <h1 className="text-xl md:text-2xl font-medium tracking-wide border-b-2 border-primary pb-2">
              Accommodation Information
            </h1>
            <div className="px-20">
              <AccAmenities place={bookingData?.place} />
            </div>
          </div>
          <div className="flex flex-col gap-2 border-2 mt-4 p-4  rounded-2xl shadow-lg ">
            <h1 className="text-xl md:text-2xl font-medium tracking-wide border-b-2 border-primary pb-2">
              Payment Information
            </h1>
            <div className="flex  text-base md:text-xl  gap-2 flex-row tracking-wide justify-between px-4 md:items-center text-gray-500 border-b-2  py-4">
              <div className="flex md:gap-3  ">
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
              <p>
                <span>&#8377;{bookingData.price}</span>
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
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
