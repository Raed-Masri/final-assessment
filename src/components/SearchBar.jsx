const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="fas fa-search text-gray-400"></i> {/* Search icon */}
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
