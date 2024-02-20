import { useState } from "react";

const PlanForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [safetyInstructions, setSafetyInstructions] = useState("");
  const [otherThings, setOtherThings] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      name,
      description,
      maxCapacity,
      safetyInstructions,
      otherThings
    );

    setName("");
    setDescription("");
    setMaxCapacity("");
    setSafetyInstructions("");
    setOtherThings("");
  };
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>Tell me what plan you want to add</h2>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name of the plan"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Plan description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="maxCapacity">Max Capacity:</label>
          <input
            type="number"
            id="maxCapacity"
            placeholder="Max capacity"
            value={maxCapacity}
            onChange={(e) => setMaxCapacity(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="safetyInstructions">Safety Instructions:</label>
          <input
            type="text"
            id="safetyInstructions"
            placeholder="Safety instructions"
            value={safetyInstructions}
            onChange={(e) => setSafetyInstructions(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="otherThings">Other Things:</label>
          <input
            type="text"
            id="otherThings"
            placeholder="Other things"
            value={otherThings}
            onChange={(e) => setOtherThings(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add Plan
        </button>
      </form>
    </div>
  );
};

export default PlanForm;
