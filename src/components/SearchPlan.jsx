import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const SearchPlan = ({ SearchById, plans }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    var foundPlan = false;
    plans.forEach((plan) => {
      if (plan.id == search) {
        foundPlan = true;
      }
    });
    if (foundPlan) {
      SearchById(search);
      setError(false);
    } else {
      setError(true);
    }
    setSearch("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Search for a plan by id</h2>
        <div className="input-group">
          <label htmlFor="search">Search:</label>
          <input
            type="number"
            id="search"
            placeholder="Plan ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Search Plan
        </button>
        {error && (
          <div className="error">Plan not found in the db try again plz!</div>
        )}
      </form>
    </Card>
  );
};

SearchPlan.propTypes = {
  SearchById: PropTypes.func.isRequired,
  plans: PropTypes.array.isRequired,
};

export default SearchPlan;
