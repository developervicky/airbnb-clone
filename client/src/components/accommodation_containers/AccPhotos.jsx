import { MdOutlinePhotoLibrary } from "react-icons/md";

export default function AccPhotos({ place, setShowPhotos }) {
  const seeMoreStyle = (styles) => {
    let style =
      "absolute flex gap-3 items-center  bg-gray-300 bg-opacity-75 p-2 md:p-4 rounded-xl  hover:bg-primary hover:bg-opacity-75 hover:text-white";
    if (styles >= 3) {
      // console.log(style + " bottom-4 right-4");
      return style + " bottom-4 right-4";
    } else {
      // console.log(style + " bottom-4 right-16");
      return style + " bottom-4 right-16";
    }
  };
  return (
    <>
      {" "}
      <div className=" relative pt-7">
        {place.photos[0] && place.photos.length >= 3 ? (
          <div
            onClick={() => setShowPhotos(true)}
            className=" cursor-pointer grid grid-cols-[2fr_1fr] gap-2 overflow-hidden rounded-3xl "
          >
            <div>
              <img
                src={"http://localhost:5000/uploads/" + place.photos[0]}
                alt="plcImg"
                className="aspect-square object-cover"
              />
            </div>
            <div className="grid ">
              <img
                src={"http://localhost:5000/uploads/" + place.photos[1]}
                alt="plcImg"
                className="aspect-square object-cover"
              />
              <img
                src={"http://localhost:5000/uploads/" + place.photos[2]}
                alt="plcImg"
                className="aspect-square object-cover relative top-2"
              />
            </div>
          </div>
        ) : (
          <div className=" rounded-3xl  border-2 w-fit mx-auto  overflow-hidden ">
            <div>
              <img
                src={"http://localhost:5000/uploads/" + place.photos[0]}
                alt="plcImg"
                className="object-cover"
              />
            </div>
          </div>
        )}
        <button
          onClick={() => setShowPhotos(true)}
          className={seeMoreStyle(place.photos.length)}
        >
          <MdOutlinePhotoLibrary className="text-xl" />
          <p>See more</p>
        </button>
      </div>
    </>
  );
}
