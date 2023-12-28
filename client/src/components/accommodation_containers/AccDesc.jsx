import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function AccDesc({ place }) {
  const [readMore, setReadMore] = useState(false);

  const description = place?.description;

  return (
    <>
      <div className="flex flex-col gap-3 py-7 pt-1 border-b-2 ">
        <h1 className="font-bold tracking-wide text-lg md:text-xl  xl:text-2xl">
          Explore in {place?.city}, {place?.country}
        </h1>
        <p className=" tracking-wide leading-8 text-gray-600 md:text-lg xl:text-xl ">
          {readMore ? (
            <p className="flex flex-row items-end">
              {description}
              <button
                onClick={() => setReadMore(false)}
                className=" text-sm sm:text-base text-white border-2 border-primary rounded-full bg-primary p-1 hover:bg-primaryl hover:border-primaryl"
              >
                <FaAngleUp />
              </button>
            </p>
          ) : (
            <p className="flex flex-row items-end">
              {description.slice(0, 200)}....{" "}
              <button
                onClick={() => setReadMore(true)}
                className=" text-sm sm:text-base text-white border-2 border-primary rounded-full bg-primary p-1 hover:bg-primaryl hover:border-primaryl"
              >
                <FaAngleDown />
              </button>
            </p>
          )}
        </p>
      </div>
    </>
  );
}
