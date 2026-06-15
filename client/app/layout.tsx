import type { Metadata, Viewport } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'
import { ReducedMotionProvider } from '@/components/Motion'
import { Nav } from '@/components/Nav'
import BackgroundParticles from '@/components/BackgroundParticles'

const karla = Karla({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	style: ['normal', 'italic'],
	variable: '--font-karla',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Whisppr — Silent SOS that dispatches real help',
	description: 'A discreet personal-safety app. Trigger a silent SOS, a trained RapidSOS agent confirms it\'s real, then dispatches 911 or campus police with your live location and health info — on campus or off. 5-second cancel. Privacy-first.',
	keywords: ['emergency', 'SOS', 'safety', 'RapidSOS', 'campus safety', '911 dispatch', 'location', 'iPhone', 'privacy'],
	authors: [{ name: 'Whisppr' }],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	openGraph: {
		title: 'Whisppr — Silent SOS that dispatches real help',
		description: 'A discreet personal-safety app. Trigger a silent SOS, a trained RapidSOS agent confirms it\'s real, then dispatches 911 or campus police with your live location and health info — on campus or off. 5-second cancel. Privacy-first.',
		type: 'website',
		locale: 'en_US',
		url: 'https://whisppr.us',
		siteName: 'Whisppr',
		images: [
			{
				url: '/og.png',
				width: 1200,
				height: 630,
				alt: 'Whisppr - Silent SOS that dispatches real help via RapidSOS',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Whisppr — Silent SOS that dispatches real help',
		description: 'A discreet personal-safety app. Trigger a silent SOS, a trained RapidSOS agent confirms it\'s real, then dispatches 911 or campus police with your live location and health info — on campus or off. 5-second cancel. Privacy-first.',
		images: ['/og.png'],
		creator: '@whisppr',
		site: '@whisppr',
	},
	metadataBase: new URL('https://whisppr.us'),
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#0A0F14',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="dark scroll-smooth">
			<body className={`${karla.variable} font-sans bg-bg text-text antialiased`}>
				<ReducedMotionProvider>
					<BackgroundParticles />
					<Nav />
					{children}
				</ReducedMotionProvider>
			</body>
		</html>
	)
}
