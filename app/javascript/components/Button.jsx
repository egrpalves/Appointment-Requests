import { memo } from "react";
const Button = memo(({ label, onClick, style, title, customClass }) => {
  let buttonStyle = "";

  switch (style) {
    case "primary":
      buttonStyle =
        "cursor-pointer text-white bg-orange-400 hover:bg-orange-300";
      break;
    case "secondary":
      buttonStyle = "cursor-pointer text-white bg-brand-400 hover:bg-brand-300";
      break;
    case "secondary-disabled":
      buttonStyle = "bg-brand-300 text-white cursor-not-allowed";
      break;
    case "outline":
      buttonStyle =
        "cursor-pointer text-brand-400 border border-brand-400 hover:bg-brand-50";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`w-full px-6 py-3 font-semibold rounded-xl transition-colors text-sm shadow-sm ${buttonStyle} ${customClass}`}
      title={title}
    >
      {label}
    </button>
  );
});

export default Button;
