import React, { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [problem, setProblem] = useState("Search for something.");
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);

  const providerValue = {
    showCart,
    problem,
    searchResults,
    cart,
    setCart,
    setSearchResults,
    setProblem,
    setShowCart,
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