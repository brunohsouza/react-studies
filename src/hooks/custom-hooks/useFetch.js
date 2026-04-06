/**
 * useFetch - Custom hook for fetching JSON data from a URL.
 *
 * Accepts a `url` string and triggers a fetch request whenever the URL changes.
 * Internally manages the response data with `useState`, and uses `useEffect` to
 * run the fetch side effect. Returns the parsed JSON data (or `null` before the
 * first successful response).
 *
 * @param {string} url - The endpoint to fetch data from.
 * @returns {any} data - The parsed JSON response, or null while loading.
 *
 * Usage:
 *   const data = useFetch('https://api.example.com/items');
 */
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json));
  }, [url]);

  return data;
}

export default useFetch;