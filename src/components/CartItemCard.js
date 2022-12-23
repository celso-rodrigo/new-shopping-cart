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
		<div className="cart-item-card">
			<img src={thumbnail} alt={name} />
			<p className="name">{name}</p>
			<p>{`R$${price.toFixed(2)}`}</p>
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
