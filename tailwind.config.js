/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				light: "#ECECEC",
				light2: "#D1D1D1",
				middle: "#8AA6A3",
				dark: "#272F3F",
				primary: { 100: "#F28F3B", 200: "#3BB5D4" },
				secondary: { 100: "#F28F3B", 200: "#F2B37C" },
			},
		},
	},
	plugins: [],
};
