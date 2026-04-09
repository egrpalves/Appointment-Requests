import { useTranslation } from "react-i18next";
import FormField, { inputClass } from "./FormField";
import Button from "../Button";
import { MIN_DATE } from "../../utils";

const AppointmentForm = ({
  form,
  services,
  status,
  errorMsg,
  onChange,
  onSubmit,
  onClose,
}) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={onSubmit} className="px-6 py-5 space-y-4">
      <FormField label={t("appointment_modal.guest_name")} required>
        <input
          type="text"
          required
          value={form.guest_name}
          onChange={(e) => onChange("guest_name", e.target.value)}
          placeholder={t("appointment_modal.guest_name_placeholder")}
          className={inputClass}
        />
      </FormField>

      <FormField label={t("appointment_modal.guest_email")} required>
        <input
          type="email"
          inputMode="email"
          required
          value={form.guest_email}
          onChange={(e) => onChange("guest_email", e.target.value)}
          placeholder={t("appointment_modal.guest_email_placeholder")}
          className={inputClass}
        />
        <p className="text-xs text-slate-500 mt-2">
          {t("appointment_modal.guest_email_help")}
        </p>
      </FormField>

      {services.length > 1 && (
        <FormField label={t("appointment_modal.service")}>
          <select
            value={form.service_id}
            onChange={(e) => onChange("service_id", e.target.value)}
            className={`${inputClass} bg-white`}
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} – {s.location} – €{s.price.toFixed(2)} (
                {s.duration_minutes} min)
              </option>
            ))}
          </select>
        </FormField>
      )}

      <FormField label={t("appointment_modal.datetime")} required>
        <input
          type="datetime-local"
          required
          min={MIN_DATE()}
          value={form.requested_at}
          onChange={(e) => onChange("requested_at", e.target.value)}
          className={inputClass}
        />
      </FormField>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 rounded-xl px-3 py-2">
          {errorMsg || t("appointment_modal.error_generic")}
        </p>
      )}

      <div className="flex gap-3 pt-1">
        <Button
          type="button"
          onClick={onClose}
          style="outline"
          label={t("appointment_modal.cancel")}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          style="primary"
          label={t("appointment_modal.submit")}
        />
      </div>
    </form>
  );
};
export default AppointmentForm;
