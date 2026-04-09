import { useTranslation } from "react-i18next";
import { STATUS_STYLES, formatDate } from "../../utils.js";

export default function RequestInfo({ request }) {
  const { t } = useTranslation();
  const { guest_name, guest_email, requested_at, status, service } = request;
  return (
    <div className="flex-1 min-w-fit">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <span className="font-semibold text-slate-800">{guest_name}</span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STATUS_STYLES[status]}`}
        >
          {t(`dashboard.filters.${status}`)}
        </span>
      </div>

      <p className="text-sm text-slate-500 mb-2">{guest_email}</p>

      {service && (
        <p className="text-sm text-slate-600 mb-1">
          <span className="font-medium">
            {t("request_card.service_label")}:
          </span>{" "}
          {service.name}
          {service.location && (
            <span className="text-slate-400"> · {service.location}</span>
          )}
        </p>
      )}

      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
        <span className="flex items-center gap-1">
          <svg
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          {formatDate(requested_at)}
        </span>
      </div>
    </div>
  );
}
