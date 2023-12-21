import { useState } from "react";
import { TbTrees } from "react-icons/tb";
import { FaWifi, FaCarSide } from "react-icons/fa";
import { MdPool, MdOutlinePets } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";

export default function AccommodationInfoContainer() {
  const [amenities, setAmenities] = useState([]);
  const [maxGuests, setMaxGuests] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [beds, setBeds] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleAmenities = (ev) => {
    const { name, checked } = ev.target;
    console.log(name, checked);
    if (checked) {
      setAmenities([...amenities, name]);
    } else {
      setAmenities([...amenities.filter((selected) => selected !== name)]);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-2 pb-6 border-b-2">
      <h2 className="text-lg tracking-wider font-semibold">
        Accommodation Info
      </h2>
      <h2 className="text-md tracking-wider font-semibold">Amenities</h2>
      <div className="grid grid-cols-4 gap-3">
        <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
          <input type="checkbox" onChange={handleAmenities} name="wifi" />
          <FaWifi className="text-2xl" />
          <h2 className="font-medium tracking-wider text-gray-500">Wi-fi</h2>
        </label>
        <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
          <input
            type="checkbox"
            onChange={handleAmenities}
            name="free-parking"
          />
          <FaCarSide className="text-2xl " />
          <h2 className="font-medium tracking-wider text-gray-500">
            Free Parking
          </h2>
        </label>
        <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
          <input type="checkbox" onChange={handleAmenities} name="tv" />
          <PiTelevisionBold className="text-2xl" />
          <h2 className="font-medium tracking-wider text-gray-500">TV</h2>
        </label>
        <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
          <input
            type="checkbox"
            onChange={handleAmenities}
            name="garden-view"
          />
          <TbTrees className="text-2xl" />
          <h2 className="font-medium tracking-wider text-gray-500">
            Garden View
          </h2>
        </label>
        <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
          <input
            type="checkbox"
            onChange={handleAmenities}
            name="pool-facility"
          />
          <MdPool className="text-2xl" />
          <h2 className="font-medium tracking-wider text-gray-500">
            Pool Facility
          </h2>
        </label>
        <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
          <input
            type="checkbox"
            onChange={handleAmenities}
            name="pets-allowed"
          />
          <MdOutlinePets className="text-2xl" />
          <h2 className="font-medium tracking-wider text-gray-500">
            Pets Allowed
          </h2>
        </label>
      </div>
      <h2 className="text-md tracking-wider font-semibold">Room Info</h2>
      <div className="grid grid-cols-3 gap-3">
        <input
          type="number"
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
          placeholder="Max Guests (per room)"
          className="flex flex-row items-center text-md rounded-lg gap-4 border-2 p-4 cursor-pointer focus:outline-none hover:border-primary focus:border-primary"
        />
        <input
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          placeholder="No of Bedrooms (per room)"
          className="flex flex-row items-center rounded-lg gap-4 border-2 p-4 cursor-pointer focus:outline-none hover:border-primary focus:border-primary"
        />
        <input
          type="number"
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          placeholder="No of Beds (per room)"
          className="flex flex-row items-center rounded-lg gap-4 border-2 p-4 cursor-pointer focus:outline-none hover:border-primary focus:border-primary"
        />
        <input
          type="number"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          placeholder="No of Bathrooms (per room)"
          className="flex flex-row items-center rounded-lg gap-4 border-2 p-4 cursor-pointer focus:outline-none hover:border-primary focus:border-primary"
        />
      </div>
      <h2 className="text-md tracking-wider font-semibold">Guests Info</h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="tracking-wider">Checkin Time</h2>
          <input
            type="time"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full flex flex-row items-center rounded-lg gap-4 border-2 p-4 cursor-pointer focus:outline-none hover:border-primary focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="tracking-wider">Checkout Time</h2>
          <input
            type="time"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full flex flex-row items-center rounded-lg gap-4 border-2 p-4 cursor-pointer focus:outline-none hover:border-primary focus:border-primary"
          />
        </div>
      </div>
    </div>
  );
}
