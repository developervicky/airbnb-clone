import { Link, useParams } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AddPlace() {
  const [placeFind, setplaceFind] = useState([]);

  useEffect(() => {
    axios.get("/placeFind").then(({ data }) => {
      setplaceFind(data);
    });
  }, []);

  return (
    <>
      <Link
        to={"/account/accommodations/new"}
        className="flex flex-col items-center  gap-3 border-2 p-16 rounded-2xl cursor-pointer font-semibold  hover:border-primary hover:bg-primary hover:text-white"
      >
        <TiPlus className="text-4xl" />
        <button className="tracking-wide ">Add New Place</button>
      </Link>
      {placeFind.length > 0 &&
        placeFind.map((acc) => (
          <Link
            key={acc.id}
            to={`/account/accommodations/user/${acc._id}`}
            className="flex flex-col items-center gap-1 cursor-pointer font-semibold "
          >
            <img
              src={acc.photos[0]}
              className="border-2 rounded-2xl w-full h-full"
            ></img>
            <div className="border-2 w-full flex flex-row justify-between items-center">
              <div>
                <h2 className="tracking-wider">{acc.title}</h2>
                <h2 className="font-medium tracking-wider">
                  {acc.city}, {acc.country}
                </h2>
              </div>
              <h2 className="font-semibold">{acc.price}</h2>
            </div>
          </Link>
        ))}
    </>
  );
}
