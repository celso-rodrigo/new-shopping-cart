import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import CartItemCard from "./CartItemCard";

function Cart() {
	const { showCart, cart, setCart, getTotal } = useContext(Context);

	return (
		<aside className={`cart ${showCart ? "" : "cart-hidden"}`}>
			{cart.length > 0 && (
				<>
					<div className="payout">
						{getTotal()}
							<Link
								to="/checkout"
							>
								Proceed to payout
							</Link>
					</div>
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
					<button
						type="button"
						onClick={() => setCart([])}
						className="clear-cart-btn"
					>
						Clear Cart
					</button>
				</>
			)}
		</aside>
  );
}

export default Cart;
