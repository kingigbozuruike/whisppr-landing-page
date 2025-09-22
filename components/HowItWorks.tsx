'use client'

import { 
	FadeInUpDiv, 
	StaggerContainer,
} from '@/components/Motion'
import { Smartphone, Clock, MessageSquare } from 'lucide-react'

export function HowItWorks() {
	return (
		<section className="section bg-bg text-text" id="how-it-works">
			<div className="container">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<FadeInUpDiv className="text-center mb-12 lg:mb-16">
						<h2 className="font-bold mb-4 lg:mb-6" style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}>
							How it Works
						</h2>
						<p className="text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
							Three simple steps to stay safe and give your loved ones peace of mind
						</p>
					</FadeInUpDiv>

					{/* Cards Grid */}
					<StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
						{/* Card 1 - Discreet Trigger */}
						<FadeInUpDiv>
							<div className="card p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<Smartphone className="w-6 lg:w-8 h-6 lg:h-8 text-accent" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Discreet trigger
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Activate silently through an iPhone widget or Shortcuts. No one around you will know you&rsquo;re reaching out for help.
								</p>
							</div>
						</FadeInUpDiv>

						{/* Card 2 - 5-Second Undo */}
						<FadeInUpDiv>
							<div className="card p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-mint/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<Clock className="w-6 lg:w-8 h-6 lg:h-8 text-mint" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									5-second undo
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Changed your mind? You have 5 seconds to cancel before any messages are sent. Peace of mind with full control.
								</p>
							</div>
						</FadeInUpDiv>

						{/* Card 3 - Instant SMS */}
						<FadeInUpDiv>
							<div className="card p-6 lg:p-8 h-full">
								<div className="w-12 lg:w-16 h-12 lg:h-16 bg-coral/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
									<MessageSquare className="w-6 lg:w-8 h-6 lg:h-8 text-coral" aria-hidden="true" />
								</div>
								<h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-text">
									Instant SMS with maps link
								</h3>
								<p className="text-sm lg:text-base text-muted leading-relaxed">
									Your trusted contacts receive an immediate text with your exact location and a direct link to find you on maps.
								</p>
							</div>
						</FadeInUpDiv>
					</StaggerContainer>
				</div>
			</div>
		</section>
	)
}
