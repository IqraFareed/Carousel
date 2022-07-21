/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        light: {
          primary: "#006A6F",
          bgPrimary: "#FFFFFF",
          bgSecondary: "#F3F7F9",
          content: "#202D50",
          gray: "#A0A8BB",
        },
      },
    },
  },
};
