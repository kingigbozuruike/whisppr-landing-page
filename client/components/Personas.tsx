'use client'

import { motion } from 'framer-motion'
import { useReduced } from './Motion'
import { Users } from 'lucide-react'

const personas = [
	{
		title: 'Student',
		description: 'Fast one-tap SOS + fake call for an exit.'
	},
	{
		title: 'Night-shift / rideshare',
		description: 'Silent trigger; share location with multiple contacts.'
	},
	{
		title: 'Survivor',
		description: 'Disguise mode + 5-second undo to avoid accidental sends.'
	},
	{
		title: 'Parent/guardian (consented)',
		description: 'Defined windows and boundaries for tracking/check-ins.'
	}
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
				<h3 className="text-xl lg:text-2xl font-bold text-green">
					Who uses Whisppr <span className="text-sm font-normal text-muted">(personas → one-line proof)</span>
				</h3>
			</div>
			
			<ul className="space-y-4 lg:space-y-5" role="list">
				{personas.map((persona, index) => (
					<motion.li
						key={persona.title}
						initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
						whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
						transition={{ 
							delay: shouldReduceMotion ? 0 : 0.1 + (index * 0.1),
							duration: 0.4 
						}}
						viewport={{ once: true }}
						className="space-y-1"
					>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
							<span className="text-base lg:text-lg text-text font-semibold">
								{persona.title}
							</span>
						</div>
						<p className="text-sm lg:text-base text-muted leading-relaxed ml-5">
							{persona.description}
						</p>
					</motion.li>
				))}
			</ul>
			
			<div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-panel/30">
				<p className="text-sm lg:text-base text-muted leading-relaxed">
					Built for specific safety scenarios with proven use cases.
				</p>
			</div>
			</div>
		</motion.div>
	)
}
