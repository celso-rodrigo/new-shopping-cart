import React, { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import FakeCheckout from "../components/FakeCheckout";

function Checkout() {
	const [buying, setBuying] = useState(trueg);

  return (
		<div>
			{buying
				? <CheckoutForm setBuying={setBuying}/>
				: <FakeCheckout />
			}
		</div>
  );
}

export default Checkout;
