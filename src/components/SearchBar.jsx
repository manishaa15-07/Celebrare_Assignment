/**
 * SearchBar component - renders a search input for filtering photos by author name.
 *
 * @param {{ searchTerm: string, onSearchChange: (value: string) => void }} props
 */
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="relative">
        {/* Search icon */}
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by author name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
}

export default SearchBar;

