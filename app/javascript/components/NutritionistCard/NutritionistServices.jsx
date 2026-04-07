import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import NutritionistServiceItem from './NutritionistServiceItem';

export default function NutritionistServices({ services }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="space-y-1.5">
        {(expanded ? services : services.slice(0, 2)).map((svc) => (
          <NutritionistServiceItem key={svc.id} svc={svc} />
        ))}
      </div>

      {services.length > 2 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-xs text-brand-600 hover:text-brand-700 font-medium"
        >
          {expanded
            ? t('nutritionist.show_less')
            : t(
                services.length - 2 === 1
                  ? 'nutritionist.more_services_one'
                  : 'nutritionist.more_services_other',
                { count: services.length - 2 }
              )}
        </button>
      )}
    </>
  );
}
