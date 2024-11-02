import { useId } from "react";
import { SortIcon } from "./SortIcon";
import PropTypes from "prop-types";

export function Form({ handleSubmit, error, handleChange, handleSort, search, sort }) {
  const sortId = useId();

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
        style={{
          border: "1px solid blue",
          borderColor: error ? "red" : "transparent",
        }}
        onChange={handleChange}
        value={search}
        name="query"
        placeholder="Avengers, Star Wars, The Matrix" 
      />
      <button>Search</button>
      
      <input
        id={sortId}
        type="checkbox"
        onChange={handleSort}
        checked={sort}
        hidden
      />
      <label htmlFor={sortId} title="Sort by year"><SortIcon /></label>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  sort: PropTypes.bool.isRequired,
};
