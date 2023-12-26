
import { LuDot } from "react-icons/lu";

import AccAmenities from "./AccAmenities";

export default function AccInfo({ place }) {
  return (
    <>
      <div className="flex flex-col gap-3 py-7 border-b-2">
        <h1 className="  font-bold tracking-wide text-lg md:text-xl  xl:text-2xl">
          The Place offers
        </h1>
        <p className="flex flex-row  gap-1 items-center text-gray-600  tracking-wide md:text-xl lg:text-lg xl:text-xl">
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
        <AccAmenities place={place} />
        <div className="flex gap-5 pt-5 font-semibold text-gray-600 text-base md:font-bold md:text-xl tracking-wide">
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
