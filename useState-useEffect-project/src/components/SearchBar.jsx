

const SearchBar = ({ searchQuery, onSearchChange }) => (
  <div className="control-group">
    <label htmlFor="search">Search Users</label>
    <input
      id="search"
      type="text"
      className="search-input"
      placeholder="Search by name, email, role, or department..."
      value={searchQuery}
      onChange={onSearchChange}
    />
  </div>
);

export default SearchBar;
