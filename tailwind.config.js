/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			light: "#F5F5F5",
			middle: "#748CAB",
			dark: "#292929",
			primary: { 100: "#76E172", 200: "#59C156" },
			secondary: { 100: "#FE5F55", 200: "#D8473D" },
		},
		extend: {},
	},
	plugins: [],
};
