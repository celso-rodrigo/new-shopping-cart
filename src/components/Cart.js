import React, { useContext } from "react";
import Context from "../context/Context";

function Cart() {
	const { showCart } = useContext(Context);
  return (
		<aside className={`cart ${showCart ? "" : "cart-hidden"}`}>
			wip
		</aside>
  );
}

export default Cart;
