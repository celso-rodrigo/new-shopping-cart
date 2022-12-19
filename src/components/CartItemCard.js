import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context/Context";

function CartItemCard({name, price, thumbnail, quantity, id}) {
	const { cart, setCart } = useContext(Context);

	const removeItem = () => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	};

	const addToQuantity = () => {
		const newCart = [...cart];
		const currItem = newCart.find((item) => item.id === id);
		currItem.quantity++;
		setCart(newCart);
	};

	const removeFromCart = () => {
		const newCart = [...cart];
		const currItem = newCart.find((item) => item.id === id);
		if(currItem.quantity === 1) return removeItem();
		currItem.quantity--;
		setCart(newCart);
	};

  return (
		<div>
			<h3>{name}</h3>
			<img src={thumbnail} alt={name} />
			<h4>{`R$${price.toFixed(2)}`}</h4>
			<button
				type="button"
				onClick={addToQuantity}
			>
				+
			</button>
			<p>{quantity}</p>
			<button
				type="button"
				onClick={removeFromCart}
			>
				-
			</button>
		</div>
  );
}

CartItemCard.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	thumbnail: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	id: PropTypes.string.isRequired,
};

export default CartItemCard;
