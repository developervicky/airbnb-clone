import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
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
    <div className="flex flex-col grow">
      <div
        key={placeFind._id}
        className="grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {placeFind.length > 0 &&
          placeFind.map((acc) => (
            <>
              {acc.photos[0] && (
                <Link className="flex flex-col gap-3">
                  <img
                    src={"http://localhost:5000/uploads/" + acc.photos[0]}
                    alt="plcImg"
                    className="aspect-square object-cover rounded-xl"
                  />
                  <div className="flex flex-row gap-10 justify-between items-center">
                    <div className="flex flex-col truncate">
                      <h2 className="text-lg tracking-wide font-bold truncate ">
                        {acc.title}
                      </h2>
                      <h2 className="font-medium tracking-wider text-gray-400">
                        {acc.city}, {acc.country}
                      </h2>
                    </div>
                    <h2>{acc.price}</h2>
                  </div>
                </Link>
              )}
            </>
          ))}
      </div>
      <div className="flex  flex-col grow items-end justify-end sticky bottom-0 pb-8">
        <Link
          to={"/account/accommodations/new"}
          className="flex flex-row-reverse flex-row bg-white w-fit items-center justify-center px-4 gap-3 border-2 p-2 rounded-full cursor-pointer font-semibold  hover:border-primary hover:bg-primary hover:text-white"
        >
          <GoPlus className="text-3xl" />
          <button className="tracking-wide font-semibold ">
            Add New Place
          </button>
        </Link>
      </div>
    </div>
  );
}
