import { useParams } from "react-router-dom";
import Data from "./ServicesData";
function ServiceDetails() {
  const { userId } = useParams();
  function checkDetails(service) {
    return service._id === userId;
  }

  const thisService = Data.find(checkDetails);
  return (
    <div>
      <h1>Service Detail page..{thisService.name}</h1>
      <h1>{thisService.description}</h1>
    </div>
  );
}

export default ServiceDetails;
