'use client'

import { 
	FadeInUpDiv, 
	StaggerContainer,
} from '@/components/Motion'
import { Smartphone, MapPin, Clock, MessageSquare } from 'lucide-react'

export function HowItWorks() {
	return (
		<section className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 bg-bg text-text" id="how-it-works">
			<div className="container">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<FadeInUpDiv className="text-center mb-12 lg:mb-16">
						<h2 className="font-bold mb-4 lg:mb-6 text-green" style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}>
							How it works
						</h2>
						<p className="text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
							The exact high-level SOS sequence implemented in the app.
						</p>
					</FadeInUpDiv>

					{/* Cards Grid */}
					<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
						{/* Card 1 - Discreet Trigger */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<Smartphone className="w-6 lg:w-8 h-6 lg:h-8 text-accent" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Discreet trigger
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Start from an iPhone widget, Siri Shortcut, or inside the app—built on App Intents.
								</p>
							</div>
						</FadeInUpDiv>

						{/* Card 2 - Location Snap */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-mint/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<MapPin className="w-6 lg:w-8 h-6 lg:h-8 text-mint" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Location snap
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Whisppr grabs a quick single location fix (or safely falls back to last known if it can't get a precise one fast).
								</p>
							</div>
						</FadeInUpDiv>

						{/* Card 3 - 5-Second Grace */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-coral/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<Clock className="w-6 lg:w-8 h-6 lg:h-8 text-coral" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									5-second grace
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									An undo window gives you five seconds to cancel accidental taps before anything is sent.
								</p>
							</div>
						</FadeInUpDiv>

						{/* Card 4 - Instant Alerts */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-green/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<MessageSquare className="w-6 lg:w-8 h-6 lg:h-8 text-green" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Instant alerts
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									If not canceled, your verified contacts get a text with your name, time, and a maps link to your location.
								</p>
							</div>
						</FadeInUpDiv>
					</StaggerContainer>

					{/* Performance Stats */}
					<FadeInUpDiv className="text-center">
						<div className="inline-flex flex-wrap items-center justify-center gap-4 lg:gap-6 p-4 lg:p-6 rounded-2xl border border-green/20 bg-green/5">
							<div className="flex items-center gap-2 text-sm">
								<div className="w-2 h-2 bg-green rounded-full"></div>
								<span className="text-muted">trigger→enqueue ≤1s</span>
							</div>
							<div className="flex items-center gap-2 text-sm">
								<div className="w-2 h-2 bg-green rounded-full"></div>
								<span className="text-muted">SMS ≤8s p95</span>
							</div>
							<div className="flex items-center gap-2 text-sm">
								<div className="w-2 h-2 bg-green rounded-full"></div>
								<span className="text-muted">≥99.9% delivery</span>
							</div>
						</div>
					</FadeInUpDiv>
				</div>
			</div>
		</section>
	)
}
