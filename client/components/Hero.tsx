'use client'

import { useState } from 'react'
import { 
	FadeInUpDiv, 
	SlideInFromRightDiv,
	StaggerContainer, 
	TapButton,
} from '@/components/Motion'
import HeroBubbleDemo from '@/components/HeroBubbleDemo'
import DemoModal from '@/components/DemoModal'

export function Hero() {
	const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
	
	return (
		<section className="relative min-h-[100vh] sm:min-h-[90vh] lg:min-h-[85vh] flex items-center text-text pt-20 sm:pt-32 lg:pt-40 pb-8 sm:pb-16 lg:pb-24 overflow-hidden">
			<div className="container px-4 sm:px-6">
				<div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center w-full">
					{/* Left Column - Text Content */}
					<StaggerContainer className="max-w-2xl lg:max-w-none w-full">
						<FadeInUpDiv>
							<h1 className="font-bold leading-tight mb-4 sm:mb-6 lg:mb-6" style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}>
								Silent SOS.{' '}
								<span className="text-accent">Safety</span> at your fingertips.
							</h1>
						</FadeInUpDiv>
						
						<FadeInUpDiv>
							<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted leading-relaxed mb-6 sm:mb-8 lg:mb-8 max-w-xl">
								Discreetly alert trusted contacts with your live location in seconds—then undo within 5.
							</p>
						</FadeInUpDiv>
						
						<FadeInUpDiv>
							<div className="flex flex-col xs:flex-row gap-3 sm:gap-4 lg:gap-4 mb-6 sm:mb-8 lg:mb-8 w-full max-w-lg">
								<TapButton 
									className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-8 py-3 sm:py-4 lg:py-4 animate-glow-pulse min-h-[48px] sm:min-h-[52px] flex-1 xs:flex-none"
									onClick={() => {
										document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
									}}
								>
									Join Waitlist
								</TapButton>
								<TapButton 
									className="btn-glass text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-8 py-3 sm:py-4 lg:py-4 min-h-[48px] sm:min-h-[52px] flex-1 xs:flex-none"
									onClick={() => setIsDemoModalOpen(true)}
								>
									Watch 20-sec Demo
								</TapButton>
							</div>
						</FadeInUpDiv>
						
						<FadeInUpDiv>
							<div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted">
								<span className="flex items-center gap-2">
									<div className="w-1 h-1 bg-accent rounded-full"></div>
									Privacy-first
								</span>
								<span className="flex items-center gap-2">
									<div className="w-1 h-1 bg-accent rounded-full"></div>
									Notify discreetly
								</span>
								<span className="flex items-center gap-2">
									<div className="w-1 h-1 bg-accent rounded-full"></div>
									5-second undo
								</span>
							</div>
						</FadeInUpDiv>
					</StaggerContainer>
					
					{/* Right Column - HeroBubbleDemo */}
					<SlideInFromRightDiv className="flex justify-center lg:justify-end mt-8 lg:mt-0">
						<div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
							<HeroBubbleDemo />
						</div>
					</SlideInFromRightDiv>
				</div>
			</div>
			
			{/* Demo Modal */}
			<DemoModal 
				isOpen={isDemoModalOpen}
				onClose={() => setIsDemoModalOpen(false)}
			/>
		</section>
	)
}
