import { useTranslation } from 'react-i18next';
import Button from '../Button';

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const PinIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const LocateIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
    <path d="M12 5a7 7 0 100 14A7 7 0 0012 5z" strokeDasharray="2 2" />
  </svg>
);

const inputClass =
  'w-full py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition';

const SearchBar = ({
  query,
  location,
  onQueryChange,
  onLocationChange,
  onSearch,
  onLocate,
}) => {
  const { t } = useTranslation();
  return (
    <section className="bg-brand-500 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <h1 className="font-display text-3xl text-white mb-5">
          {t('search.title')}
        </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder={t('search.placeholder_query')}
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className={`${inputClass} pl-10 pr-4`}
            />
          </div>

          <div className="relative sm:w-56">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <PinIcon />
            </span>
            <input
              type="text"
              placeholder={t('search.placeholder_location')}
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              className={`${inputClass} pl-9 pr-10`}
            />
            <button
              onClick={onLocate}
              title="Use my location"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-500 transition-colors"
            >
              <LocateIcon />
            </button>
          </div>

          <Button
            onClick={onSearch}
            label={t('search.button')}
            style="primary"
            customClass="flex-0"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
