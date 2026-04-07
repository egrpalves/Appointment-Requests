import { useState, useEffect } from "react";
import { api } from "../components/api";

export function useAppointmentRequests(selectedId, statusFilter) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionError, setActionError] = useState(null);

  useEffect(() => {
    if (!selectedId) return;
    setLoading(true);
    setActionError(null);
    api
      .getRequests(selectedId, statusFilter)
      .then(setRequests)
      .catch(() => setRequests([]))
      .finally(() => setLoading(false));
  }, [selectedId, statusFilter]);

  const handleAction = async (requestId, action) => {
    setActionError(null);
    try {
      const updated = await api.updateRequest(requestId, action);
      setRequests((prev) =>
        prev
          .map((r) => (r.id === requestId ? updated : r))
          .filter((r) => r.status === statusFilter),
      );
    } catch (e) {
      setActionError(e.message);
    }
  };

  return { requests, loading, actionError, handleAction };
}
