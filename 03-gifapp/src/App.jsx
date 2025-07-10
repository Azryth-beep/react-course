import React, { useEffect, useState } from "react";
import { Search, Zap } from "lucide-react";

const apiKey = "HpMjKygTKpqAoafADDxDtH3JzKsZT4mw";

const gifSearch = async (query, apiKey) => {
  if (!query.trim()) return;

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=5`
  );
  return await response.json();
};

export default function ModernGifSearch() {
  const [query, setQuery] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("cat");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleGifSearch = async () => {
    setIsSearching(true);
    const response = await gifSearch(query, apiKey);
    setIsSearching(false);
    setResults(response.data.map((gif) => gif));
    setSearchedTerm(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGifSearch();
    }
  };

  useEffect(() => {
    const initalGifSearch = async () => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${apiKey}&limit=5`
      );
      const { data } = await response.json();
      setResults(data.map((gif) => gif));
      setIsSearching(false);
    };
    initalGifSearch();
  }, []);

  // const popularSearches = [
  //   "cats",
  //   "dancing",
  //   "reaction",
  //   "funny",
  //   "celebration",
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Main search container */}
        <div className="relative mb-8">
          {/* Animated background blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl animate-pulse"></div>

          {/* Main search box */}
          <div
            className={`relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 ${
              isFocused
                ? "shadow-2xl shadow-emerald-500/25 scale-105 border-emerald-400/50"
                : "shadow-xl border-gray-700/50"
            }`}
          >
            {/* Title */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                GIF Search
              </h1>
              <p className="text-gray-300 text-lg">
                Discover the perfect GIF for every moment
              </p>
            </div>

            {/* Search input container */}
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

                  {/* Search button */}
                  <button
                    onClick={handleGifSearch}
                    disabled={isSearching || !query.trim()}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isSearching || !query.trim()
                        ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:from-emerald-600 hover:to-blue-600 hover:scale-105 active:scale-95"
                    }`}
                  >
                    {isSearching ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-gray-400/30 border-t-white rounded-full animate-spin"></div>
                        <span>Searching...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        <span>Search</span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Popular searches */}
            {/* <div className="text-center">
              <p className="text-gray-400 text-sm mb-4 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Popular searches
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="px-4 py-2 bg-black/30 hover:bg-black/50 text-gray-300 hover:text-white rounded-full text-sm transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/70"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Results placeholder */}
        {isSearching && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-black/30 rounded-2xl backdrop-blur-sm border border-gray-600/50"
              ></div>
            ))}
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <>
            <span className="text-3xl font-extrabold tracking-tight text-left mb-4 text-gray-100">
              {searchedTerm.toUpperCase()}
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {/* {results.map(({ id, images, alt_text }) => (
                <img
                  key={id}
                  src={images.original.url}
                  alt={alt_text}
                  className="aspect-square rounded-2xl"
                />
              ))} */}
            </div>
          </>
        )}
        {/* Results end */}
      </div>
    </div>
  );
}
