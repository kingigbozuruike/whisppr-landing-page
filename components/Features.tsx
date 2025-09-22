'use client'

import { motion } from 'framer-motion'
import { useReduced } from './Motion'
import { 
	Zap, 
	Clock, 
	Users, 
	Eye, 
	Shield, 
	Crown 
} from 'lucide-react'

const features = [
	{
		icon: Zap,
		title: 'Discreet triggers',
		description: 'Widgets, Shortcuts, Back Tap; no loud UI.'
	},
	{
		icon: Clock,
		title: '5-second Cancel',
		description: 'Avoid false alarms without slowing real ones.'
	},
	{
		icon: Users,
		title: 'Trusted contacts',
		description: 'Add 2–3 contacts and verify them once.'
	},
	{
		icon: Eye,
		title: 'Disguise mode',
		description: 'Alternate app icon + simple landing shell.'
	},
	{
		icon: Shield,
		title: 'Privacy-first',
		description: 'Encrypted storage, minimal data, opt-in.'
	},
	{
		icon: Crown,
		title: 'Premium (soon)',
		description: 'Fake call, live tracking, vibe checks, Apple Watch.'
	}
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2
		}
	}
}

const cardVariants = {
	hidden: { 
		opacity: 0, 
		y: 20,
		scale: 0.95
	},
	visible: { 
		opacity: 1, 
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
}

export default function Features() {
	const shouldReduceMotion = useReduced()

	return (
		<section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
			<div className="max-w-7xl mx-auto">
				<motion.div
					variants={shouldReduceMotion ? {} : containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<div className="text-center mb-12 lg:mb-16">
						<h2 className="font-bold mb-4 lg:mb-6" style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}>
							Built for{' '}
							<span className="text-accent">real emergencies</span>
						</h2>
						<p className="text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
							Every feature designed with one goal: getting help when it matters most.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
						{features.map((feature, index) => {
							const IconComponent = feature.icon
							
							return (
								<motion.div
									key={feature.title}
									variants={shouldReduceMotion ? {} : cardVariants}
									className="group relative"
								>
									<div 
										className="
											h-full p-6 lg:p-8 rounded-2xl border border-panel/40 bg-panel/20 
											backdrop-blur-sm transition-all duration-300 ease-out
											hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl 
											hover:shadow-accent/5 focus-within:border-accent/30 
											focus-within:-translate-y-1 focus-within:shadow-xl 
											focus-within:shadow-accent/5
										"
										tabIndex={0}
										role="article"
										aria-labelledby={`feature-title-${index}`}
									>
										<div className="flex items-start space-x-3 lg:space-x-4">
											<div className="
												flex-shrink-0 w-10 lg:w-12 h-10 lg:h-12 rounded-xl bg-accent/10 
												flex items-center justify-center transition-colors 
												duration-300 group-hover:bg-accent/20
											">
												<IconComponent 
													className="w-5 lg:w-6 h-5 lg:h-6 text-accent" 
													aria-hidden="true" 
												/>
											</div>
											<div className="flex-1 min-w-0">
												<h3 
													id={`feature-title-${index}`}
													className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-text"
												>
													{feature.title}
												</h3>
												<p className="text-sm lg:text-base text-muted leading-relaxed">
													{feature.description}
												</p>
											</div>
										</div>
									</div>
								</motion.div>
							)
						})}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
