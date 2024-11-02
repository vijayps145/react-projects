// Header.js
import React from "react";
import PropTypes from "prop-types";

function Header({ error, children }) {
  return (
    <header>
      <h1>Movie Finder</h1>
      {children}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </header>
  );
}

Header.propTypes = {
  error: PropTypes.string, // Update this to accept a string
  children: PropTypes.node,
};

export default Header;
