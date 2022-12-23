import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import success from "../images/success.svg";

function FakeCheckout() {
	const { setCart } = useContext(Context);
	const [fakeLoad, setFakeLoad] = useState(true);

	const waitForFakeLoad = async () => {
		await new Promise(r => setTimeout(r, 2200));
		setFakeLoad(false);
		setCart([]);
	};

	waitForFakeLoad();

	return (
		<div className="finished">
			{fakeLoad
				? <div className="loading"/>
				: (
					<>
						<h1>Thanks for choosing us!</h1>
						<img src={success} alt="Success purchase art."/>
						<div className="navigate-links">
							<Link to="/store">Continue shopping</Link>
							<Link to="/">Log out</Link>
						</div>
					</>
				)}
		</div>
  );
}

export default FakeCheckout;
