import React from "react";
import { Zap } from "lucide-react";

export default function SearchButton({ handleGifSearch, isSearching, query }) {
  return (
    <div>
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
  );
}
