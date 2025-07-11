import React from "react";

export default function GifGrid({ isSearching, searchResults }) {
  return (
    <div>
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

      {searchResults.length > 0 && (
        <div className="space-y-8">
          {searchResults.map(({ searchTerm, results }, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold tracking-tight text-gray-100">
                  {searchTerm.toUpperCase()}
                </span>
                <span className="text-gray-400 text-sm">
                  {results.length} GIFs found
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {results.map(({ id, images, alt_text }) => (
                  <img
                    key={id}
                    src={images.original.url}
                    alt={alt_text}
                    className="aspect-square rounded-2xl hover:scale-105 transition-transform duration-200"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
