import { useTranslation } from 'react-i18next';
import { FILTERS } from '../../utils';

const NutritionistSelector = ({
  nutritionists,
  selectedId,
  statusFilter,
  onSelect,
  onFilterChange,
}) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-2xl shadow-card p-4 mb-6 flex flex-col sm:flex-row sm:items-center gap-3">
      <label className="text-sm font-medium text-slate-700 whitespace-nowrap">
        {t('dashboard.viewing_as')}
      </label>
      <select
        value={selectedId ?? ''}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white cursor-pointer"
      >
        {nutritionists.map((n) => (
          <option key={n.id} value={n.id}>
            {n.name} – {n.specialty}
          </option>
        ))}
      </select>

      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${
              statusFilter === f
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t(`dashboard.filters.${f}`)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NutritionistSelector;
