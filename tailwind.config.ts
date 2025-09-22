import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				bg: '#0A0F14',
				panel: '#0B2239',
				accent: '#11C5C6',
				mint: '#D6F2F0',
				coral: '#FF6B6B',
				text: '#F8FAFC',
				muted: '#9AA7B2'
			},
			borderRadius: {
				DEFAULT: '12px'
			},
			fontFamily: {
				sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
				'low': '0 4px 16px rgba(0, 0, 0, 0.12)'
			}
		},
	},
	plugins: [],
}
export default config
