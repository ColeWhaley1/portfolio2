/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#021C2A",
        onbackground: "#FF5335",
        accent: "#EFF9F0", 
      },
    },
  },
  plugins: [],
}

