import React, { useContext } from "react";
import StoreHeader from "../components/StoreHeader";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";
import Context from "../context/Context";
import ItemCard from "../components/ItemCard";

function Store() {
	const { problem, searchResults, productsLoading } = useContext(Context);

	const loadCard = () => {
		if (productsLoading) return (<div className="loading" />);
		console.log(searchResults);
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
		<>
			<Cart />
			<div className="store">
				<StoreHeader />
				<SearchBar />
				<div className="item-card-container">
					{ problem.length > 0
						? <p className="store-problem">{problem}</p>
						: loadCard() }
				</div>
			</div>
		</>
  );
}

export default Store;
