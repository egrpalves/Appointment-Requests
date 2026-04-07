import { useTranslation } from 'react-i18next';
import React from 'react';

const PIN_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5z" />
  </svg>
);

const CLOCK_ICON = (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export default function NutritionistServiceItem({ svc }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
      <span className="flex items-center gap-1 text-slate-600">
        {PIN_ICON}
        <span className="font-medium">{svc.name}</span>
      </span>
      <span className="text-slate-400 flex items-center gap-1">
        {PIN_ICON}
        {svc.location}
      </span>
      <span className="text-slate-400 flex items-center gap-1">
        {CLOCK_ICON}
        {svc.duration_minutes} {t('nutritionist.min')}
      </span>
      <span className="font-semibold text-slate-700">
        € {svc.price.toFixed(2)}
      </span>
      {svc.distance_km != null && (
        <span className="text-brand-600 text-xs font-medium">
          📍 {t('nutritionist.km_away', { distance: svc.distance_km })}
        </span>
      )}
    </div>
  );
}
