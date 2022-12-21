import React, { useContext } from "react";
import Context from "../context/Context";
import cartIcon from "../images/cart.svg";
import logoIconFill from "../images/logoIconFill.svg";

function StoreHeader() {
	const { setShowCart, cart } = useContext(Context);

	const calculateCartItens = () => {
		const itemAmount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
		return itemAmount < 100 ? itemAmount : "99+";
	};

  return (
		<header>
			<div className="logo">
				<div className="logo-image">
					<img src={logoIconFill} alt="logo." className="logo-icon" />
					<span className="new">New</span>
				</div>
				<div className="title">
					<h1 className="shopping">Shopping</h1>
					<h1 className="cart-title">Cart</h1>
				</div>
			</div>

			<button
				type="button"
				className="cart-button"
				onClick={() => setShowCart((prevState) => (!prevState))}
			>	
				<div>
					{cart.length > 0 && <span className="items">
						{calculateCartItens()}
					</span>}
					<img src={cartIcon} alt="Cart." className="cart-icon" />
				</div>
			</button>
		</header>
  );
}

export default StoreHeader;
