module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				migra: ['"Migra"', "sans-serif"],
				neue_haas_grotesque: [
					'"Neue Haas Grotesk Display Pro"',
					"sans-serif",
				],
			},
			backgroundImage: {
				header_image: "url('/assets/images/header_image.jpg')",
				header_image_mobile:
					"url('/assets/images/header_image_mobile.jpg')",
			},
			colors: {
				primary: "#94FF64",
				secondary: "#230B2E",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			flex: {
				2: "2 2 0%",
			},
		},
	},
	plugins: [],
};
