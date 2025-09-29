import type { Config } from 'tailwindcss'

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				bg: '#0A0F14',       // dark background
				panel: '#0B2239',    // deep navy panels (optional)
				green: {
					DEFAULT: '#77FF77', // main brand accent
					light: '#A4FFA4',   // lighter hover/highlight
					soft: '#D6FFD6',    // very soft background tint
					dark: '#22C55E',    // darker hover/active
					deep: '#14532D'     // deep green (for borders, shadows)
				},
				coral: '#FF6B6B',    // alert/red
				text: '#F8FAFC',     // off-white text
				muted: '#9AA7B2',    // muted gray text
				// Legacy aliases for gradual migration
				accent: '#77FF77',   // alias for green.DEFAULT
				mint: '#D6FFD6'      // alias for green.soft
			},
			borderRadius: {
				lg: '12px',
				DEFAULT: '12px'
			},
			fontFamily: {
				sans: ['var(--font-karla)', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
				'low': '0 4px 16px rgba(0, 0, 0, 0.12)',
				card: '0 6px 30px rgba(0,0,0,0.06)',
				glow: '0 0 15px rgba(119,255,119,0.3)',
				'glow-md': '0 0 20px rgba(119,255,119,0.4)',
				'glow-lg': '0 0 25px rgba(119,255,119,0.5)',
				'glow-pulse': '0 0 15px rgba(119,255,119,0.4), 0 0 25px rgba(119,255,119,0.2)'
			}
		}
	},
	plugins: []
} satisfies Config
