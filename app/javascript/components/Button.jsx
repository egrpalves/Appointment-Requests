import { memo } from "react";
const Button = memo(
  ({ label, onClick, style, title, customClass, isDisabled }) => {
    let buttonStyle = "";

    switch (style) {
      case "primary":
        buttonStyle =
          "cursor-pointer text-button-primary-text bg-button-primary hover:bg-button-primary-hover";
        break;
      case "secondary":
        buttonStyle =
          "cursor-pointer text-button-secondary-text bg-button-secondary hover:bg-brand-300 disabled:bg-button-secondary-disabled disabled:cursor-not-allowed";
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
        className={`w-full px-6 py-3 font-semibold rounded-lg text-sm shadow-sm ${buttonStyle} ${customClass}`}
        title={title}
        disabled={isDisabled}
      >
        {label}
      </button>
    );
  },
);

export default Button;
