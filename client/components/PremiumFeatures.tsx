'use client'

import {
	FadeInUpDiv,
	StaggerContainer,
} from '@/components/Motion'
import { Check } from 'lucide-react'

// TODO(owner): confirm $4.99/mo is public-ready before publishing.
// TODO(owner): confirm GSafe integration + GSU pilot wording before publishing (see Campus section).
const plans = [
	{
		name: 'Standard',
		price: 'Free',
		note: 'For everyone',
		highlighted: false,
		features: [
			'Silent SOS',
			'5-second cancel',
			'RapidSOS agent confirmation',
			'Live location + health data to responders',
			'False-alarm check-in to your Circle',
		],
	},
	{
		name: 'Whisppr+',
		price: '$4.99',
		cadence: '/mo',
		note: 'Everything in Standard, plus',
		highlighted: true,
		features: [
			'Ghost Mode — trigger with no screen feedback',
			'Cloud audio/video evidence recording',
			'Apple Watch activation',
		],
	},
	{
		name: 'School Sponsored',
		price: 'via your institution',
		note: 'Whisppr+ for every student',
		highlighted: false,
		features: [
			'Whisppr+ features for every student',
			'GSafe integration',
			'On/off-campus routing to campus police or 911',
		],
	},
]

export function PremiumFeatures() {
	return (
		<section className="section bg-panel/5 text-text">
			<div className="container">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<FadeInUpDiv className="text-center mb-12 lg:mb-16">
						<h2 className="font-bold mb-4 lg:mb-6 text-green" style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}>
							Plans
						</h2>
						<p className="text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
							Three ways to get Whisppr — from free to fully sponsored by your school.
						</p>
					</FadeInUpDiv>

					{/* Plan Cards */}
					<StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
						{plans.map((plan) => (
							<FadeInUpDiv key={plan.name}>
								<div
									className={`relative h-full p-6 lg:p-8 rounded-2xl backdrop-blur-sm flex flex-col ${
										plan.highlighted
											? 'border-2 border-accent bg-accent/10 shadow-glow'
											: 'border border-panel/40 bg-panel/20'
									}`}
								>
									{plan.highlighted && (
										<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-accent text-bg">
											Most popular
										</div>
									)}

									<h3 className="text-xl lg:text-2xl font-bold text-text mb-1">
										{plan.name}
									</h3>
									<div className="mb-1">
										<span className="text-2xl lg:text-3xl font-bold text-accent">
											{plan.price}
										</span>
										{plan.cadence && (
											<span className="text-base text-muted">{plan.cadence}</span>
										)}
									</div>
									<p className="text-sm text-muted mb-6">{plan.note}</p>

									<ul className="space-y-3" role="list">
										{plan.features.map((feature) => (
											<li key={feature} className="flex items-start gap-3">
												<Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
												<span className="text-sm lg:text-base text-muted leading-relaxed">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</div>
							</FadeInUpDiv>
						))}
					</StaggerContainer>
				</div>
			</div>
		</section>
	)
}
