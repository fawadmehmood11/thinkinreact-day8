const SearchBar = ({ value, stockOnly, handleInputChange, onInstockOnly }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleInputChange}
      />
      <p>
        <input type="checkbox" checked={stockOnly} onChange={onInstockOnly} />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
