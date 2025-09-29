'use client'

import { motion } from 'framer-motion'
import { useReduced } from './Motion'
import WaitlistForm from './WaitlistForm'

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1
		}
	}
}

const headlineVariants = {
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

const subheadVariants = {
	hidden: { 
		opacity: 0, 
		y: 15
	},
	visible: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1]
		}
	}
}

export default function FinalCTA() {
	const shouldReduceMotion = useReduced()

	return (
		<section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent to-panel/10">
			<div className="max-w-4xl mx-auto">
				<motion.div
					variants={shouldReduceMotion ? {} : containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="text-center"
				>
					{/* Headline */}
					<motion.h2
						variants={shouldReduceMotion ? {} : headlineVariants}
						className="font-bold mb-4 lg:mb-6"
						style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
					>
						Make safety{' '}
						<span className="text-accent">simpler.</span>
					</motion.h2>

					{/* Subhead */}
					<motion.p
						variants={shouldReduceMotion ? {} : subheadVariants}
						className="text-lg lg:text-xl xl:text-2xl text-muted mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed"
					>
						Join the waitlist to help us validate low-latency alerts, reliable undo, and disguise flows before 1.0.
					</motion.p>

					{/* Waitlist Form */}
					<div className="mt-12">
						<WaitlistForm />
					</div>

					{/* Additional Context */}
					<motion.div
						variants={shouldReduceMotion ? {} : subheadVariants}
						className="mt-16 pt-8 border-t border-panel/20"
					>
						<p className="text-muted text-sm max-w-xl mx-auto">
							No spam, ever. We&apos;ll only email you with important updates about Whisppr&apos;s development and launch.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
