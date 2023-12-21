import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import BasicInfoContainer from "./BasicInfoContainer";
import PhotoContainer from "./PhotoContainer";
import AccommodationInfoContainer from "./AccommodationInfoContainer";
import ExtraInfoConatainer from "./ExtraInfoContainer";

export default function NewPlaceModal() {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center md:p-6 sm:items-center sm:p-6">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              <div className="mt-3 text-center sm:ml-2 sm:mt-0 sm:text-left">
                <div className="flex flex-row justify-between">
                  <h1
                    className="text-2xl pt-2 font-bold leading-6 tracking-wider text-gray-900"
                    id="modal-title"
                  >
                    Post your Accommodation Info
                  </h1>
                  <Link to={"/account/accommodations/"}>
                    <AiOutlineCloseCircle
                      type="button"
                      className="text-3xl hover:text-white hover:bg-primary hover:rounded-full"
                    />
                  </Link>
                </div>
                <form className="flex flex-col gap-4">
                  <BasicInfoContainer />
                  <PhotoContainer />
                  <AccommodationInfoContainer />
                  <ExtraInfoConatainer />
                </form>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 pb-5 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
