'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import NavWhispprParticles from '@/components/NavWhispprParticles'

export function Nav() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Close mobile menu when clicking on links
	const closeMobileMenu = () => setIsMobileMenuOpen(false)

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
						? 'bg-bg/90 backdrop-blur-lg border-b border-panel/50' 
						: 'bg-transparent'
				}`}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
						{/* Brand/Logo with Particle Animation */}
						<Link 
							href="/"
							className="hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg px-1 py-1 z-50 relative flex-shrink-0"
						>
							<NavWhispprParticles />
						</Link>

						{/* Center Navigation Links - Desktop Only */}
						<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
							<NavLink href="#how-it-works">How it Works</NavLink>
							<NavLink href="#features">Features</NavLink>
							<NavLink href="#faq">FAQ</NavLink>
						</div>

						{/* Right Side - CTA and Mobile Menu */}
						<div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
							{/* CTA Pill - Hidden on very small screens, visible on larger screens */}
							<motion.a
								href="#waitlist"
								className="hidden sm:block bg-accent hover:bg-accent/90 text-bg font-medium px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg shadow-glow hover:shadow-glow-lg animate-glow-pulse whitespace-nowrap"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								Join Waitlist
							</motion.a>
							
							{/* Mobile menu button - Always visible on mobile */}
							<button 
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="md:hidden p-2 text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg z-50 relative flex-shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center"
								aria-label="Toggle mobile menu"
								aria-expanded={isMobileMenuOpen}
							>
								<motion.div
									animate={isMobileMenuOpen ? "open" : "closed"}
									className="w-5 h-5 flex flex-col justify-center items-center"
								>
									<motion.span
										variants={{
											closed: { rotate: 0, y: 0 },
											open: { rotate: 45, y: 4 }
										}}
										className="w-5 h-0.5 bg-current origin-center transition-all duration-300 block"
									/>
									<motion.span
										variants={{
											closed: { opacity: 1 },
											open: { opacity: 0 }
										}}
										className="w-5 h-0.5 bg-current mt-1 transition-all duration-300 block"
									/>
									<motion.span
										variants={{
											closed: { rotate: 0, y: 0 },
											open: { rotate: -45, y: -4 }
										}}
										className="w-5 h-0.5 bg-current mt-1 origin-center transition-all duration-300 block"
									/>
								</motion.div>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
							className="md:hidden border-t border-panel/20 bg-bg/95 backdrop-blur-lg overflow-hidden"
						>
							<div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-4">
								<nav className="flex flex-col space-y-2">
									<MobileNavLink href="#how-it-works" onClick={closeMobileMenu}>
										How it Works
									</MobileNavLink>
									<MobileNavLink href="#features" onClick={closeMobileMenu}>
										Features
									</MobileNavLink>
									<MobileNavLink href="#faq" onClick={closeMobileMenu}>
										FAQ
									</MobileNavLink>
									{/* Mobile-only CTA for small screens */}
									<motion.a
										href="#waitlist"
										onClick={closeMobileMenu}
										className="sm:hidden bg-accent text-bg font-medium px-4 py-3 rounded-lg text-center transition-all duration-300 shadow-glow mt-3 block"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Join Waitlist
									</motion.a>
								</nav>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	)
}

// Desktop navigation link component
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

// Mobile navigation link component
function MobileNavLink({ 
	href, 
	children,
	onClick 
}: { 
	href: string
	children: React.ReactNode
	onClick: () => void
}) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className="text-text hover:text-accent font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg px-3 py-2 text-base border-l-2 border-transparent hover:border-accent block w-full"
		>
			{children}
		</Link>
	)
}
