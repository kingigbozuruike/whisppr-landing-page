'use client'

import { motion } from 'framer-motion'
import { useReduced } from './Motion'
import { Shield, ArrowRight } from 'lucide-react'

const privacyPoints = [
	'Data minimization & encryption',
	'Verified contacts & explicit consent',
	'Not a 911 replacement'
]

const bannerVariants = {
	hidden: { 
		opacity: 0, 
		x: 20,
		scale: 0.98
	},
	visible: { 
		opacity: 1, 
		x: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
}

export default function PrivacyBanner() {
	const shouldReduceMotion = useReduced()

	return (
		<motion.div
			variants={shouldReduceMotion ? {} : bannerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			className="h-full"
		>
			<div className="h-full p-6 lg:p-8 rounded-2xl bg-accent/10 border border-accent/20 backdrop-blur-sm">
				<div className="flex items-center space-x-3 mb-4 lg:mb-6">
					<div className="w-8 lg:w-10 h-8 lg:h-10 rounded-xl bg-accent/10 flex items-center justify-center">
						<Shield className="w-4 lg:w-5 h-4 lg:h-5 text-accent" aria-hidden="true" />
					</div>
					<h3 className="text-xl lg:text-2xl font-bold text-text">
						Privacy-first design
					</h3>
				</div>				<ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8" role="list">
					{privacyPoints.map((point, index) => (
						<motion.li
							key={point}
							initial={shouldReduceMotion ? {} : { opacity: 0, x: 10 }}
							whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
							transition={{ 
								delay: shouldReduceMotion ? 0 : 0.1 + (index * 0.1),
								duration: 0.4 
							}}
							viewport={{ once: true }}
							className="flex items-center space-x-3"
						>
							<div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
							<span className="text-base lg:text-lg text-text font-medium">
								{point}
							</span>
						</motion.li>
					))}
				</ul>
				
				<div className="space-y-3">
					<button 
						className="
							w-full flex items-center justify-between px-6 py-3 
							rounded-xl bg-accent/20 border border-accent/30 
							text-accent font-semibold transition-all duration-200 
							hover:bg-accent/30 hover:border-accent/50 hover:scale-[1.02]
							focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 
							focus:ring-offset-transparent active:scale-[0.98]
						"
						onClick={() => {/* TODO: Add privacy policy link */}}
					>
						<span>Privacy Policy</span>
						<ArrowRight className="w-4 h-4" aria-hidden="true" />
					</button>
					
					<button 
						className="
							w-full flex items-center justify-between px-6 py-3 
							rounded-xl border border-accent/30 text-accent font-semibold 
							transition-all duration-200 hover:bg-accent/10 hover:border-accent/50 
							hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent/50 
							focus:ring-offset-2 focus:ring-offset-transparent active:scale-[0.98]
						"
						onClick={() => {/* TODO: Add terms link */}}
					>
						<span>Terms</span>
						<ArrowRight className="w-4 h-4" aria-hidden="true" />
					</button>
				</div>
			</div>
		</motion.div>
	)
}
