'use client'

import { 
	FadeInUpDiv, 
	SlideInFromRightDiv, 
	StaggerContainer, 
	TapButton,
} from '@/components/Motion'
import { Demo } from '@/components/Demo'

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center bg-bg text-text pt-16 lg:pt-20">
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
								<TapButton className="btn-primary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
									Join Waitlist
								</TapButton>
								<TapButton className="btn-ghost text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
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
									iPhone widgets & Shortcuts
								</span>
								<span className="flex items-center gap-1">
									<div className="w-1 h-1 bg-accent rounded-full"></div>
									Optional disguise icon
								</span>
							</div>
						</FadeInUpDiv>
					</StaggerContainer>
					
					{/* Right Column - Phone Mock */}
					<SlideInFromRightDiv className="flex justify-center lg:justify-end">
						<PhoneMock />
					</SlideInFromRightDiv>
				</div>
			</div>
		</section>
	)
}

// Phone mockup component with demo
function PhoneMock() {
	return (
		<div className="relative">
			{/* Phone frame */}
			<div className="w-80 h-[640px] bg-panel rounded-[3rem] p-2 shadow-low">
				<Demo />
			</div>
			
			{/* Glow effect */}
			<div className="absolute inset-0 bg-accent/5 rounded-[3rem] blur-2xl -z-10"></div>
		</div>
	)
}
