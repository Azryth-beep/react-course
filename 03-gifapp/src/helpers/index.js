export const apiKey = "HpMjKygTKpqAoafADDxDtH3JzKsZT4mw";

export const gifSearch = async (query) => {
  if (!query.trim()) return;

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=5`
  );
  return await response.json();
};