import React, { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

// const cartMock = [
//   {name: "Fonte Para Monitor LG Asd-24s-12", price: 99.9, thumbnail: "http://http2.mlstatic.com/D_618260-MLB46351007772_062021-I.jpg", id: "MLB1868670458", quantity: 2},
//   {name: "Fonte Para Monitor LG Asd-24s-12", price: 29.9, thumbnail: "http://http2.mlstatic.com/D_728243-MLB46350563957_062021-I.jpg", id: "MLB1868670514", quantity: 2},
//   {name: "Fonte Para Monitor LG Asd-24s-12", price: 38.9, thumbnail: "http://http2.mlstatic.com/D_611487-MLB46351065171_062021-I.jpg", id: "MLB1868670427", quantity: 1},
//   {name: "Fonte Para Monitor LG Asd-24s-12", price: 38.9, thumbnail: "http://http2.mlstatic.com/D_611487-MLB46351065171_062021-I.jpg", id: "MLB1868670427", quantity: 1},
//   {name: "Bateria Para Notebook Acer Asd1031 4400 Mah Preto ", price: 154.9, thumbnail: "http://http2.mlstatic.com/D_987575-MLB45670586436_042021-I.jpg", id: "MLB1391662250", quantity: 1}];


function Provider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [problem, setProblem] = useState("Search for something.");
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);
  // const [cart, setCart] = useState(cartMock);
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