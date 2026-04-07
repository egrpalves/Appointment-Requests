import { useState, useEffect, useCallback, useRef } from "react";
import { api } from "../components/api";
import { DEBOUNCE_MS } from "../utils";

export function useNutritionistSearch({ userCoords }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [nutritionists, setNutritionists] = useState([]);
  const [meta, setMeta] = useState({ total: 0, page: 1, total_pages: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debounceRef = useRef(null);

  const doSearch = useCallback(async (q, loc, page = 1, coords) => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getNutritionists({
        query: q,
        location: loc || "Braga",
        lat: coords?.lat,
        lng: coords?.lng,
        page,
        limit: 3,
      });
      setNutritionists(data.nutritionists);
      setMeta(data.meta);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      doSearch(query, location, 1, userCoords);
    }, DEBOUNCE_MS);
    return () => clearTimeout(debounceRef.current);
  }, [query, location, userCoords]);

  const handlePageChange = useCallback(
    (page) => doSearch(query, location, page, userCoords),
    [query, location, userCoords, doSearch],
  );

  const handleSearchClick = useCallback(
    () => doSearch(query, location, 1, userCoords),
    [query, location, userCoords, doSearch],
  );

  return {
    query,
    setQuery,
    location,
    setLocation,
    nutritionists,
    meta,
    loading,
    error,
    handlePageChange,
    handleSearchClick,
  };
}
