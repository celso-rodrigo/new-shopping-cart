import React, { useContext, useState } from "react";
import CartItemCard from "../components/CartItemCard";
import Context from "../context/Context";
import PropTypes from "prop-types";

function CheckoutForm({setBuying}) {
	const { cart, getTotal } = useContext(Context);

	const contryList = [
		"Afghanistan",
		"Albania",
		"Angola",
		"Argentina",
		"Bangladesh",
		"Barbados",
		"Bolivia",
		"Brazil",
		"Cameroon",
		"Canada",
		"Colombia",
		"Congo",
		"Dominica",
		"Finland"
	];

	const [problem, setProblem] = useState("");
	const [paymentInfo, setPaymentInfo] = useState ({
		card: "",
		cardNumber: "",
		expiration: "",
		securityCode: "",
		firstName: "",
		lastName: "",
		adressOne: "",
		city: "",
		postal: "",
		phone: "",
		contry: "",
	});

	const clearNumbers = (input) => (input.replace(/[0-9]/g, ""));

	const clearWords = (input) => (input.replace(/\D/g,""));

	const formatDate = (input) => {
		const date = clearWords(input);
		if (input.length <= 2) return date;
		return `${date.slice(0, 2)}/${date.slice(2)}`;
	};

	const formatCellphone = (input) => {
		const cellphone = clearWords(input);
		if (input.length <= 2) return cellphone;
		if (input.length <= 9) return `(${cellphone.slice(0, 2)}) ${cellphone.slice(2)}`;
		return `(${cellphone.slice(0, 2)}) ${cellphone.slice(2, 7)} - ${cellphone.slice(7)}`;
	};

	const validatePaymentInfo = () => {
		const allFields = Object.values(paymentInfo).every((value) => value !== "");
		if (!allFields) return setProblem("Please fulfill all obligatory fields.");
		if (paymentInfo.cardNumber.length !== 16) return setProblem("invalid card number.");
		const validNumber = paymentInfo.phone.replace(/\(|\)| /g, "").length !== 12;
		if (validNumber) return setProblem("invalid phone number.");
		setBuying(false);
	};

	return (
		<form>
			<div>
				<h3>review your order</h3>
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
				{getTotal()}
			</div>
			<div>
				<h3>Payment Method</h3>
				<select
					defaultValue=""
					onChange={({target}) =>
					setPaymentInfo((prevState) =>
						({...prevState, card: target.value}))}
				>
					<option disabled hidden value="">Payment method</option>
					<option value="visa">Visa</option>
					<option value="hipercard">Hipercard</option>
					<option value="mastercard">MasterCard</option>
				</select>
				<label>
					Card number
					<input
						type="text"
						maxLength="16"
						value={paymentInfo.cardNumber}
						onChange={({target}) =>
							setPaymentInfo((prevState) =>
								({...prevState, cardNumber: clearWords(target.value)}))}
					/>
				</label>
				<label>
					Expiration date
					<input
						type="text"
						maxLength="5"
						value={paymentInfo.expiration}
						onChange={({target}) =>
							setPaymentInfo((prevState) =>
								({...prevState, expiration: formatDate(target.value)}))}
					/>
				</label>
				<label>
					Security code
					<input 
						type="text"
						maxLength="3"
						value={paymentInfo.securityCode}
						onChange={({target}) =>
							setPaymentInfo((prevState) =>
								({...prevState, securityCode: clearWords(target.value)}))}
					/>
				</label>
			</div>
			<div>
				<h3>Billing Information</h3>
				<label>
					First name
					<input
						type="text"
						value={paymentInfo.firstName}
						onChange={({target}) =>
							setPaymentInfo((prevState) =>
								({...prevState, firstName: clearNumbers(target.value)}))}
					/>
				</label>
				<label>
					Last name
					<input
						type="text"
						value={paymentInfo.lastName}
						onChange={({target}) =>
							setPaymentInfo((prevState) =>
								({...prevState, lastName: clearNumbers(target.value)}))}
					/>
				</label>
				<label>
					Billing address
					<input
						type="text"
						value={paymentInfo.adressOne}
						onChange={({target}) =>
							setPaymentInfo((prevState) =>
								({...prevState, adressOne: target.value}))}
					/>
				</label>
				<label>
					Billing address, line 2
					<input type="text" />
				</label>
				<label>
					City
					<input
						type="text"
						value={paymentInfo.city}
						onChange={({target}) =>
							setPaymentInfo((prevState) =>
								({...prevState, city: clearNumbers(target.value)}))}
					/>
				</label>
				<label>
					Zip or postal code
					<input
						type="text"
						maxLength="5"
						value={paymentInfo.postal}
						onChange={({target}) =>
							setPaymentInfo((prevState) =>
								({...prevState, postal: clearWords(target.value)}))}
					/>
				</label>
				<label>
					Phone number
					<input
						type="text"
						maxLength="17"
						value={paymentInfo.phone}
						onChange={({target}) =>
							setPaymentInfo((prevState) =>
								({...prevState, phone: formatCellphone(target.value)}))}
					/>
				</label>
				<select
					defaultValue=""
					onChange={({target}) =>
					setPaymentInfo((prevState) =>
						({...prevState, contry: target.value}))}
				>
					<option disabled hidden value="">Country</option>
					{contryList.map((country) => <option key={country}>{country}</option>)}
				</select>
			</div>
			<p className="problem">{problem.length > 0 && problem}</p>
			<button type="button" onClick={validatePaymentInfo}>Finish buying</button>
		</form>
  );
}

CheckoutForm.propTypes = {
	setBuying: PropTypes.func.isRequired,
};

export default CheckoutForm;
