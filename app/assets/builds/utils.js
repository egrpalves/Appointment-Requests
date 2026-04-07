// app/javascript/utils.js
var STATUS_STYLES = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  accepted: "bg-green-50 text-green-700 border-green-200",
  rejected: "bg-red-50 text-red-600 border-red-200"
};
var FILTERS = ["pending", "accepted", "rejected"];
var DEBOUNCE_MS = 400;
var MIN_DATE = () => {
  const now = /* @__PURE__ */ new Date();
  const offset = now.getTimezoneOffset() * 6e4;
  const localDate = new Date(now.getTime() - offset);
  return localDate.toISOString().slice(0, 16);
};
function formatDate(iso) {
  if (!iso) return "\u2014";
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }) + " at " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}
export {
  DEBOUNCE_MS,
  FILTERS,
  MIN_DATE,
  STATUS_STYLES,
  formatDate
};
//# sourceMappingURL=/assets/utils.js.map
