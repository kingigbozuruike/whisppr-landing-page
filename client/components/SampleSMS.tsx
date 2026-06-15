'use client'

import { 
	FadeInUpDiv, 
} from '@/components/Motion'
import { MessageSquare } from 'lucide-react'

export function SampleSMS() {
	return (
		<section className="section bg-panel/5 text-text">
			<div className="container">
				<div className="max-w-4xl mx-auto">
					{/* Section Header */}
					<FadeInUpDiv className="text-center mb-12 lg:mb-16">
						<h2 className="font-bold mb-4 lg:mb-6 text-green" style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}>
							The check-in your Circle gets
						</h2>
						<p className="text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
							When an alert resolves as a false alarm, your Circle gets a gentle check-in — not a panic.
						</p>
					</FadeInUpDiv>

					{/* SMS Mock-up */}
					<FadeInUpDiv className="max-w-md mx-auto">
						<div className="card-glass p-6 lg:p-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
									<MessageSquare className="w-5 h-5 text-accent" aria-hidden="true" />
								</div>
								<div>
									<div className="text-sm text-muted">From: Whisppr</div>
									<div className="text-sm text-muted">Now</div>
								</div>
							</div>

							{/* SMS Content */}
							<div className="bg-panel/20 rounded-2xl p-4 text-sm">
								<div className="space-y-2">
									<p className="text-text leading-relaxed">
										Hey [Name], [User] recently activated Whisppr. We believe it was a false alarm. Do you mind checking on them?
									</p>
									<p className="text-muted text-xs mt-3 italic">
										Reply STOP to unsubscribe
									</p>
								</div>
							</div>
						</div>
					</FadeInUpDiv>
				</div>
			</div>
		</section>
	)
}
