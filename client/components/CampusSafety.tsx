'use client'

import {
	FadeInUpDiv,
	StaggerContainer,
} from '@/components/Motion'
import { ShieldCheck, Navigation, GraduationCap } from 'lucide-react'

export function CampusSafety() {
	return (
		<section className="section bg-bg text-text">
			<div className="container">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<FadeInUpDiv className="text-center mb-12 lg:mb-16">
						<h2 className="font-bold mb-4 lg:mb-6 text-green" style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}>
							Campus safety that doesn&apos;t stop at the property line.
						</h2>
						<p className="text-base sm:text-lg lg:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
							Existing campus apps degrade into a basic 911 dialer the moment a student leaves campus — no location, no data. Whisppr routes on-campus alerts to campus police and off-campus alerts to 911 via RapidSOS, carrying live location and health data the whole way. Institutions license Whisppr per student through technology fees, so every student is protected from orientation day on.
						</p>
					</FadeInUpDiv>

					{/* Routing cards */}
					<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<ShieldCheck className="w-6 lg:w-8 h-6 lg:h-8 text-accent" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									On campus → campus police
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Alerts route directly to your institution&apos;s campus police, with live location and health data attached.
								</p>
							</div>
						</FadeInUpDiv>

						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-mint/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<Navigation className="w-6 lg:w-8 h-6 lg:h-8 text-mint" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Off campus → 911 via RapidSOS
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Step off campus and Whisppr keeps working — alerts route to 911 through RapidSOS, still carrying your location and health data.
								</p>
							</div>
						</FadeInUpDiv>
					</StaggerContainer>

					{/* Pilot callout */}
					{/* TODO(owner): confirm exact pilot claim/wording before publishing. Default is a soft
					    claim and does NOT assert a signed/active partnership. */}
					<FadeInUpDiv className="text-center">
						<div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-accent/20 bg-accent/5">
							<GraduationCap className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
							<span className="text-sm lg:text-base text-text">
								Launching our first campus pilot with Grambling State University (Fall 2026).
							</span>
						</div>
					</FadeInUpDiv>
				</div>
			</div>
		</section>
	)
}
