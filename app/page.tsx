'use client'

import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import Features from '@/components/Features'
import PersonasPrivacy from '@/components/PersonasPrivacy'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<main id="main-content">
			{/* Hero Section */}
			<section id="hero">
				<Hero />
			</section>

			{/* How It Works Section */}
			<section id="how-it-works" className="section">
				<HowItWorks />
			</section>

			{/* Features Section - already has py-24 */}
			<section id="features">
				<Features />
			</section>

			{/* Personas + Privacy Section - already has py-24 */}
			<section id="personas-privacy">
				<PersonasPrivacy />
			</section>

			{/* FAQ Section - already has py-24 */}
			<section id="faq">
				<FAQ />
			</section>

			{/* Final CTA / Waitlist Section - already has py-24 */}
			<section id="waitlist">
				<FinalCTA />
			</section>

			{/* Footer */}
			<Footer />
		</main>
	)
}
