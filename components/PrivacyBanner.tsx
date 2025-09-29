'use client'

import { motion } from 'framer-motion'
import { useReduced } from './Motion'
import { Shield } from 'lucide-react'

const privacyPoints = [
	{
		title: 'Data minimization & encryption',
		description: 'Device Keychain + encrypted storage; TLS 1.3 in transport.'
	},
	{
		title: 'Verified contacts',
		description: 'No alerts to unverified numbers; rate limits prevent abuse.'
	},
	{
		title: 'Clear consent for guardian/premium features',
		description: 'Explicit opt-in only.'
	},
	{
		title: 'Auto-purge',
		description: 'Location pings have TTL; you can delete all data.'
	},
	{
		title: '911 policy',
		description: 'Whisppr does not route to emergency services; we provide native iOS SOS tips.'
	}
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
					<h3 className="text-xl lg:text-2xl font-bold text-green">
						Privacy & Security <span className="text-sm font-normal text-muted">(what we actually do)</span>
					</h3>
				</div>
				
				<ul className="space-y-4 lg:space-y-5 mb-6 lg:mb-8" role="list">
					{privacyPoints.map((point, index) => (
						<motion.li
							key={point.title}
							initial={shouldReduceMotion ? {} : { opacity: 0, x: 10 }}
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
									{point.title}
								</span>
							</div>
							<p className="text-sm lg:text-base text-muted leading-relaxed ml-5">
								{point.description}
							</p>
						</motion.li>
					))}
				</ul>
			</div>
		</motion.div>
	)
}
