const FormField = ({ label, required, children }) => {
  // Extract the original label text before translation (from translations)
  const childrenArray = Array.isArray(children) ? children : [children];
  const firstChild = childrenArray[0];
  const inputId = firstChild?.props?.id;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-slate-700 mb-1"
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  );
};

export const inputClass =
  'w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition';

export default FormField;
