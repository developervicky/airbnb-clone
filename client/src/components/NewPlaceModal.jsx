import React from "react";
import { Link } from "react-router-dom";
import { TbTrees } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { MdPool, MdOutlinePets } from "react-icons/md";
import { BiFridge } from "react-icons/bi";

function NewPlaceModal() {

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div class="flex min-h-full items-end justify-center p-4 text-center md:p-6 sm:items-center sm:p-6">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
            <div class=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              <div class="mt-3 text-center sm:ml-2 sm:mt-0 sm:text-left">
                <h1
                  class="text-2xl pt-2 font-bold leading-6 tracking-wider text-gray-900"
                  id="modal-title"
                >
                  Post your Accommodation Info
                </h1>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 mt-4 p-2 pb-6 border-b-2">
                    <h2 className="text-lg tracking-wider font-semibold">
                      Basic Info
                    </h2>
                    <input
                      type="text"
                      placeholder="Title of your place"
                      className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                    />
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Country"
                        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="City"
                        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                      />
                    </div>
                    <textarea
                      placeholder="Description of your accommodation"
                      className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-2 pb-6 border-b-2">
                    <h2 className="text-lg tracking-wider font-semibold">
                      Photos
                    </h2>
                    <div className="flex flex-row items-center pr-2 border-2 rounded-xl">
                      <input
                        type="text"
                        placeholder="Enter the URL"
                        className="w-full  p-2 rounded-xl font-medium tracking-wider focus:outline-none"
                      />
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-500 hover:text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="grid gap-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 ">
                      <button className="flex flex-col items-center gap-2 border-2 w-fit p-5 rounded-xl hover:border-primary ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-500 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                          />
                        </svg>
                        <button className="font-semibold tracking-wider text-gray-500 ">
                          Upload Photo
                        </button>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-2 pb-6 border-b-2">
                    <h2 className="text-lg tracking-wider font-semibold">
                      Accommodation Info
                    </h2>
                    <h2 className="text-md tracking-wider font-semibold">
                      Perks
                    </h2>
                    <div className="grid grid-cols-4 gap-3">
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer">
                        <input type="checkbox" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                          />
                        </svg>
                        <h2 className="font-semibold tracking-wider text-gray-500">
                          Wi-fi
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer">
                        <input type="checkbox" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                        <h2 className="font-semibold tracking-wider text-gray-500">
                          Free Parking
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer">
                        <input type="checkbox" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                          />
                        </svg>

                        <h2 className="font-semibold tracking-wider text-gray-500">
                          TV
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer">
                        <input type="checkbox" />
                        <TbTrees className="text-2xl" />
                        <h2 className="font-semibold tracking-wider text-gray-500">
                          Garden View
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer">
                        <input type="checkbox" />
                        <MdPool className="text-2xl" />
                        <h2 className="font-semibold tracking-wider text-gray-500">
                          Pool Facility
                        </h2>
                      </label>
                      <label className="flex flex-row items-center  rounded-lg gap-4 border-2 p-4 cursor-pointer">
                        <input type="checkbox" />
                        <MdOutlinePets className="text-2xl" />
                        <h2 className="font-semibold tracking-wider text-gray-500">
                          Pets Allowed
                        </h2>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Deactivate
              </button>
              <Link
                to={"/account/accommodations/"}
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPlaceModal;
