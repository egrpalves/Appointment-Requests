import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNutritionistList } from '../../hooks/useNutritionistList';
import { useAppointmentRequests } from '../../hooks/useAppointmentRequests';
import AppHeader from '../AppHeader';
import NutritionistSelector from './NutritionistSelector';
import RequestList from './RequestList';

export default function DashboardApp() {
  const { t } = useTranslation();
  const { nutritionists, selectedId, setSelectedId } = useNutritionistList();
  const [statusFilter, setStatusFilter] = useState('pending');
  const { requests, loading, actionError, handleAction } =
    useAppointmentRequests(selectedId, statusFilter);

  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader linkHref="/" linkLabel={t('dashboard.back_to_search')} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <h1 className="font-display text-3xl text-slate-800">
            {t('dashboard.title')}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {t('dashboard.subtitle')}
          </p>
        </div>

        <NutritionistSelector
          nutritionists={nutritionists}
          selectedId={selectedId}
          statusFilter={statusFilter}
          onSelect={setSelectedId}
          onFilterChange={setStatusFilter}
        />

        {actionError && (
          <div className="bg-red-50 text-red-700 rounded-xl p-3 text-sm mb-4">
            {actionError}
          </div>
        )}

        <RequestList
          requests={requests}
          loading={loading}
          statusFilter={statusFilter}
          onAction={handleAction}
        />
      </main>
    </div>
  );
}
