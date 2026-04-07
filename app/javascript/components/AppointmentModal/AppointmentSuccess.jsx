import { useTranslation } from 'react-i18next';

const AppointmentSuccess = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <div className="px-6 py-10 text-center">
      <div className="text-5xl mb-4">🎉</div>
      <h3 className="font-semibold text-slate-800 text-lg mb-2">
        {t('appointment_modal.success_title')}
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        {t('appointment_modal.success_body')}
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-colors"
      >
        {t('appointment_modal.success_button')}
      </button>
    </div>
  );
};

export default AppointmentSuccess;
