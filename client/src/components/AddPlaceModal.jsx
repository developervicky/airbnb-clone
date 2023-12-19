import { Link } from "react-router-dom";
import { TiPlus } from "react-icons/ti";

export default function AddPlaceModal() {
  return (
    <Link
      to={"/account/accommodations/new"}
      className="flex flex-col items-center  gap-3 border-2 p-16 rounded-3xl cursor-pointer font-semibold  hover:border-primary hover:bg-primary hover:text-white"
    >
      <TiPlus className="text-4xl" />
      <button className="tracking-wide ">Add New Place</button>
    </Link>
  );
}
