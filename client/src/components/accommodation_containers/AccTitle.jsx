import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import { TbUserEdit } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import AccDelModal from "../accommodation_modal/AccDelModal";

export default function AccTitle({ place }) {

  const { user } = useContext(UserContext);
  const { id, crud } = useParams();


  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-medium tracking-wide">{place.title}</h2>
        {!user ||
          (user._id == place.ownerId && (
            <div className="flex gap-6">
              <Link
                to={"del"}
                className="border-2 border-primary flex items-center text-primary p-2 rounded-full hover:text-white hover:bg-primary"
              >
                <MdDeleteOutline className="text-2xl " />
              </Link>
              <Link
                to={`/account/accommodations/useredit/${id}`}
                className="text-3xl border-2 border-black p-2 rounded-full text-primary border-primary hover:text-white hover:bg-primary hover:border-white"
              >
                <TbUserEdit className="" />
              </Link>
            </div>
          ))}
      </div>
      <div className="flex gap-2 items-center w-fit  tracking-wide">
        <GrMapLocation className="text-primary" />
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://map.google.com/?q=" + place.city + "/" + place.country}
          className="underline text-primary  "
        >
          {place.city}, {place.country}
        </a>
      </div>
      {crud == "del" && <AccDelModal />}
    </>
  );
}
