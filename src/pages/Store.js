import React, { useContext } from "react";
import StoreHeader from "../components/StoreHeader";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";
import Context from "../context/Context";
import ItemCard from "../components/ItemCard";

function Store() {
	const { problem, searchResults } = useContext(Context);

  return (
		<div className="store">
			<StoreHeader />
			<Cart />
			<SearchBar />
			{ problem.length > 0 
				?<p>{problem}</p>
				: searchResults.map((result, index) => 
					<ItemCard 
						name={result.title}
						price={result.price}
						thumbnail={result.thumbnail}
						id={result.id}
						key={index} />)}
		</div>
  );
}

export default Store;
