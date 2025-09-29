'use client'

import { 
	FadeInUpDiv, 
	StaggerContainer,
} from '@/components/Motion'
import { Phone, MapPin, Heart, Users2, Watch } from 'lucide-react'

export function PremiumFeatures() {
	const premiumFeatures = [
		{
			icon: Phone,
			title: 'Fake Call',
			description: 'Server-placed PSTN call to your phone (compliant; no spoofing).'
		},
		{
			icon: MapPin,
			title: 'Live tracking window',
			description: 'Share periodic pings for N minutes.'
		},
		{
			icon: Heart,
			title: 'Vibe checks',
			description: 'Gentle pings with auto-escalation if you don\'t respond.'
		},
		{
			icon: Users2,
			title: 'Profiles',
			description: 'Pick who gets alerted (e.g., "Roommate only", "All contacts").'
		},
		{
			icon: Watch,
			title: 'Apple Watch',
			description: 'SOS via complication/App Intent.'
		}
	]

	return (
		<section className="section bg-panel/5 text-text">
			<div className="container">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<FadeInUpDiv className="text-center mb-12 lg:mb-16">
						<h2 className="font-bold mb-4 lg:mb-6 text-green" style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}>
							Premium <span className="text-sm text-white">(coming soon)</span>
						</h2>
						<p className="text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
							Advanced features for enhanced safety and peace of mind
						</p>
					</FadeInUpDiv>

					{/* Cards Grid */}
					<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{premiumFeatures.map((feature, index) => {
							const IconComponent = feature.icon
							
							return (
								<FadeInUpDiv key={feature.title}>
									<div className="card-glass h-full p-6 lg:p-8 relative">
										{/* Premium Badge */}
										<div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">
											Premium
										</div>
										
										<div className="flex items-start space-x-3 lg:space-x-4">
											<div className="flex-shrink-0 w-10 lg:w-12 h-10 lg:h-12 rounded-xl bg-accent/10 flex items-center justify-center">
												<IconComponent 
													className="w-5 lg:w-6 h-5 lg:h-6 text-accent" 
													aria-hidden="true" 
												/>
											</div>
											<div className="flex-1 min-w-0 pr-12">
												<h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-text">
													{feature.title}
												</h3>
												<p className="text-sm lg:text-base text-muted leading-relaxed">
													{feature.description}
												</p>
											</div>
										</div>
									</div>
								</FadeInUpDiv>
							)
						})}
					</StaggerContainer>
				</div>
			</div>
		</section>
	)
}
