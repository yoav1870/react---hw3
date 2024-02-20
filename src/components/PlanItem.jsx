import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import PropTypes from "prop-types";

const PlanItem = ({ plan, deletePlan }) => {
  return (
    <div className="card">
      <div className="num-display">{plan.id}</div>
      <button className="delete" onClick={() => deletePlan(plan.id)}>
        <MdDeleteForever />
      </button>
      <button className="edit">
        <BiSolidEdit />
      </button>
      <h3>{plan.planName}</h3>
      <div className="locations">
        {plan.locations.map((location) => (
          <div key={location.id}>
            <h4>Location {location.id}</h4>
            <ul>
              <li>Location name : {location.name}</li>
              <li>Location description: {location.description}</li>
              <li>Location maxCapacity : {location.maxCapacity}</li>
              <li>
                location safetyInstructions :{location.safetyInstructions}
              </li>
              <li>OtherThings: {location.OtherThings}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

PlanItem.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.number.isRequired,
    planName: PropTypes.string.isRequired,
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        maxCapacity: PropTypes.number.isRequired,
        safetyInstructions: PropTypes.string.isRequired,
        OtherThings: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  deletePlan: PropTypes.func.isRequired,
};

export default PlanItem;
