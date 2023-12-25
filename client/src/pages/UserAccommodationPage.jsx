import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TbTrees, TbUserEdit } from "react-icons/tb";
import AccommodationModal from "../components/accommodation_modal/AccommodationModal";
import { UserContext } from "../components/UserContext";
import LoadingPage from "./LoadingPage";
import { GrMapLocation } from "react-icons/gr";
import { LuDot } from "react-icons/lu";
import { FaCarSide, FaWifi } from "react-icons/fa";
import { PiTelevisionBold } from "react-icons/pi";
import { MdOutlinePhotoLibrary, MdPool } from "react-icons/md";

function UserAccommodationPage() {
  const [place, setplace] = useState([]);
  const { action, id } = useParams();

  const { user } = useContext(UserContext);

  useEffect(() => {
    try {
      axios.get(`/user/${id}`).then(({ data }) => {
        setplace(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return (
    <>
      {id == place._id ? (
        <div className=" flex flex-col grow ">
          <div className="flex flex-col gap-2 py-8  mx-auto w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12  ">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-medium tracking-wide">
                {place.title}
              </h2>
              {!user ||
                (user._id == place.ownerId && (
                  <Link
                    to={`/account/accommodations/useredit/${id}`}
                    className="text-2xl border-2 border-black p-2 rounded-full hover:text-white hover:bg-primary hover:border-white"
                  >
                    <TbUserEdit className="" />
                  </Link>
                ))}
            </div>
            <div className="flex gap-2 items-center w-fit  tracking-wide">
              <GrMapLocation />
              <a
                target="_blank"
                rel="noreferrer"
                href={
                  "https://map.google.com/?q=" +
                  place.city +
                  "/" +
                  place.country
                }
                className="underline  "
              >
                {place.city}, {place.country}
              </a>
            </div>
            <div className=" relative pt-7">
              {place.photos[0] && (
                <div className=" grid grid-cols-[2fr_1fr] gap-2 overflow-hidden rounded-3xl ">
                  <div>
                    <img
                      src={"http://localhost:5000/uploads/" + place.photos[0]}
                      alt="plcImg"
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="grid ">
                    <img
                      src={"http://localhost:5000/uploads/" + place.photos[1]}
                      alt="plcImg"
                      className="aspect-square object-cover"
                    />
                    <img
                      src={"http://localhost:5000/uploads/" + place.photos[2]}
                      alt="plcImg"
                      className="aspect-square object-cover relative top-2"
                    />
                  </div>
                </div>
              )}
              <Link className="absolute flex gap-3 items-center bottom-4 right-4 bg-gray-300 bg-opacity-75 p-4 rounded-xl  hover:bg-primary hover:bg-opacity-75 hover:text-white">
                <MdOutlinePhotoLibrary className="text-xl" />
                <p>See more</p>
              </Link>
            </div>
            <div className="flex flex-col flex-col-reverse items-center gap-3 lg:items-start  lg:grid lg:grid-cols-[2fr_1fr]">
              <div className="flex flex-col py-5">
                <div className="flex flex-col gap-3 py-7 border-b-2 ">
                  <h1 className="font-bold tracking-wide text-lg md:text-xl  xl:text-2xl">
                    Explore in {place.city}, {place.country}
                  </h1>
                  <p className=" tracking-wide leading-8  md:text-lg xl:text-xl ">
                    {place.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3 py-7 border-b-2">
                  <h1 className="  font-bold tracking-wide text-lg md:text-xl  xl:text-2xl">
                    The Place offers
                  </h1>
                  <p className="flex flex-row  gap-1 items-center  tracking-wide md:text-xl lg:text-lg xl:text-xl">
                    <span className="flex items-center">
                      {place.maxGuests} guests <LuDot className=" text-2xl" />
                    </span>
                    <span className="flex items-center">
                      {place.bedrooms} bedrooms <LuDot className=" text-2xl" />
                    </span>
                    <span className="flex items-center">
                      {place.beds} beds <LuDot className=" text-2xl" />
                    </span>
                    <span>{place.bathrooms} bathrooms</span>
                  </p>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center gap-8 pt-5 pb-3 md:text-xl  xl:text-2xl">
                    {place.amenities.map((each) => {
                      if (each == "wifi") {
                        return (
                          <div className="flex flex-row items-center gap-3">
                            <FaWifi className="text-2xl" />
                            <p className="md:text-lg lg:text-xl">Wifi</p>
                          </div>
                        );
                      }
                      if (each == "free-parking") {
                        return (
                          <div className="flex flex-row items-center gap-3">
                            <FaCarSide className="text-2xl" />
                            <p className="md:text-lg lg:text-xl">
                              Free Parking
                            </p>
                          </div>
                        );
                      }
                      if (each == "garden-view") {
                        return (
                          <div className="flex flex-row items-center gap-3">
                            <TbTrees className="text-2xl" />
                            <p className="md:text-lg lg:text-xl">Garden View</p>
                          </div>
                        );
                      }
                      if (each == "pool-facility") {
                        return (
                          <div className="flex flex-row  items-center gap-3">
                            <MdPool className="text-2xl" />
                            <p className="md:text-lg lg:text-xl">
                              Pool Available
                            </p>
                          </div>
                        );
                      }
                      if (each == "tv") {
                        return (
                          <div className="flex flex-row items-center gap-3">
                            <PiTelevisionBold className="text-2xl" />
                            <p className="md:text-lg lg:text-xl">TV</p>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className="flex gap-5 pt-5 font-semibold text-base md:font-bold md:text-xl tracking-wide">
                    <p>
                      Check In:{" "}
                      <span className="font-medium">
                        {place.checkIn}
                        {place.checkIn >= "12:00" ? " PM" : " AM"}
                      </span>
                    </p>
                    <p>
                      Check Out:{" "}
                      <span className="font-medium">
                        {place.checkOut}
                        {place.checkIn >= "12:00" ? " PM" : " AM"}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex w-fit flex-col gap-3 py-7 border-b-2">
                  <h1 className=" font-bold tracking-wide text-lg md:text-xl  xl:text-2xl">
                    Other stuffs to note
                  </h1>
                  <p className="tracking-wide leading-8 md:text-lg xl:text-xl">
                    {place.extraInfo}
                  </p>
                </div>
              </div>
              <div className=" flex  w-min items-start justify-center lg:sticky lg:top-24 py-5 md:pt-10 md:pb-2 md:px-4 lg:px-2 xl:p-10">
                <form
                  action=""
                  className="flex flex-col justify-start border-2 px-3 py-4 md:px-10 md:py-4 lg:px-5 lg:py-8 gap-6 rounded-2xl shadow-xl"
                >
                  <h1 className="text-2xl font-bold tracking-wider">
                    {place.price}/night
                  </h1>
                  <div className=" flex flex-col border-2 border-primary rounded-2xl">
                    <div className="flex border-b-2 border-primary  ">
                      <div className=" border-r-2 border-primary p-5 md:pl-6 md:pr-24 lg:p-5">
                        <label className="flex flex-col tracking-wide gap-2 font-semibold cursor-pointer">
                          Check-In
                          <input type="date" className="font-medium " />
                        </label>
                      </div>
                      <div className="p-5 md:pl-6 md:pr-24 lg:p-5">
                        <label className="flex flex-col tracking-wide gap-2 font-semibold cursor-pointer">
                          Check-Out
                          <input type="date" className="font-medium " />
                        </label>
                      </div>
                    </div>
                    <div className="p-5">
                      <label className="flex flex-col tracking-wide gap-2  font-semibold cursor-pointer">
                        No of Guests
                        <input
                          type="number"
                          className="font-medium border-2 rounded-2xl p-2 outline-none hover:border-primary focus:border-primary  "
                        />
                      </label>
                    </div>
                  </div>
                  <button className="border-2 p-4  font-bold tracking-wide rounded-2xl bg-primary text-white">
                    Book your Room
                  </button>
                </form>
              </div>
            </div>
          </div>
          {action == "useredit" && id == place._id && <AccommodationModal />}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default UserAccommodationPage;
