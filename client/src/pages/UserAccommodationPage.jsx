import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TbUserEdit } from "react-icons/tb";
import AccommodationModal from "../components/accommodation_modal/AccommodationModal";

function UserAccommodationPage() {
  const [placeFind, setplaceFind] = useState([]);
  const { action, id } = useParams();
  console.log(action, id);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios.get(`/user/${id}`).then(({ data }) => {
        setplaceFind(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  console.log(id);
  if (id !== placeFind._id) {
    navigate("/error");
  }
  return (
    <>
      <div className="flex ">
        <h2 className="text-2xl font-bold">{placeFind.title}</h2>
        <Link to={`/account/accommodations/useredit/${id}`}>
          <TbUserEdit className="text-3xl" />
        </Link>
        {action == "useredit" && id == placeFind._id && (
          <AccommodationModal  />
        )}
      </div>
    </>
  );
}

export default UserAccommodationPage;
