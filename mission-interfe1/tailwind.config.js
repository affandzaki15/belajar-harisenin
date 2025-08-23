// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"], // <- kasih petik biar aman
      },
    },
  },
  plugins: [],
};
