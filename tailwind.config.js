import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3C65F5",
        bgColor: "#F2F6FD",
      },
    },
  },
  plugins: [daisyui],
};
