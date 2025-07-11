import React from "react";
import { Clock, X } from "lucide-react";
import { gifSearch } from "../helpers";

const SearchHistory = ({
  searchHistory,
  setQuery,
  setSearchResults,
  searchResults,
  setSearchHistory,
}) => {
  const handleHistoryClick = async (searchTerm) => {
    setQuery(searchTerm);

    const existingResults = searchResults.find(
      (item) => item.searchTerm === searchTerm
    );
    if (existingResults) {
      return;
    }

    const response = await gifSearch(searchTerm);
    const newResults = response.data.map((gif) => gif);

    setSearchResults((prev) => {
      const filtered = prev.filter((item) => item.searchTerm !== searchTerm);
      return [{ searchTerm: searchTerm, results: newResults }, ...filtered];
    });
  };

  const removeFromHistory = (searchTerm) => {
    setSearchHistory((prev) => prev.filter((item) => item !== searchTerm));
    setSearchResults((prev) =>
      prev.filter((item) => item.searchTerm !== searchTerm)
    );
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold text-gray-200 mb-2">
        Search History
      </h2>
      {searchHistory.length > 0 ? (
        <ul className="space-y-2">
          {searchHistory.map((term, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-800/50 rounded-lg p-2 hover cashier:bg-gray-700/50 transition-colors"
            >
              <button
                onClick={() => handleHistoryClick(term)}
                className="flex items-center text-gray-200 hover:text-emerald-400 transition-colors"
              >
                <Clock className="w-4 h-4 mr-2" />
                {term}
              </button>
              <button
                onClick={() => removeFromHistory(term)}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No search history yet.</p>
      )}
    </div>
  );
};

export default SearchHistory;
