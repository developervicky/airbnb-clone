import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import { TbUserEdit } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import AccDelModal from "../accommodation_modal/AccDelModal";

export default function AccTitle({ place }) {
  const { user } = useContext(UserContext);
  const { id, crud, subpage } = useParams();

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className=" sm:text-xl md:text-3xl font-bold md:font-medium tracking-wide">
          {place?.title}
        </h2>
        {!user ||
          (user._id == place?.ownerId && subpage == "accommodations" && (
            <div className="flex gap-2 md:gap-6">
              <Link
                to={"del"}
                className="border-2 border-primary flex items-center text-primary p-1 md:p-2 rounded-full hover:text-white hover:bg-caution hover:border-caution"
              >
                <MdDeleteOutline className="text-xl md:text-2xl " />
              </Link>
              <Link
                to={`/account/accommodations/useredit/${id}`}
                className="sm:text-xl md:text-3xl border-2 border-black p-2 rounded-full text-primary border-primary hover:text-white hover:bg-primary hover:border-white"
              >
                <TbUserEdit className="" />
              </Link>
            </div>
          ))}
      </div>
      <div className="text-xs sm:text-sm md:text-base flex gap-2 items-center w-fit  tracking-wide">
        <GrMapLocation className="text-primary" />
        <a
          target="_blank"
          rel="noreferrer"
          href={
            "https://map.google.com/?q=" + place?.city + "/" + place?.country
          }
          className="underline text-primary  "
        >
          {place?.city}, {place?.country}
        </a>
      </div>
      {crud == "del" && <AccDelModal />}
    </>
  );
}
