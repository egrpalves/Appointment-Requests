const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/javascript/**/*.{js,jsx}",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/assets/tailwind/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9f7",
          100: "#dcf2ed",
          200: "#bbe5db",
          300: "#8dd3c3",
          400: "#58baa4",
          500: "#1ab394",
          600: "#159178",
          700: "#137562",
          800: "#135d50",
          900: "#124d43",
          950: "#0a2c27",
        },
        slate: defaultTheme.colors.slate,
      },
      fontFamily: {
        sans: ["Sora", ...defaultTheme.fontFamily.sans],
        display: ["DM Serif Display", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.06), 0 4px 12px 0 rgba(0,0,0,0.04)",
        "card-hover":
          "0 4px 16px 0 rgba(0,0,0,0.10), 0 1px 4px 0 rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
