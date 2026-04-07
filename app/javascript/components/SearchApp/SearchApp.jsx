import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useNutritionistSearch } from '../../hooks/useNutritionistSearch';
import AppHeader from '../AppHeader';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

export default function SearchApp() {
  const { t } = useTranslation();
  const { userCoords, locate } = useGeolocation();
  const {
    query,
    setQuery,
    location,
    setLocation,
    nutritionists,
    meta,
    loading,
    error,
    handlePageChange,
    handleSearchClick,
  } = useNutritionistSearch({ userCoords });

  const [selectedNutritionist, setSelectedNutritionist] = useState(null);
  const handleSchedule = useCallback((n) => setSelectedNutritionist(n), []);
  const handleCloseModal = useCallback(() => setSelectedNutritionist(null), []);

  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader linkHref="/dashboard" linkLabel={t('nav.professional_cta')} />
      <SearchBar
        query={query}
        location={location}
        onQueryChange={setQuery}
        onLocationChange={setLocation}
        onSearch={handleSearchClick}
        onLocate={locate}
      />
      <SearchResults
        nutritionists={nutritionists}
        meta={meta}
        loading={loading}
        error={error}
        userCoords={userCoords}
        onSchedule={handleSchedule}
        onPageChange={handlePageChange}
      />
      {selectedNutritionist && (
        <AppointmentModal
          nutritionist={selectedNutritionist}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
