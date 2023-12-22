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
      <div className="pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          {placeFind.length > 0 &&
            placeFind.map((acc) => (
              <Link
                key={acc.id}
                to={`/account/accommodations/user/${acc._id}`}
                className="flex flex-col items-center gap-3 cursor-pointer font-semibold "
              >
                <img
                  src={"http://localhost:5000/uploads/" + acc.photos[0]}
                  className=" rounded-xl w-full h-full"
                ></img>
                <div className="w-full px-2 flex flex-row gap-1 justify-between items-center">
                  <div className="flex flex-col">
                    <h2 className="tracking-wider ">{acc.title}</h2>
                    <h2 className="font-medium text-gray-600 tracking-wider">
                      {acc.city}, {acc.country}
                    </h2>
                  </div>
                  <h2 className="font-semibold">{acc.price}</h2>
                </div>
              </Link>
            ))}
        </div>
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
