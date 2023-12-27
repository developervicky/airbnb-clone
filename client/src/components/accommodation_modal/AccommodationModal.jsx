import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import BasicInfoContainer from "./BasicInfoContainer";
import PhotoContainer from "./PhotoContainer";
import AccommodationInfoContainer from "./AccommodationInfoContainer";
import ExtraInfoConatainer from "./ExtraInfoContainer";
import axios from "axios";
import { Toastify } from "../../common/toastify/Toastify";

export default function AccommodationModal() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [addedPhoto, setAddedPhoto] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [maxGuests, setMaxGuests] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [beds, setBeds] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const saveAccommodation = async (e) => {
    const accInfo = {
      title,
      address,
      country,
      state,
      city,
      description,
      photoLink,
      addedPhoto,
      amenities,
      maxGuests,
      bedrooms,
      beds,
      bathrooms,
      checkIn,
      checkOut,
      extraInfo,
      price,
    };
    e.preventDefault();
    try {
      if (id) {
        await axios.put("/accommodation", { id, ...accInfo });
        navigate("/account/accommodations");
      } else {
        await axios.post("/accommodation", accInfo);
        navigate("/account/accommodations");
      }
    } catch (error) {
      Toastify("fail", "Fill the form");
      console.log(error);
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/user/${id}`).then((res) => {
      const { data } = res;
      setTitle(data.title);
      setAddress(data.address);
      setCountry(data.country);
      setState(data.state);
      setCity(data.city);
      setDescription(data.description);
      setAddedPhoto(data.photos);
      setAmenities(data.amenities);
      setMaxGuests(data.maxGuests);
      setBedrooms(data.bedrooms);
      setBeds(data.beds);
      setBathrooms(data.bathrooms);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setPrice(data.price);
      setExtraInfo(data.extraInfo);
    });
  }, [id]);

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
          <form onSubmit={saveAccommodation} className="flex flex-col gap-4">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
              <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                <div className="mt-3 text-center sm:ml-2 sm:mt-0 sm:text-left">
                  <div className="absolute top-6 right-6 md:right-6">
                    <Link
                      to={
                        !id
                          ? "/account/accommodations/"
                          : `/account/accommodations/user/${id}`
                      }
                    >
                      <AiOutlineCloseCircle
                        type="button"
                        className="text-2xl md:text-3xl hover:text-white hover:bg-primary hover:rounded-full"
                      />
                    </Link>
                  </div>
                  <div className="mx-auto pt-6">
                    <h1
                      className="text-lg md:text-2xl pt-2 font-bold leading-6 tracking-wider text-gray-900"
                      id="modal-title"
                    >
                      Post your Accommodation Info
                    </h1>
                  </div>
                  <BasicInfoContainer
                    title={title}
                    setTitle={setTitle}
                    address={address}
                    setAddress={setAddress}
                    country={country}
                    setCountry={setCountry}
                    state={state}
                    setState={setState}
                    city={city}
                    setCity={setCity}
                    description={description}
                    setDescription={setDescription}
                  />
                  <PhotoContainer
                    photoLink={photoLink}
                    setPhotoLink={setPhotoLink}
                    addedPhoto={addedPhoto}
                    setAddedPhoto={setAddedPhoto}
                  />
                  <AccommodationInfoContainer
                    amenities={amenities}
                    setAmenities={setAmenities}
                    maxGuests={maxGuests}
                    setMaxGuests={setMaxGuests}
                    bedrooms={bedrooms}
                    setBedrooms={setBedrooms}
                    beds={beds}
                    setBeds={setBeds}
                    bathrooms={bathrooms}
                    setBathrooms={setBathrooms}
                    checkIn={checkIn}
                    setCheckIn={setCheckIn}
                    checkOut={checkOut}
                    setCheckOut={setCheckOut}
                    price={price}
                    setPrice={setPrice}
                  />
                  <ExtraInfoConatainer
                    extraInfo={extraInfo}
                    setExtraInfo={setExtraInfo}
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 pb-5 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
