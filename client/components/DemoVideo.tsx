'use client'

import { FadeInUpDiv } from '@/components/Motion'

export function DemoVideo() {
	return (
		<section className="section bg-bg text-text">
			<div className="container">
				<div className="max-w-4xl mx-auto">
					<FadeInUpDiv>
						<div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-green/20 shadow-glow">
							<iframe
								className="absolute inset-0 h-full w-full"
								src="https://www.youtube-nocookie.com/embed/GT4oUOyaf5A"
								title="Whisppr"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							/>
						</div>
					</FadeInUpDiv>
				</div>
			</div>
		</section>
	)
}
