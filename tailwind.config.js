module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Space Grotesk", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      colors: {
        "light-content": "#9AA5B1",
        "dark-heading": "#14181C",
        "dark-content": "#5B6472",
        "light-heading": "#E4E7EB",
        "dark-mode": "#0F1115",
        "dark-card": "#1B1F24",
        "green-text": "#2563EB",
        "greenbg": "#DBEAFE",
      },
    },
  },
  plugins: [],
};