import { memo } from "react";
const Logo = memo(() => {
  return (
    <a href="/" className="flex items-center gap-2 group">
      <img
        src="/logo.png"
        alt="Nutrium"
        className="h-8 w-auto brightness-0 invert"
      />
    </a>
  );
});

export default Logo;
