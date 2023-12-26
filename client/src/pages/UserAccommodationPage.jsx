import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccommodationModal from "../components/accommodation_modal/AccommodationModal";
import LoadingPage from "./LoadingPage";
import { IoCloseCircle } from "react-icons/io5";
import AccTitle from "../components/accommodation_containers/AccTitle";
import AccPhotos from "../components/accommodation_containers/AccPhotos";
import AccDesc from "../components/accommodation_containers/AccDesc";
import AccInfo from "../components/accommodation_containers/AccInfo";

import AccExtraInfo from "../components/accommodation_containers/AccExtraInfo";
import AccBooking from "../components/accommodation_containers/AccBooking";

function UserAccommodationPage() {
  const [place, setplace] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);
  const { action, id } = useParams();

  useEffect(() => {
    try {
      axios.get(`/user/${id}`).then(({ data }) => {
        setplace(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

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
            {place?.photos?.length > 0 &&
              place.photos.map((photo) => (
                <div>
                  <img src={"http://localhost:5000/uploads/" + photo} alt="" />
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {id == place?._id ? (
        <div className=" flex flex-col grow ">
          <div className="flex flex-col gap-2 py-8  mx-auto w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12  ">
            <AccTitle place={place} />
            <AccPhotos place={place} setShowPhotos={setShowPhotos} />

            <div className="flex flex-col flex-col-reverse items-center gap-3 lg:items-start  lg:grid lg:grid-cols-[2fr_1fr]">
              <div className="flex flex-col py-5">
                <AccDesc place={place} />
                <AccInfo place={place} />
                <AccExtraInfo place={place} />
              </div>
              <AccBooking place={place} />
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
