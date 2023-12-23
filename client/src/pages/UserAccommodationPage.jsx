import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { TbUserEdit } from "react-icons/tb";
import AccommodationModal from "../components/accommodation_modal/AccommodationModal";
import ErrorPage from "../pages/ErrorPage"

function UserAccommodationPage() {
  const [place, setplace] = useState([]);
  const { action, id } = useParams();
  console.log(action, id);
  useEffect(() => {
    try {
      axios.get(`/user/${id}`).then(({ data }) => {
        console.log([data]);
        setplace(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  console.log(id);
  return (
    <>
      {id == place._id ? (
        <div className="flex ">
          <h2 className="text-2xl font-bold">{place.title}</h2>
          <Link to={`/account/accommodations/useredit/${id}`}>
            <TbUserEdit className="text-3xl" />
          </Link>
          {action == "useredit" && id == place._id && <AccommodationModal />}
        </div>
      ): (
        <ErrorPage/>
      )}
    </>
  );
}

export default UserAccommodationPage;
