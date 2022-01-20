module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {},
    // textColor: theme => theme('colors'),
    textColor: {
      light: "#000000AD",
      dark: "#F0F0F0",
      primary: "#2563EB",
      gray: "#6B7280",
    },
  },
  darkMode: "class",
};
