import React, { useContext, useState } from "react";
import Context from "../context/Context";
import cart from "../images/cart.svg";

function StoreHeader() {
	const [items] = useState(0);
	const { setShowCart } = useContext(Context);

  return (
		<header>
			<h1 className="title">New Shopping cart</h1>

			<button
				type="button"
				className="cart-button"
				onClick={() => setShowCart((prevState) => (!prevState))}
			>	
				<div>
					{items > 0 && <span className="items">{items}</span>}
					<img src={cart} alt="Cart." className="cart-icon" />
				</div>
			</button>
		</header>
  );
}

export default StoreHeader;
