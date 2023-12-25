import { FaCarSide, FaWifi } from "react-icons/fa";
import { TbTrees } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { PiTelevisionBold } from "react-icons/pi";
import { MdPool } from "react-icons/md";

export default function AccInfo({ place }) {
  return (
    <>
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
                  <p className="md:text-lg lg:text-xl">Free Parking</p>
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
                  <p className="md:text-lg lg:text-xl">Pool Available</p>
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
    </>
  );
}
