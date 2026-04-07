const BASE = "/api";

export async function fetchJSON(path, options = {}) {
  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");
  const res = await fetch(BASE + path, {
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json();
  if (!res.ok)
    throw new Error(data.errors?.join(", ") || data.error || "Request failed");
  return data;
}

export const api = {
  getNutritionists: (params) => {
    const qs = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v != null && v !== ""),
    ).toString();
    return fetchJSON(`/nutritionists?${qs}`);
  },

  getAllNutritionists: () => {
    return fetchJSON("/nutritionists");
  },

  createAppointment: (payload) =>
    fetchJSON("/appointment_requests", {
      method: "POST",
      body: JSON.stringify({ appointment_request: payload }),
    }),

  getRequests: (nutritionistId, status = "pending") =>
    fetchJSON(
      `/appointment_requests?nutritionist_id=${nutritionistId}&status=${status}`,
    ),

  updateRequest: (id, status) =>
    fetchJSON(`/appointment_requests/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};
