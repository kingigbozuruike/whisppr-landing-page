'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'

interface DemoModalProps {
	isOpen: boolean
	onClose: () => void
}

const modalVariants = {
	hidden: { 
		opacity: 0,
		scale: 0.9,
		y: 20
	},
	visible: { 
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1]
		}
	},
	exit: { 
		opacity: 0,
		scale: 0.9,
		y: 20,
		transition: {
			duration: 0.2,
			ease: [0.22, 1, 0.36, 1]
		}
	}
}

const overlayVariants = {
	hidden: { opacity: 0 },
	visible: { 
		opacity: 1,
		transition: { duration: 0.2 }
	},
	exit: { 
		opacity: 0,
		transition: { duration: 0.2 }
	}
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					{/* Backdrop */}
					<motion.div
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						onClick={onClose}
					/>
					
					{/* Modal */}
					<motion.div
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="relative bg-bg border border-panel/40 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 p-2 text-muted hover:text-text transition-colors rounded-lg hover:bg-panel/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
							aria-label="Close modal"
						>
							<X className="w-5 h-5" />
						</button>

						{/* Content */}
						<div className="text-center">
							{/* Icon */}
							<div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
								<Play className="w-8 h-8 text-accent" />
							</div>

							{/* Heading */}
							<h3 className="text-2xl font-bold text-text mb-4">
								Demo Coming Soon!
							</h3>

							{/* Description */}
							<p className="text-muted text-lg leading-relaxed mb-8">
								We&apos;re putting the finishing touches on our 20-second demo video. 
								Join the waitlist to be notified when it&apos;s ready!
							</p>

							{/* CTA Button */}
							<button
								onClick={onClose}
								className="
									w-full py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300
									bg-accent text-black hover:bg-accent/90 focus:outline-none focus:ring-2 
									focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-bg
									active:scale-[0.98] shadow-glow hover:shadow-glow-md
								"
							>
								Got it, thanks!
							</button>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	)
}
