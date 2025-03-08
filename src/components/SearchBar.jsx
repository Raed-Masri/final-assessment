const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search tasks..."
      className=" p-2 border border-gray-300 rounded-lg bg-white text-gray-700"
    />
  );
};

export default SearchBar;
