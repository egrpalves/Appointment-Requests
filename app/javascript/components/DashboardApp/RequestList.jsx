import { useTranslation } from 'react-i18next';
import RequestCard from '../RequestCard/RequestCard';

const EmptyState = ({ statusFilter, t }) => (
  <div className="bg-white rounded-2xl shadow-card p-10 text-center text-slate-400">
    <div className="text-4xl mb-3">📭</div>
    <p className="font-medium">
      {t('dashboard.no_requests', { status: statusFilter })}
    </p>
    <p className="text-sm mt-1">
      {t(
        statusFilter === 'pending'
          ? 'dashboard.no_requests_hint_pending'
          : 'dashboard.no_requests_hint_other',
        { status: statusFilter }
      )}
    </p>
  </div>
);

const RequestList = ({ requests, loading, statusFilter, onAction }) => {
  const { t } = useTranslation();
  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div
          role="status"
          className="w-10 h-10 border-4 border-brand-200 border-t-brand-500 rounded-full animate-spin"
        />
      </div>
    );
  }

  if (requests.length === 0) {
    return <EmptyState statusFilter={statusFilter} t={t} />;
  }

  return (
    <div className="space-y-4">
      {requests.map((req) => (
        <RequestCard
          key={req.id}
          request={req}
          statusFilter={statusFilter}
          onAccept={() => onAction(req.id, 'accepted')}
          onReject={() => onAction(req.id, 'rejected')}
        />
      ))}
    </div>
  );
};

export default RequestList;
