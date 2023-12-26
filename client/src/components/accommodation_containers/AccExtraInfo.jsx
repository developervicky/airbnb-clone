export default function AccExtraInfo({ place }) {
  return (
    <>
      <div className="flex w-fit flex-col gap-3 py-7 border-b-2">
        <h1 className=" font-bold tracking-wide text-lg  md:text-xl  xl:text-2xl">
          Other stuffs to note
        </h1>
        <p className="tracking-wide leading-8 text-gray-600 md:text-lg xl:text-xl">
          {place.extraInfo}
        </p>
      </div>
    </>
  );
}
