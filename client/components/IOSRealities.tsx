'use client'

import { 
	FadeInUpDiv, 
	StaggerContainer,
} from '@/components/Motion'
import { Smartphone, MessageSquare, Eye } from 'lucide-react'

export function IOSRealities() {
	return (
		<section className="section bg-bg text-text">
			<div className="container">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<FadeInUpDiv className="text-center mb-12 lg:mb-16">
						<h2 className="font-bold mb-4 lg:mb-6 text-green" style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}>
							iOS realities
						</h2>
						<p className="text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
							Why Whisppr works the way it does
						</p>
					</FadeInUpDiv>

					{/* Cards Grid */}
					<StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
						{/* Widget/Shortcuts */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<Smartphone className="w-6 lg:w-8 h-6 lg:h-8 text-accent" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Fast entry points
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Widgets & Shortcuts are the fastest safe entry points; some tasks still need a quick app foreground.
								</p>
							</div>
						</FadeInUpDiv>

						{/* SMS Backend */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-mint/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<MessageSquare className="w-6 lg:w-8 h-6 lg:h-8 text-mint" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									SMS routing
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									iOS won\'t allow silent device-sent SMS; we dispatch via backend/Twilio.
								</p>
							</div>
						</FadeInUpDiv>

						{/* Alternate Icons */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-coral/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<Eye className="w-6 lg:w-8 h-6 lg:h-8 text-coral" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Disguise mode
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Alternate icons are fully supported for disguise.
								</p>
							</div>
						</FadeInUpDiv>
					</StaggerContainer>
				</div>
			</div>
		</section>
	)
}
