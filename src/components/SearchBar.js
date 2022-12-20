import React, { useContext, useState } from "react";
import Context from "../context/Context";
import glass from "../images/glass.svg";

function SearchBar() {
	const [search, setSearch] = useState("");
	const [lastSearch, setLastSearch] = useState("");
	const [filterType, setFilterType] = useState("");

	const { setProblem, setSearchResults, searchResults, setProductsLoading } = useContext(Context);

	const filterResults = (resultsArr, filter) => {
    switch (filter) {
      case "low":
        return setSearchResults(resultsArr.sort((a, b) => a.price - b.price));
      case "high":
        return setSearchResults(resultsArr.sort((a, b) => b.price - a.price));
      case "name-asc":
        return setSearchResults(resultsArr.sort((a, b) => (
					a.title.replace(" ", "").localeCompare(b.title))));
      case "name-desc":
        return setSearchResults(resultsArr.sort((a, b) => (
					b.title.replace(" ", "").localeCompare(a.title))));
      default:
        return setSearchResults(resultsArr);
		}
  };

	const handleFilter = (newFilter) => {
		if(filterType !== newFilter) {
			filterResults([...searchResults], newFilter);
			setFilterType(newFilter);
		}
	};

	const searchProducts = async (query) => {
		setProductsLoading(true);
		const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
		const results = await fetch(url);
		if (results.status !== 200) return setProblem("an error has occurred. Try again later. :(");
		const json = await results.json();
		if (!json.results.length) return setProblem("No results found.");
		filterResults(json.results, filterType);
		setProductsLoading(false);
	};

	const resetSearch = async (keyPressed, search) => {
		if (search === lastSearch || keyPressed !== "Enter") return;
		setProblem("");
		setSearchResults([]);
		await searchProducts(search);
		setLastSearch(search);
	};

  return (
		<>
			<input 
				type="text"
				value={search}
				onChange={({target}) => setSearch(target.value)}
				onKeyUp={({key, target}) => resetSearch(key, target.value)}
			/>
			<button
				type="button"
				onClick={() => resetSearch("Enter", search)}
			>
				<img src={glass} alt="Search products." />
			</button>

			<select value="" onChange={({target}) => handleFilter(target.value)}>
				<option value="" disabled hidden>Sort By</option>
				<option value="low">Lowest Price</option>
				<option value="high">Highest Price</option>
				<option value="name-asc">Name (asc)</option>
				<option value="name-desc">Name (desc)</option>
			</select>
		</>
  );
}

export default SearchBar;
