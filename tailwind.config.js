/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			light: "#D1D1D1",
			middle: "#8AA6A3",
			dark: "#1B3835",
			primary: { 100: "#F28F3B", 200: "#3BB5D4" },
			secondary: { 100: "#F28F3B", 200: "#F2B37C" },
		},
		extend: {},
	},
	plugins: [],
};
