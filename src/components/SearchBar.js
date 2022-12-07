import React, { useContext, useState } from "react";
import Context from "../context/Context";
import glass from "../images/glass.svg";

function SearchBar() {
	const [search, setSearch] = useState("");
	const [lastSearch, setLastSearch] = useState("");

	const { setProblem, setSearchResults } = useContext(Context);

	const searchProducts = async (query) => {
		const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
		const results = await fetch(url);
		if (results.status !== 200) return setProblem("an error has occurred. Try again later. :(");
		const json = await results.json();
		if (!json.results.length) return setProblem("No results found.");
		setSearchResults(json.results);
	};

	const resetSearch = (search) => {
		if (search === lastSearch) return;
		setProblem("");
		setSearchResults([]);
		searchProducts(search);
		setLastSearch(search);
	};

  return (
		<>
			<input 
				type="text"
				value={search}
				onChange={({target}) => setSearch(target.value)}
			/>
			<button
				type="button"
				onClick={() => resetSearch(search)}
			>
				<img src={glass} alt="Search products." />
			</button>
		</>
  );
}

export default SearchBar;
