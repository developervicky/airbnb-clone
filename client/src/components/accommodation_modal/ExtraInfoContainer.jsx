import { useState } from "react";

export default function ExtraInfoContainer() {
  const [extraInfo, setExtraInfo] = useState("");
  return (
    <div className="flex flex-col gap-4 p-2 pb-6 border-b-2">
      <h2 className="text-lg tracking-wider font-semibold">Extra Info</h2>
      <textarea
        placeholder="Any Extra Information of your place for the users"
        value={extraInfo}
        onChange={(e) => setExtraInfo(e.target.value)}
        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
      />
    </div>
  );
}
