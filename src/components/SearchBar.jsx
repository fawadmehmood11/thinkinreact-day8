const SearchBar = (props) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.value}
        onChange={(e) => props.handleInputChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={props.stockOnly}
          onChange={(e) => props.onInstockOnly(e.target.checked)}
        />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
