import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const PlanForm = ({ createPlan }) => {
  const [planName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationDescription, setLocationDescription] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [safetyInstructions, setSafetyInstructions] = useState("");
  const [OtherThings, setOtherThings] = useState("");
  const handleSubmit = (e) => {
    const id = 0;
    const locationId = 101;
    e.preventDefault();
    console.log(OtherThings);
    createPlan({
      id,
      planName,
      description,
      locationId,
      locationName,
      locationDescription,
      maxCapacity,
      safetyInstructions,
      OtherThings,
    });
    setName("");
    setDescription("");
    setLocationName("");
    setLocationDescription("");
    setMaxCapacity("");
    setSafetyInstructions("");
    setOtherThings("");
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Tell me what plan you want to add</h2>
        <div className="input-group">
          <label htmlFor="planName">Name of plan: </label>
          <input
            required
            type="text"
            id="planName"
            placeholder=" Name of the plan"
            value={planName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <input
            required
            type="text"
            id="description"
            placeholder=" Plan description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="location-name">Location name:</label>
          <input
            required
            type="text"
            id="location-name"
            placeholder=" location name"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="locationDescription">Location description:</label>
          <input
            required
            type="text"
            id="locationDescription"
            placeholder=" Location description"
            value={locationDescription}
            onChange={(e) => setLocationDescription(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="maxCapacity">Max Capacity:</label>
          <input
            required
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            id="maxCapacity"
            placeholder=" Max capacity"
            value={maxCapacity}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setMaxCapacity(value);
              }
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="safetyInstructions">Safety Instructions:</label>
          <input
            required
            type="text"
            id="safetyInstructions"
            placeholder="Safety instructions"
            value={safetyInstructions}
            onChange={(e) => setSafetyInstructions(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="OtherThings">Other Things:</label>
          <input
            type="text"
            id="OtherThings"
            placeholder=" Other things"
            value={OtherThings}
            onChange={(e) => setOtherThings(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add Plan
        </button>
      </form>
    </Card>
  );
};

PlanForm.propTypes = {
  createPlan: PropTypes.func.isRequired,
};
export default PlanForm;
