import React from "react";
import PropTypes from "prop-types";

function ItemCard({name, price, thumbnail}) {
	console.log(name, price, thumbnail);
  return (
		<div>
			<h2>{name}</h2>
			<img src={thumbnail} alt={name} />
			<h3>{`R$${price.toFixed(2)}`}</h3>
			<button type="button">Add to cart!</button>
		</div>
  );
}

ItemCard.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	thumbnail: PropTypes.string.isRequired,
};

export default ItemCard;
