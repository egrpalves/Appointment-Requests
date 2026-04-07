import { useState, useEffect } from "react";

export function useGeolocation() {
  const [userCoords, setUserCoords] = useState(null);

  const updateCoords = (lat, lng) => {
    setUserCoords((prev) => {
      if (prev?.lat === lat && prev?.lng === lng) return prev;
      return { lat, lng };
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => updateCoords(lat, lng),
      () => setUserCoords(null),
    );
  }, []);

  const locate = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => updateCoords(lat, lng),
    );
  };

  return { userCoords, locate };
}
