import React, { useContext } from "react";
import Context from "../context/Context";
import CartItemCard from "./CartItemCard";

function Cart() {
	const { showCart, cart } = useContext(Context);

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
		</aside>
  );
}

export default Cart;
