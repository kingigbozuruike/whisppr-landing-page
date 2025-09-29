'use client'

import { 
	FadeInUpDiv, 
	SlideInFromRightDiv,
	StaggerContainer, 
	TapButton,
} from '@/components/Motion'
import HeroBubbleDemo from '@/components/HeroBubbleDemo'

export function Hero() {
	return (
		<section className="relative min-h-[85vh] flex items-center text-text pt-32 lg:pt-40 pb-16 lg:pb-24">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					{/* Left Column - Text Content */}
					<StaggerContainer className="max-w-2xl lg:max-w-none">
						<FadeInUpDiv>
							<h1 className="font-bold leading-tight mb-4 lg:mb-6" style={{ fontSize: 'clamp(2.25rem, 4vw, 4.5rem)' }}>
								Silent SOS.{' '}
								<span className="text-accent">Safety</span> at your fingertips.
							</h1>
						</FadeInUpDiv>
						
						<FadeInUpDiv>
							<p className="text-lg sm:text-xl lg:text-2xl text-muted leading-relaxed mb-6 lg:mb-8 max-w-xl">
								Discreetly alert trusted contacts with your live location in seconds—then undo within 5.
							</p>
						</FadeInUpDiv>
						
						<FadeInUpDiv>
							<div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
								<TapButton className="btn-primary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 animate-glow-pulse">
									Join Waitlist
								</TapButton>
								<TapButton className="btn-glass text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
									Watch 20-sec Demo
								</TapButton>
							</div>
						</FadeInUpDiv>
						
						<FadeInUpDiv>
							<div className="flex items-center gap-2 text-sm text-muted">
								<span className="flex items-center gap-1">
									<div className="w-1 h-1 bg-accent rounded-full"></div>
									Privacy-first
								</span>
								<span className="flex items-center gap-1">
									<div className="w-1 h-1 bg-accent rounded-full"></div>
									Notify discreetly
								</span>
								<span className="flex items-center gap-1">
									<div className="w-1 h-1 bg-accent rounded-full"></div>
									Fast alerts
								</span>
							</div>
						</FadeInUpDiv>
					</StaggerContainer>
					
					{/* Right Column - HeroBubbleDemo */}
					<SlideInFromRightDiv className="flex justify-center lg:justify-end">
						<div className="w-full max-w-sm lg:max-w-md xl:max-w-lg">
							<HeroBubbleDemo />
						</div>
					</SlideInFromRightDiv>
				</div>
			</div>
		</section>
	)
}
