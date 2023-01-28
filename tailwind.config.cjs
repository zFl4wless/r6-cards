/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				attacker: '#0078D1',
				defender: '#DD5701',
				light: '#F2F2F2',
				dark: '#131619',
				'gray-bege': '#8C8581',
				'light-gray': '#A5A7AA',
				'blue-gray': '#1F242A',
				'dark-gray': '#16191D'
			}
		}
	},
	plugins: []
};
