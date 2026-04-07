import { useTranslation } from 'react-i18next';
import NutritionistCard from '../NutritionistCard/NutritionistCard';
import Pagination from '../Pagination';

const StatusBar = ({ total, shown, userCoords, t }) => (
  <p className="text-sm text-slate-500 mb-5">
    {total === 0
      ? t('search.no_results')
      : t(
          total === 1
            ? 'search.results_count_one'
            : 'search.results_count_other',
          { shown, total }
        )}
    {userCoords && total > 0 && (
      <span className="ml-2 inline-flex items-center gap-1 text-brand-600 text-xs font-medium">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5z" />
        </svg>
        {t('search.sorted_by_distance')}
      </span>
    )}
  </p>
);

const SearchResults = ({
  nutritionists,
  meta,
  loading,
  error,
  userCoords,
  onSchedule,
  onPageChange,
}) => {
  const { t } = useTranslation();
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {!loading && !error && (
        <StatusBar
          total={meta.total}
          shown={nutritionists.length}
          userCoords={userCoords}
          t={t}
        />
      )}

      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-500 rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-700 rounded-xl p-4 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && nutritionists.length > 0 && (
        <>
          <div className="space-y-4">
            {nutritionists.map((n) => (
              <NutritionistCard
                key={n.id}
                nutritionist={n}
                onSchedule={onSchedule}
              />
            ))}
          </div>
          <div className="mt-8">
            <Pagination meta={meta} onPageChange={onPageChange} />
          </div>
        </>
      )}
    </main>
  );
};

export default SearchResults;
