'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NavWhispprParticles from '@/components/NavWhispprParticles'

export function Nav() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			{/* Skip to content link for accessibility */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-accent text-bg px-4 py-2 rounded-lg font-medium transition-all duration-200"
			>
				Skip to content
			</a>
			
			<motion.nav
				className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
					isScrolled 
						? 'bg-bg/80 backdrop-blur-md border-b border-panel/50' 
						: 'bg-transparent'
				}`}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="container">
					<div className="flex items-center justify-between h-16 lg:h-20">
						{/* Brand/Logo with Particle Animation */}
						<Link 
							href="/"
							className="hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg px-2 py-1"
						>
							<NavWhispprParticles />
						</Link>

						{/* Center Navigation Links */}
						<div className="hidden md:flex items-center space-x-8">
							<NavLink href="#how-it-works">How it Works</NavLink>
							<NavLink href="#features">Features</NavLink>
							<NavLink href="#faq">FAQ</NavLink>
						</div>

						{/* Right CTA */}
						<div className="flex items-center gap-4">
							{/* Mobile menu button - we'll implement this later if needed */}
							<button className="md:hidden p-2 text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg">
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
								<span className="sr-only">Open menu</span>
							</button>
							
							{/* CTA Pill */}
							<motion.a
								href="#waitlist"
								className="bg-accent hover:bg-accent/90 text-bg font-medium px-6 py-2.5 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg shadow-glow hover:shadow-glow-lg animate-glow-pulse"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Join Waitlist
							</motion.a>
						</div>
					</div>
				</div>
			</motion.nav>
		</>
	)
}

// Individual navigation link component
function NavLink({ 
	href, 
	children 
}: { 
	href: string
	children: React.ReactNode 
}) {
	return (
		<Link
			href={href}
			className="text-muted hover:text-text font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg px-3 py-2 relative group"
		>
			{children}
			{/* Hover underline effect */}
			<span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
		</Link>
	)
}
