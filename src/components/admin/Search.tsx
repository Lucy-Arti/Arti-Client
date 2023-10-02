const Search = ({ onSubmit }:any) => {
	const handleSubmit = (event:any) => {
		event.preventDefault();
		onSubmit(event.target.elements.filter.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name="filter" />
			<button>Search</button>
		</form>
	);
};

export default Search;
