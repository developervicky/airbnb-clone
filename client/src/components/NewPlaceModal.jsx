import { Link } from "react-router-dom";
import { TbTrees } from "react-icons/tb";
import { FaWifi, FaCarSide } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { MdPool, MdOutlinePets } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PiTelevisionBold } from "react-icons/pi";
import { useState } from "react";
import axios from "axios";

export default function NewPlaceModal() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [addedPhoto, setAddedPhoto] = useState([]);
  const [amenities, setAmenities] = useState([""]);
  const [maxGuests, setMaxGuests] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [beds, setBeds] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  const uploadPhotoByLink = async (e) => {
    e.preventDefault();
    const { data: newname } = await axios.post("/uploads_link", { photoLink });
    console.log(newname);
    setAddedPhoto((prev) => {
      return [...prev, newname];
    });
    setPhotoLink("");
    console.log(addedPhoto);
  };

  const uploadPhoto = (ev) => {
    // console.log(ev.target.files);
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
      // console.log(data);
    }
    axios
      .post("/uploads", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => {
        const { data: filenames } = res;
        console.log(filenames);
        setAddedPhoto((prev) => {
          return [...prev, ...filenames];
        });
      });
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center md:p-6 sm:items-center sm:p-6">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              <div className="mt-3 text-center sm:ml-2 sm:mt-0 sm:text-left">
                <div className="flex flex-row justify-between">
                  <h1
                    className="text-2xl pt-2 font-bold leading-6 tracking-wider text-gray-900"
                    id="modal-title"
                  >
                    Post your Accommodation Info
                  </h1>
                  <Link to={"/account/accommodations/"}>
                    <AiOutlineCloseCircle
                      type="button"
                      className="text-3xl hover:text-white hover:bg-primary hover:rounded-full"
                    />
                  </Link>
                </div>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 mt-4 p-2 pb-6 border-b-2">
                    <h2 className="text-lg tracking-wider font-semibold">
                      Basic Info
                    </h2>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title of your place"
                      className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                    />
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                    />
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Country"
                        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                      />
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="State"
                        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                      />
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                      />
                    </div>
                    <textarea
                      placeholder="Description of your accommodation"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-2 pb-6 border-b-2">
                    <h2 className="text-lg tracking-wider font-semibold">
                      Photos
                    </h2>
                    <div className="flex flex-row items-center pr-2 border-2 rounded-xl">
                      <input
                        type="text"
                        value={photoLink}
                        onChange={(e) => setPhotoLink(e.target.value)}
                        placeholder="Enter the URL"
                        className="w-full  p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                      />
                      <button>
                        <FiPlusCircle
                          onClick={uploadPhotoByLink}
                          className="text-2xl text-gray-400 hover:text-primary"
                        />
                      </button>
                    </div>
                    <div className="grid gap-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 ">
                      <label className="h-32 flex flex-col items-center justify-center gap-2 border-2  p-5 rounded-xl cursor-pointer hover:border-primary ">
                        <input
                          type="file"
                          multiple
                          onChange={uploadPhoto}
                          className="hidden"
                        />
                        <IoCloudUploadOutline className="text-2xl text-gray-400" />
                        <div className="font-medium tracking-wider text-gray-400 ">
                          Upload Photo
                        </div>
                      </label>
                      {addedPhoto.length > 0 &&
                        addedPhoto.map((link) => (
                          <div key={link} >
                            <img
                              src={"http://localhost:5000/uploads/" + link}
                              alt={link}
                              className=" border-2 h-32 w-full rounded-xl object-cover hover:border-primary "
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-2 pb-6 border-b-2">
                    <h2 className="text-lg tracking-wider font-semibold">
                      Accommodation Info
                    </h2>
                    <h2 className="text-md tracking-wider font-semibold">
                      Amenities
                    </h2>
                    <div className="grid grid-cols-4 gap-3">
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
                        <input type="checkbox" />
                        <FaWifi className="text-2xl" />
                        <h2 className="font-medium tracking-wider text-gray-500">
                          Wi-fi
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
                        <input type="checkbox" />
                        <FaCarSide className="text-2xl " />
                        <h2 className="font-medium tracking-wider text-gray-500">
                          Free Parking
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
                        <input type="checkbox" />
                        <PiTelevisionBold className="text-2xl" />
                        <h2 className="font-medium tracking-wider text-gray-500">
                          TV
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
                        <input type="checkbox" />
                        <TbTrees className="text-2xl" />
                        <h2 className="font-medium tracking-wider text-gray-500">
                          Garden View
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
                        <input type="checkbox" />
                        <MdPool className="text-2xl" />
                        <h2 className="font-medium tracking-wider text-gray-500">
                          Pool Facility
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer hover:border-primary">
                        <input type="checkbox" />
                        <MdOutlinePets className="text-2xl" />
                        <h2 className="font-medium tracking-wider text-gray-500">
                          Pets Allowed
                        </h2>
                      </label>
                    </div>
                    <h2 className="text-md tracking-wider font-semibold">
                      Room Info
                    </h2>
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
                    <h2 className="text-md tracking-wider font-semibold">
                      Guests Info
                    </h2>
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
                  <div className="flex flex-col gap-4 p-2 pb-6 border-b-2">
                    <h2 className="text-lg tracking-wider font-semibold">
                      Extra Info
                    </h2>
                    <textarea
                      placeholder="Any Extra Information of your place for the users"
                      value={extraInfo}
                      onChange={(e) => setExtraInfo(e.target.value)}
                      className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 pb-5 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
