import React, { useContext } from "react";
import StoreHeader from "../components/StoreHeader";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";
import Context from "../context/Context";
import ItemCard from "../components/ItemCard";

function Store() {
	const { problem, searchResults, productsLoading } = useContext(Context);

	const loadCard = () => {
		if (productsLoading) return (<h2>Loading...</h2>);
		return searchResults.map((result, index) =>(
					<ItemCard 
						name={result.title}
						price={result.price}
						thumbnail={result.thumbnail}
						id={result.id}
						key={index} />
		));
	};

  return (
		<div className="store">
			<StoreHeader />
			<Cart />
			<SearchBar />
			{ problem.length > 0
				? <p>{problem}</p>
				: loadCard() }
		</div>
  );
}

export default Store;
