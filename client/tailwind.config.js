/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17A191",
        primaryl: "#29C0AE",
        caution: "#DC2626",
      },
    },
  },
  plugins: [],
};
