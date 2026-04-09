import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function RequestActions({ onAccept, onReject }) {
  const { t } = useTranslation();
  const [confirming, setConfirming] = useState(null);
  const [busy, setBusy] = useState(false);

  const handleConfirm = async () => {
    setBusy(true);
    if (confirming === "accepted") await onAccept();
    else await onReject();
    setBusy(false);
    setConfirming(null);
  };

  return (
    <div className="shrink-0 flex flex-col gap-2 self-center w-full sm:w-auto">
      {confirming ? (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-slate-600 text-center font-semibold">
            {confirming === "accepted"
              ? t("request_card.confirm_accept")
              : t("request_card.confirm_reject")}
          </p>
          <div className="flex gap-2 flex-col">
            <button
              onClick={handleConfirm}
              disabled={busy}
              className={`flex-1 px-3 py-1.5 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                confirming === "accepted"
                  ? "bg-brand-500 hover:bg-brand-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {busy ? (
                <span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                t("request_card.yes")
              )}
            </button>
            <button
              onClick={() => setConfirming(null)}
              disabled={busy}
              className="flex-1 px-3 py-1.5 border border-slate-200 text-slate-600 text-xs rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {t("request_card.no")}
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            onClick={() => setConfirming("accepted")}
            className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
          >
            {t("request_card.accept")}
          </button>
          <button
            onClick={() => setConfirming("rejected")}
            className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 text-sm font-medium rounded-xl transition-colors cursor-pointer"
          >
            {t("request_card.reject")}
          </button>
        </>
      )}
    </div>
  );
}
