import Data from "./ServicesData";
import { Link } from "react-router-dom";
function ServiceList() {
  const services = Data.map((dat) => (
    <h2 key={dat._id}>
      <Link to={`/Services/${dat._id}`}>{dat.name}</Link>
      --{dat.price}{" "}
    </h2>
  ));
  return (
    <div>
      <h1>Services List</h1>
      {services}
    </div>
  );
}

export default ServiceList;
