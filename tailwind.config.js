/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require("@medusajs/ui-preset")],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}", 
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  