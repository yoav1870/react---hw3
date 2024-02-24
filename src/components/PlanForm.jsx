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
  // const [borderColor, setBorderColor] = useState("blue");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = 0;
    const locationId = 101;

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

  const setColorChange = (e) => {
    const inputGroups = document.querySelectorAll(".input-group");
    inputGroups.forEach((group) => {
      group.style.borderBottom = "1px solid #ccc";
    });

    const inputGroup = e.currentTarget.closest(".input-group");
    if (inputGroup) {
      inputGroup.style.borderBottom = "2px solid blue";
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Tell me what plan you want to add</h2>
        <label htmlFor="planName">Name of plan * </label>
        <div className="input-group" onClick={setColorChange}>
          <input
            required
            type="text"
            id="planName"
            placeholder=" Name of the plan"
            value={planName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <label htmlFor="description">Description *</label>
        <div className="input-group" onClick={setColorChange}>
          <input
            required
            type="text"
            id="description"
            placeholder=" Plan description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <label htmlFor="location-name">Location name *</label>
        <div className="input-group" onClick={setColorChange}>
          <input
            required
            type="text"
            id="location-name"
            placeholder=" location name"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
          />
        </div>
        <label htmlFor="locationDescription">Location description *</label>
        <div className="input-group" onClick={setColorChange}>
          <input
            required
            type="text"
            id="locationDescription"
            placeholder=" Location description"
            value={locationDescription}
            onChange={(e) => setLocationDescription(e.target.value)}
          />
        </div>
        <label htmlFor="maxCapacity">Max Capacity *</label>
        <div className="input-group" onClick={setColorChange}>
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
        <label htmlFor="safetyInstructions">Safety Instructions * </label>

        <div className="input-group" onClick={setColorChange}>
          <input
            required
            type="text"
            id="safetyInstructions"
            placeholder=" Safety instructions"
            value={safetyInstructions}
            onChange={(e) => setSafetyInstructions(e.target.value)}
          />
        </div>
        <label htmlFor="OtherThings">Other Things</label>

        <div className="input-group" onClick={setColorChange}>
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
