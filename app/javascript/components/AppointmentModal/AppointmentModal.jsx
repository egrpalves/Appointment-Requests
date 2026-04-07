import { useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../api';
import ModalOverlay from './ModalOverlay';
import ModalHeader from './ModalHeader';
import AppointmentForm from './AppointmentForm';
import AppointmentSuccess from './AppointmentSuccess';

const INITIAL_FORM = (services) => ({
  guest_name: '',
  guest_email: '',
  service_id: services[0]?.id ?? '',
  requested_at: '',
});

const AppointmentModal = memo(({ nutritionist, onClose }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(() => INITIAL_FORM(nutritionist.services));
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field, value) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      await api.createAppointment({
        nutritionist_id: nutritionist.id,
        service_id: form.service_id || undefined,
        guest_name: form.guest_name,
        guest_email: form.guest_email,
        requested_at: form.requested_at,
      });
      setStatus('success');
    } catch (e) {
      setStatus('error');
      const message = e.message;
      if (message.includes('pending appointment request already exists')) {
        setErrorMsg(t('appointment_modal.error_pending_exists'));
      } else {
        setErrorMsg(message);
      }
    }
  };

  return (
    <ModalOverlay onClose={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label={t('appointment_modal.title')}
      >
        <ModalHeader
          title={t('appointment_modal.title')}
          subtitle={t('appointment_modal.subtitle', {
            name: nutritionist.name,
          })}
          onClose={onClose}
        />
        {status === 'success' ? (
          <AppointmentSuccess onClose={onClose} />
        ) : (
          <AppointmentForm
            form={form}
            services={nutritionist.services}
            status={status}
            errorMsg={errorMsg}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onClose={onClose}
          />
        )}
      </div>
    </ModalOverlay>
  );
});

export default AppointmentModal;
