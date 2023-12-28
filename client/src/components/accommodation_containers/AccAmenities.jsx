import { FaCarSide, FaCity, FaWifi } from "react-icons/fa";
import { TbTrees } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import { MdOutlinePets, MdPool } from "react-icons/md";

export default function AccAmenities({ place }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:items-center text-gray-600 gap-8 pt-5 pb-3 tracking-wide md:text-xl  xl:text-2xl">
      {place?.amenities.map((each) => {
        if (each == "wifi") {
          return (
            <div className="flex flex-row items-center gap-3">
              <FaWifi className="text-2xl text-primary" />
              <p className="md:text-lg lg:text-xl">Wifi</p>
            </div>
          );
        }
        if (each == "free-parking") {
          return (
            <div className="flex flex-row items-center gap-3">
              <FaCarSide className="text-2xl text-primary" />
              <p className="md:text-lg lg:text-xl">Free Parking</p>
            </div>
          );
        }
        if (each == "garden-view") {
          return (
            <div className="flex flex-row items-center gap-3">
              <TbTrees className="text-2xl text-primary" />
              <p className="md:text-lg lg:text-xl">Garden View</p>
            </div>
          );
        }
        if (each == "pool-facility") {
          return (
            <div className="flex flex-row  items-center gap-3">
              <MdPool className="text-2xl text-primary" />
              <p className="md:text-lg lg:text-xl">Pool Available</p>
            </div>
          );
        }
        if (each == "tv") {
          return (
            <div className="flex flex-row items-center gap-3">
              <PiTelevisionBold className="text-2xl text-primary" />
              <p className="md:text-lg lg:text-xl">TV</p>
            </div>
          );
        }
        if (each == "city-view") {
          return (
            <div className="flex flex-row items-center gap-3">
              <FaCity className="text-2xl text-primary" />
              <p className="md:text-lg lg:text-xl">City view</p>
            </div>
          );
        }
        if (each == "pets-allowed") {
          return (
            <div className="flex flex-row items-center gap-3">
              <MdOutlinePets className="text-2xl text-primary" />
              <p className="md:text-lg lg:text-xl">Pets allowed</p>
            </div>
          );
        }
      })}
    </div>
  );
}
