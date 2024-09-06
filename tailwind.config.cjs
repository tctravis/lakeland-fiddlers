/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'content-section': {
					odd: 'var(--content-section-bg-odd)',
					even: 'var(--content-section-bg-even)',
				},
				header: {
					bg: 'var(--header-bg-color)',
					text: 'var(--header-text-color)',
				},
				footer: {
					bg: 'var(--footer-bg-color)',
					text: 'var(--footer-text-color)',
				},
				headers: 'var(--headers-color)',
			},
			fontFamily: {
				headers: 'var(--font-family-headers)',
				body: 'var(--font-family-body)',
			},
			fontWeight: {
				'weight-headers': 'var(--font-weight-headers)',
				'weight-body': 'var(--font-weight-body)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
