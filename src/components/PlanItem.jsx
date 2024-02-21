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

const PlanItem = ({ plan, deletePlan }) => {
  const [open, setOpen] = useState(false);

  const updatePlan = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card>
      <div className="num-display">{plan.id}</div>
      <button className="delete" onClick={() => deletePlan(plan.id)}>
        <MdDeleteForever />
      </button>
      <button className="edit" onClick={() => updatePlan()}>
        <BiSolidEdit />
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
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
              value={plan.planName}
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
              value={plan.locations[0].name}
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
              value={plan.locations[0].description}
            />
            <TextField
              autoFocus
              label="Max capacity"
              margin="dense"
              id="maxCapacity"
              name="maxCapacity"
              type="text"
              fullWidth
              variant="standard"
              value={plan.locations[0].maxCapacity}
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
              value={plan.locations[0].safetyInstructions}
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
              value={plan.locations[0].OtherThings}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Update</Button>
          </DialogActions>
        </Dialog>
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
};

export default PlanItem;
