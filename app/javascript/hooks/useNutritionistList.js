import { useState, useEffect } from "react";
import { api } from "../components/api";

export function useNutritionistList() {
  const [nutritionists, setNutritionists] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    api.getAllNutritionists().then((d) => {
      setNutritionists(d.nutritionists || []);
      if (d.nutritionists?.length > 0) setSelectedId(d.nutritionists[0].id);
    });
  }, []);

  const selectedNutritionist = nutritionists.find((n) => n.id === selectedId);

  return { nutritionists, selectedId, setSelectedId, selectedNutritionist };
}
