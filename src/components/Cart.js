import React, { useContext } from "react";
import Context from "../context/Context";
import CartItemCard from "./CartItemCard";

function Cart() {
	const { showCart, cart, setCart } = useContext(Context);

	const getTotal = () => {
		if (!cart.length) return "Cart is empty";
		if (cart.length === 1) return (cart[0].price * cart[0].quantity).toFixed(2);
		return cart.reduce((acc, curr) => curr.price * curr.quantity + acc, 0).toFixed(2);
	};

	return (
		<aside className={`cart ${showCart ? "" : "cart-hidden"}`}>
			{cart.map((item) => (
				<CartItemCard
					name={item.name}
					price={item.price}
					thumbnail={item.thumbnail}
					quantity={item.quantity}
					id={item.id}
					key={item.id}
				/>
			))}
			<p>{`Total: ${getTotal()}`}</p>
			{cart.length > 0 && (
				<button
					type="button"
					onClick={() => setCart([])}
				>
					Clear Cart
				</button>
			)}
		</aside>
  );
}

export default Cart;
