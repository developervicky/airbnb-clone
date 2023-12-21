import { useParams } from "react-router-dom";
import NewPlaceModal from "../components/accommodation_modal/AccommodationModal";
import AddPlace from "../components/AddPlace";

function AccommodationPage() {
  const { action } = useParams();
  console.log(action);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        <AddPlace />
      </div>
      {action === "new" && <NewPlaceModal />}
    </div>
  );
}

export default AccommodationPage;
