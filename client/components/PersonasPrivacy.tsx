'use client'

import { motion } from 'framer-motion'
import { useReduced } from './Motion'
import Personas from './Personas'
import PrivacyBanner from './PrivacyBanner'

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

export default function PersonasPrivacy() {
	const shouldReduceMotion = useReduced()

	return (
		<section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
			<div className="max-w-7xl mx-auto">
				{/* Screen reader only section heading for proper document outline */}
				<h2 className="sr-only">About Whisppr</h2>
				<motion.div
					variants={shouldReduceMotion ? {} : containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
				>
					<Personas />
					<PrivacyBanner />
				</motion.div>
			</div>
		</section>
	)
}
