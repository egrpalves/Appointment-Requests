const ARROW_BUTTON_CLASS =
  "w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer";
export default function Pagination({ meta, onPageChange }) {
  const { page, total_pages } = meta;
  if (total_pages <= 1) return null;

  const pages = Array.from({ length: total_pages }, (_, i) => i + 1);

  return (
    <nav
      className="flex items-center justify-center gap-1"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={ARROW_BUTTON_CLASS}
      >
        ‹
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-9 h-9 rounded-xl text-sm font-medium cursor-pointer ${
            p === page
              ? "bg-button-secondary text-button-secondary-text shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === total_pages}
        className={ARROW_BUTTON_CLASS}
      >
        ›
      </button>
    </nav>
  );
}
