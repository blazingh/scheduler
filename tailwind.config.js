/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			light: "#ECECEC",
			middle: "#8AA6A3",
			dark: "#10403B",
			primary: { 100: "#F28F3B", 200: "#3BB5D4" },
			secondary: { 100: "#F28F3B", 200: "#F2B37C" },
		},
		extend: {},
	},
	plugins: [],
};
