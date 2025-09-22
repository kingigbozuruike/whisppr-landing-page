import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReducedMotionProvider } from '@/components/Motion'
import { Nav } from '@/components/Nav'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Whisppr — Silent SOS to trusted contacts',
	description: 'Discreetly alert trusted contacts with your live location via iPhone widgets or Shortcuts. 5-second undo. Privacy-first.',
	keywords: ['emergency', 'SOS', 'safety', 'location', 'iPhone', 'privacy'],
	authors: [{ name: 'Whisppr' }],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	openGraph: {
		title: 'Whisppr — Silent SOS to trusted contacts',
		description: 'Discreetly alert trusted contacts with your live location via iPhone widgets or Shortcuts. 5-second undo. Privacy-first.',
		type: 'website',
		locale: 'en_US',
		url: 'https://whisppr.app',
		siteName: 'Whisppr',
		images: [
			{
				url: '/og.png',
				width: 1200,
				height: 630,
				alt: 'Whisppr - Silent SOS to trusted contacts',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Whisppr — Silent SOS to trusted contacts',
		description: 'Discreetly alert trusted contacts with your live location via iPhone widgets or Shortcuts. 5-second undo. Privacy-first.',
		images: ['/og.png'],
		creator: '@whisppr',
		site: '@whisppr',
	},
	metadataBase: new URL('https://whisppr.app'),
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
			<body className={`${inter.variable} font-sans bg-bg text-text antialiased`}>
				<ReducedMotionProvider>
					<Nav />
					{children}
				</ReducedMotionProvider>
			</body>
		</html>
	)
}
