import { Carousel, IconButton } from "@material-tailwind/react";
import { IoCloseCircle } from "react-icons/io5";
import Image from "../common/Image";

export default function ImageCarousel({ setShowPhotos, place }) {
  return (
    <div className="flex grow relative">
      <button
        onClick={() => setShowPhotos(false)}
        className="absolute top-10 right-10"
      >
        <IoCloseCircle className="text-4xl text-primary " />
      </button>

      <Carousel
        className=" w-9/12 my-auto  mx-auto rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="#17A191"
            size="lg"
            onClick={handlePrev}
            className="!absolute  top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#17A191"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="#17A191"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#17A191"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50  flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-primary" : "w-4 bg-primary/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {place?.photos?.length > 0 &&
          place?.photos.map((photo) => (
            <div>
              <Image
                src={photo}
                className=" w-full h-[600px]   object-contain"
                alt=""
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
