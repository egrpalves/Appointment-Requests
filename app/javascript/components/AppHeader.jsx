import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";

const AppHeader = ({ linkHref, linkLabel }) => (
  <header className="bg-brand-500 sticky top-0 z-40 shadow-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 flex-wrap">
      <Logo />
      <a
        href={linkHref}
        className="text-sm text-white hover:text-brand-800 flex-1 text-center min-w-20"
      >
        {linkLabel}
      </a>
      <LanguageSelector />
    </div>
  </header>
);

export default AppHeader;
