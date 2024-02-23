import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
const PlanItem = ({ plan, deletePlan, updatePlan }) => {
  const [open, setOpen] = useState(false);
  const [planName, setName] = useState(plan.planName);
  const [locationName, setLocationName] = useState(plan.locations[0].name);
  const [locationDescription, setLocationDescription] = useState(
    plan.locations[0].description
  );
  const [maxCapacity, setMaxCapacity] = useState(plan.locations[0].maxCapacity);
  const [safetyInstructions, setSafetyInstructions] = useState(
    plan.locations[0].safetyInstructions
  );
  const [OtherThings, setOtherThings] = useState(plan.locations[0].OtherThings);
  const openUpdate = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setName(plan.planName);
    setLocationName(plan.locations[0].name);
    setLocationDescription(plan.locations[0].description);
    setMaxCapacity(plan.locations[0].maxCapacity);
    setSafetyInstructions(plan.locations[0].safetyInstructions);
    setOtherThings(plan.locations[0].OtherThings);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = plan.id;
    const locationId = plan.locations[0].id;
    updatePlan({
      id,
      planName,
      locationId,
      locationName,
      locationDescription,
      maxCapacity,
      safetyInstructions,
      OtherThings,
    });

    handleClose();
  };

  return (
    <Card>
      <div className="num-display">{plan.id}</div>
      <button className="delete" onClick={() => deletePlan(plan.id)}>
        <MdDeleteForever />
      </button>
      <button className="edit" onClick={() => openUpdate()}>
        <BiSolidEdit />
      </button>
      <Dialog open={open}>
        <DialogTitle>Update plan number {plan.id}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Plan name"
            margin="dense"
            id="namePlan"
            name="namePlan"
            type="text"
            fullWidth
            variant="standard"
            value={planName}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            label="Location name"
            margin="dense"
            id="nameLocation"
            name="nameLocation"
            type="text"
            fullWidth
            variant="standard"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
          />
          <TextField
            autoFocus
            label="Location description"
            margin="dense"
            id="description"
            name="description"
            type="text"
            fullWidth
            variant="standard"
            value={locationDescription}
            onChange={(e) => setLocationDescription(e.target.value)}
          />
          <TextField
            autoFocus
            label="Max capacity"
            margin="dense"
            id="maxCapacity"
            name="maxCapacity"
            type="text"
            inputMode="numeric" // Ensure only numeric input is allowed
            fullWidth
            variant="standard"
            value={maxCapacity}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                // Check if the value contains only digits
                setMaxCapacity(value);
              }
            }}
          />
          <TextField
            autoFocus
            label="Safety instructions"
            margin="dense"
            id="safetyInstructions"
            name="safetyInstructions"
            multiline
            fullWidth
            variant="standard"
            value={safetyInstructions}
            onChange={(e) => setSafetyInstructions(e.target.value)}
          />
          <TextField
            autoFocus
            label="Other things"
            margin="dense"
            id="otherThings"
            name="otherThings"
            type="text"
            fullWidth
            variant="standard"
            value={OtherThings}
            onChange={(e) => setOtherThings(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

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
    </Card>
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
  updatePlan: PropTypes.func.isRequired,
};

export default PlanItem;
