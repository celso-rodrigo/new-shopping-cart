import React, { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [problem, setProblem] = useState("Search for something.");
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  const getTotal = () => {
		if (!cart.length) return <p className="cart-empy-text">Cart is empty</p>;
		if (cart.length === 1) {
      const total = (cart[0].price * cart[0].quantity).toFixed(2);
      return <p>Total: <span className="total">{`R$ ${total}`}</span></p>;
    } 
		const total = cart.reduce((acc, curr) => curr.price * curr.quantity + acc, 0).toFixed(2);
		return <p>Total: <span className="total">{`R$ ${total}`}</span></p>;
	};

  const providerValue = {
    showCart,
    problem,
    cart,
    searchResults,
    productsLoading,
    setProductsLoading,
    setCart,
    setSearchResults,
    setProblem,
    setShowCart,
    getTotal,
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