/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0071e3",
        "custom-red": "#B64400",
        "custom-green": "#68CC45",
        "custom-white": "#F5F2F2",
        "custom-black-100": "#1D1D1F",
        "custom-black-80": "#454547",
        "custom-black-60": "rgba(29, 29, 31, 0.6)",
        "custom-black-40": "rgba(29, 29, 31, 0.4)",
        "custom-black-20": "rgba(29, 29, 31, 0.2)",
        "custom-black-10": "#E8E8E8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "1.25rem",
      },
    },
  },
  plugins: [],
};
