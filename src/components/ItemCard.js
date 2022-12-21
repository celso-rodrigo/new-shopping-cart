import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context/Context";
import add from "../images/add.svg";

function ItemCard({name, price, thumbnail, id}) {
	const { setCart, cart } = useContext(Context);

	const addToCart = () => {
		const alreadyExist = cart.find((cartItem) => cartItem.id === id);

		if (alreadyExist) {
			const newCart = [...cart];
			const currItem = newCart.find((item) => item.id === id);
			currItem.quantity++;
			setCart(newCart);
		} else {
			setCart((prev) => [...prev, {name, price, thumbnail, id, quantity: 1}]);
		}
	};

  return (
		<div className="item-card">
			<img src={thumbnail} alt={name} className="item-image" />
			<h2 className="item-name">{name}</h2>
			<h3><span className="currency">R$</span>{price.toFixed(2)}</h3>
			<button
				type="button"
				onClick={addToCart}
			>
				<img src={add} alt="Add item to cart." />
			</button>
		</div>
  );
}

ItemCard.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	thumbnail: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default ItemCard;
