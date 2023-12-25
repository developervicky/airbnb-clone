import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, useParams } from "react-router-dom";
import { TbUserEdit } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";

export default function AccTitle({ place }) {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-medium tracking-wide">{place.title}</h2>
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
          href={"https://map.google.com/?q=" + place.city + "/" + place.country}
          className="underline  "
        >
          {place.city}, {place.country}
        </a>
      </div>
    </>
  );
}
