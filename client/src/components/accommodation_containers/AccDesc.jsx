export default function AccDesc({ place }) {
  return (
    <>
      <div className="flex flex-col gap-3 py-7 border-b-2 ">
        <h1 className="font-bold tracking-wide text-lg md:text-xl  xl:text-2xl">
          Explore in {place.city}, {place.country}
        </h1>
        <p className=" tracking-wide leading-8  md:text-lg xl:text-xl ">
          {place.description}
        </p>
      </div>
    </>
  );
}
