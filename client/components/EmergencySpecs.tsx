'use client'

import { 
	FadeInUpDiv, 
	StaggerContainer,
} from '@/components/Motion'
import { Zap, Shield, Battery } from 'lucide-react'

export function EmergencySpecs() {
	return (
		<section className="section bg-panel/5 text-text">
			<div className="container">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<FadeInUpDiv className="text-center mb-12 lg:mb-16">
						<h2 className="font-bold mb-4 lg:mb-6 text-green" style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}>
							Built for real emergencies
						</h2>
						<p className="text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
							What the system optimizes for when every second counts
						</p>
					</FadeInUpDiv>

					{/* Cards Grid */}
					<StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
						{/* Low Latency */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full text-center">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
									<Zap className="w-6 lg:w-8 h-6 lg:h-8 text-accent" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Low latency path
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									trigger→enqueue ≤1s; enqueue→SMS ≤3s p50 / ≤8s p95 in healthy networks.
								</p>
							</div>
						</FadeInUpDiv>

						{/* High Reliability */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full text-center">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-mint/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
									<Shield className="w-6 lg:w-8 h-6 lg:h-8 text-mint" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									High reliability
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Alert delivery targets ≥99.9% monthly success with delivery receipts.
								</p>
							</div>
						</FadeInUpDiv>

						{/* Battery Aware */}
						<FadeInUpDiv>
							<div className="card-glass p-6 lg:p-8 h-full text-center">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
									<Battery className="w-6 lg:w-8 h-6 lg:h-8 text-coral" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Battery-aware
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Minimal background work; quick precise fix when possible.
								</p>
							</div>
						</FadeInUpDiv>
					</StaggerContainer>

					{/* Small Caption */}
					<FadeInUpDiv className="text-center">
						<p className="text-sm text-muted italic">
							Acceptance goals include 99.5% undo reliability and p95 SMS in ≤8s.
						</p>
					</FadeInUpDiv>
				</div>
			</div>
		</section>
	)
}
