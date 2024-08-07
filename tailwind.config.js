/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"catflamingo": "#f2cdcd",
				"catred": "#f38ba8",
				"catpeach": "#fab387",
				"catyellow": "#f9e2af",
				"catgreen": "#a6e3a1",
				"catteal": "#94e2d5",
				"catblue": "#89b4fa",
				"catsapphire": "#74c7ec",
				"catlavender": "#b4befe",
			},
		},
	},
	plugins: [],
}

