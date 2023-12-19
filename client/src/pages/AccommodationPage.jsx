import { useParams } from "react-router-dom";
import NewPlaceModal from "../components/NewPlaceModal";
import AddPlaceModal from "../components/AddPlaceModal";

function AccommodationPage() {
  const { action } = useParams();
  console.log(action);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        <AddPlaceModal />
      </div>
      {action === "new" && <NewPlaceModal />}
    </div>
  );
}

export default AccommodationPage;
