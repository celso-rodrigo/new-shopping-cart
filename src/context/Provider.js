import React from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function Provider({ children }) {
  const providerValue = {
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;