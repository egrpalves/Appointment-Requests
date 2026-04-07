const ModalHeader = ({ title, subtitle, onClose }) => (
  <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
    <div>
      <h2 className="font-semibold text-slate-800 text-lg">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
    </div>
    <button
      onClick={onClose}
      className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  </div>
);

export default ModalHeader;
