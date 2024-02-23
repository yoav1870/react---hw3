import PlanItem from "./PlanItem";
import PropTypes from "prop-types";

const PlanList = ({ plans, deletePlan, updatePlan }) => {
  if (!plans) return <p> No plans </p>;
  return (
    <>
      {plans.map((plan) => (
        <PlanItem
          key={plan.id}
          plan={plan}
          deletePlan={deletePlan}
          updatePlan={updatePlan}
        />
      ))}
    </>
  );
};

PlanList.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  deletePlan: PropTypes.func.isRequired,
  updatePlan: PropTypes.func.isRequired,
};

export default PlanList;
