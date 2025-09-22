'use client'

import { motion } from 'framer-motion'
import { useReduced } from './Motion'
import { Users } from 'lucide-react'

const personas = [
	'Students',
	'Rideshare/night-shift',
	'Survivors', 
	'Parents'
]

const cardVariants = {
	hidden: { 
		opacity: 0, 
		x: -20,
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

export default function Personas() {
	const shouldReduceMotion = useReduced()

	return (
		<motion.div
			variants={shouldReduceMotion ? {} : cardVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			className="h-full"
		>
			<div className="h-full p-6 lg:p-8 rounded-2xl border border-panel/40 bg-panel/20 backdrop-blur-sm">
				<div className="flex items-center space-x-3 mb-4 lg:mb-6">
					<div className="w-8 lg:w-10 h-8 lg:h-10 rounded-xl bg-accent/10 flex items-center justify-center">
						<Users className="w-4 lg:w-5 h-4 lg:h-5 text-accent" aria-hidden="true" />
					</div>
					<h3 className="text-xl lg:text-2xl font-bold text-text">
						Who uses Whisppr?
					</h3>
				</div>
				
				<ul className="space-y-3 lg:space-y-4" role="list">
					{personas.map((persona, index) => (
						<motion.li
							key={persona}
							initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
							whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
							transition={{ 
								delay: shouldReduceMotion ? 0 : 0.1 + (index * 0.1),
								duration: 0.4 
							}}
							viewport={{ once: true }}
							className="flex items-center space-x-3"
						>
							<div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
							<span className="text-base lg:text-lg text-muted font-medium">
								{persona}
							</span>
						</motion.li>
					))}
				</ul>
				
				<div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-panel/30">
					<p className="text-sm lg:text-base text-muted leading-relaxed">
						Built for anyone who values safety and peace of mind in uncertain situations.
					</p>
				</div>
			</div>
		</motion.div>
	)
}
