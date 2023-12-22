import { useParams } from "react-router-dom";
import AccommodationModal from "../components/accommodation_modal/AccommodationModal";
import AddPlace from "../components/AddPlace";

function AccommodationPage() {
  const { action } = useParams();
  console.log(action);

  return (
    <div className="flex flex-col grow justify-between">
      <AddPlace />
      {action === "new" && <AccommodationModal />}
    </div>
  );
}

export default AccommodationPage;
