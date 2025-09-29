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
		description: 'Widgets, Shortcuts, App Intents; Back Tap docs for Shortcut.',
		badge: 'MVP'
	},
	{
		icon: Clock,
		title: '5-second Undo',
		description: 'Cancel from a local notification action before anything leaves your phone.',
		badge: 'MVP'
	},
	{
		icon: Users,
		title: 'Trusted contacts',
		description: 'Add & verify 2–3 contacts so they\'re ready when you need them.',
		badge: 'MVP'
	},
	{
		icon: Eye,
		title: 'Location in the alert',
		description: 'Name, timestamp, and a live/location link in the SMS.',
		badge: 'MVP'
	},
	{
		icon: Shield,
		title: 'Disguise mode',
		description: 'Alternate icon and a simple landing shell (Calculator/Notes-style).',
		badge: 'MVP'
	},
	{
		icon: Crown,
		title: 'Premium features',
		description: 'Fake Call, Live tracking, Vibe checks, Profiles, Apple Watch.',
		badge: 'Soon'
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
						<h2 className="font-bold mb-4 lg:mb-6 text-green" style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}>
							Features
						</h2>
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
										className="card-glass h-full p-6 lg:p-8 group-hover:-translate-y-1 relative"
										tabIndex={0}
										role="article"
										aria-labelledby={`feature-title-${index}`}
									>
										{/* Badge */}
										<div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
											feature.badge === 'MVP' 
												? 'bg-green/20 text-green border border-green/30' 
												: 'bg-coral/20 text-coral border border-coral/30'
										}`}>
											{feature.badge}
										</div>
										
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
											<div className="flex-1 min-w-0 pr-12">
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
