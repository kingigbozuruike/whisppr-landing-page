'use client'

import { motion } from 'framer-motion'
import { useReduced } from './Motion'

const footerVariants = {
	hidden: { 
		opacity: 0, 
		y: 20
	},
	visible: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
}

const links = [
	{ label: 'Contact', href: '#contact' }
]

export default function Footer() {
	const shouldReduceMotion = useReduced()

	return (
		<footer className="border-t border-panel/20 bg-panel/5 backdrop-blur-sm">
			<div className="max-w-7xl mx-auto px-6 py-8">
				<motion.div
					variants={shouldReduceMotion ? {} : footerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0"
				>
					{/* Left side - Disclaimer */}
					<div className="flex-1">
						<p className="text-sm text-muted leading-relaxed max-w-md">
							<span className="font-medium text-text">Important:</span>{' '}
							Whisppr is not a substitute for emergency services. For immediate life-threatening emergencies, call 911 or your local emergency number.
						</p>
					</div>

					{/* Right side - Links */}
					<nav className="flex-shrink-0" aria-label="Footer navigation">
						<ul className="flex items-center space-x-1">
							{links.map((link, index) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="
											px-3 py-2 text-sm font-medium text-muted rounded-lg
											transition-all duration-200 hover:text-accent hover:bg-accent/5
											focus:outline-none focus:ring-2 focus:ring-accent/50 
											focus:ring-offset-2 focus:ring-offset-panel/5
											active:scale-95
										"
										onClick={(e) => {
											e.preventDefault()
											console.log(`${link.label} link clicked - placeholder`)
										}}
									>
										{link.label}
									</a>
									{index < links.length - 1 && (
										<span className="text-panel/60 mx-1" aria-hidden="true">
											•
										</span>
									)}
								</li>
							))}
						</ul>
					</nav>
				</motion.div>

				{/* Bottom row - Copyright and additional info */}
				<motion.div
					variants={shouldReduceMotion ? {} : footerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="mt-6 pt-6 border-t border-panel/10"
				>
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
						<p className="text-xs text-muted">
							© 2025 Whisppr. All rights reserved.
						</p>
						<p className="text-xs text-muted">
							Built with privacy and safety in mind.
						</p>
					</div>
				</motion.div>
			</div>
		</footer>
	)
}
