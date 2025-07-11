import React, { useEffect, useState } from "react";
import { Search, Zap, Clock, X } from "lucide-react";
import { gifSearch } from "./helpers";
import { SearchButton, GifGrid, SearchHistory } from "./components";

export default function ModernGifSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleGifSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    const response = await gifSearch(query);
    setIsSearching(false);

    const newSearch = query.trim();
    const newResults = response.data.map((gif) => gif);

    setSearchResults((prev) => {
      const filtered = prev.filter((item) => item.searchTerm !== newSearch);
      return [{ searchTerm: newSearch, results: newResults }, ...filtered];
    });

    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item !== newSearch);
      return [newSearch, ...filtered].slice(0, 5);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGifSearch();
    }
  };

  useEffect(() => {
    const initalGifSearch = async () => {
      const response = await gifSearch("cats");
      setSearchResults([
        { searchTerm: "cats", results: response.data.map((gif) => gif) },
      ]);
      setIsSearching(false);
    };
    initalGifSearch();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl animate-pulse"></div>

          <div
            className={`relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 ${
              isFocused
                ? "shadow-2xl shadow-emerald-500/25 scale-105 border-emerald-400/50"
                : "shadow-xl border-gray-700/50"
            }`}
          >
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                GIF Search
              </h1>
              <p className="text-gray-300 text-lg">
                Discover the perfect GIF for every moment
              </p>
            </div>

            <div className="relative mb-6">
              <div
                className={`bg-black/30 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                  isFocused
                    ? "border-emerald-400/50 shadow-lg shadow-emerald-500/20"
                    : "border-gray-600/50"
                }`}
              >
                <div className="flex items-center px-6 py-4">
                  <Search
                    className={`w-6 h-6 transition-all duration-300 ${
                      isFocused ? "text-emerald-400" : "text-gray-400"
                    }`}
                  />
                  <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search for the perfect GIF..."
                    className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg px-4 outline-none"
                  />
                  <SearchButton
                    handleGifSearch={handleGifSearch}
                    isSearching={isSearching}
                    query={query}
                  />
                </div>
              </div>
            </div>

            <SearchHistory
              searchHistory={searchHistory}
              setSearchHistory={setSearchHistory}
              setQuery={setQuery}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          </div>
        </div>
        <GifGrid isSearching={isSearching} searchResults={searchResults} />
      </div>
    </div>
  );
}
