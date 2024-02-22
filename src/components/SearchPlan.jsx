import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const SearchPlan = ({ SearchById }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [errorNegative, setErrorNegative] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setError(true);
      setErrorNegative(false);
    } else if (search < 0) {
      setErrorNegative(true);
      setError(false);
      setSearch("");
    } else {
      setError(false);
      setErrorNegative(false);
      SearchById(search);
      setSearch("");
    }
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
          <div className="error">
            Need to put a number to search. Plz try again.
          </div>
        )}
        {errorNegative && (
          <div className="error">
            Plan ID should be a positive number. Plz try again.
          </div>
        )}
      </form>
    </Card>
  );
};

SearchPlan.propTypes = {
  SearchById: PropTypes.func.isRequired,
};

export default SearchPlan;
