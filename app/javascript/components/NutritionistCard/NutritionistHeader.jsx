export default function NutritionistHeader({ name, specialty }) {
  return (
    <div className="flex flex-wrap items-start gap-2 mb-1">
      <h2 className="font-semibold text-slate-800 text-lg leading-tight">
        {name}
      </h2>
      {specialty && (
        <span className="inline-block text-xs font-medium bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full border border-brand-100">
          {specialty}
        </span>
      )}
    </div>
  );
}
