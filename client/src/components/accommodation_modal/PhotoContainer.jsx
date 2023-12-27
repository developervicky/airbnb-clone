import axios from "axios";
import { FiPlusCircle } from "react-icons/fi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function PhotoContainer({
  photoLink,
  setPhotoLink,
  addedPhoto,
  setAddedPhoto,
}) {
  const uploadPhotoByLink = async (e) => {
    e.preventDefault();
    const { data: newname } = await axios.post("/uploads_link", { photoLink });
    setAddedPhoto((prev) => {
      return [...prev, newname];
    });
    setPhotoLink("");
  };

  const uploadPhoto = (ev) => {
    // console.log(ev.target.files);
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
      // console.log(data);
    }
    axios
      .post("/uploads", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => {
        const { data: filenames } = res;
        setAddedPhoto((prev) => {
          return [...prev, ...filenames];
        });
      });
  };

  const deletePhoto = (e, filename) => {
    e.preventDefault();
    setAddedPhoto([...addedPhoto.filter((photo) => photo !== filename)]);
  };

  const starImg = (e, filename) => {
    e.preventDefault();
    setAddedPhoto([
      filename,
      ...addedPhoto.filter((photo) => photo !== filename),
    ]);
  };

  return (
    <div className="flex flex-col gap-4 p-2 pt-6 pb-6 border-b-2">
      <h2 className="text-lg tracking-wider font-semibold">Photos</h2>
      <div className="flex flex-row items-center pr-2 border-2 rounded-xl">
        <input
          type="text"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
          placeholder="Enter the URL (Atleast 5 Photos)"
          className="w-full  p-2 rounded-xl font-medium tracking-wider focus:outline-none"
        />
        <button>
          <FiPlusCircle
            onClick={uploadPhotoByLink}
            className="text-2xl text-gray-400 hover:text-primary"
          />
        </button>
      </div>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        <label className="h-32 flex flex-col items-center justify-center gap-2 border-2  p-5 rounded-xl cursor-pointer hover:border-primary ">
          <input
            type="file"
            multiple
            onChange={uploadPhoto}
            className="hidden"
          />
          <IoCloudUploadOutline className="text-2xl text-gray-400" />
          <div className="font-medium tracking-wider text-gray-400 ">
            Upload Photo
          </div>
        </label>
        {addedPhoto.length > 0 &&
          addedPhoto.map((link) => (
            <div key={link} className="relative">
              <img
                src={"http://localhost:5000/uploads/" + link}
                alt={link}
                className=" border-2 h-32 w-full rounded-xl object-cover hover:border-primary "
              />
              {link == addedPhoto[0] ? (
                <button
                  onClick={(e) => starImg(e, link)}
                  className="absolute text-xl bottom-2 left-2 rounded-full p-1.5 cursor-pointer bg-primary/75 text-white"
                >
                  <FaStar />
                </button>
              ) : (
                <button
                  onClick={(e) => starImg(e, link)}
                  className="absolute text-xl bottom-2 left-2 bg-white/75 rounded-full p-1.5 cursor-pointer hover:bg-primary/75 hover:text-white"
                >
                  <FaStar />
                </button>
              )}
              <button
                onClick={(e) => deletePhoto(e, link)}
                className="absolute text-xl bottom-2 right-2 bg-white/75 rounded-full p-1.5 cursor-pointer hover:bg-primary/75 hover:text-white"
              >
                <MdOutlineDelete />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
