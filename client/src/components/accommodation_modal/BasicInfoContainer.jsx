export default function BasicInfoContainer({
  title,
  setTitle,
  address,
  setAddress,
  country,
  setCountry,
  state,
  setState,
  city,
  setCity,
  description,
  setDescription,
}) {
  // const {

  // } = props;
  // const [title, setTitle] = useState("");
  // const [address, setAddress] = useState("");
  // const [country, setCountry] = useState("");
  // const [state, setState] = useState("");
  // const [city, setCity] = useState("");
  // const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col gap-4 mt-4 p-2 pb-6 border-b-2">
      <h2 className="text-lg tracking-wider font-semibold">Basic Info</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title of your place"
        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
      />
      <div className="grid grid-cols-3 gap-3">
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
          className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
        />
      </div>
      <textarea
        placeholder="Description of your accommodation"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border-2 p-2 rounded-xl font-medium tracking-wider focus:outline-none"
      />
    </div>
  );
}
