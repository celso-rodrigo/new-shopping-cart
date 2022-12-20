import React, { useContext } from "react";
import Context from "../context/Context";
import cartIcon from "../images/cart.svg";

function StoreHeader() {
	const { setShowCart, cart } = useContext(Context);

  return (
		<header>
			<h1 className="title">New Shopping cart</h1>

			<button
				type="button"
				className="cart-button"
				onClick={() => setShowCart((prevState) => (!prevState))}
			>	
				<div>
					{cart.length > 0 && <span className="items">
						{cart.reduce((acc, curr) => acc + curr.quantity, 0)}
					</span>}
					<img src={cartIcon} alt="Cart." className="cart-icon" />
				</div>
			</button>
		</header>
  );
}

export default StoreHeader;
