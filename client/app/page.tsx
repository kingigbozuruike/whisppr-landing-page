'use client'

import { Hero } from '@/components/Hero'
import { DemoVideo } from '@/components/DemoVideo'
import { HowItWorks } from '@/components/HowItWorks'
import { CampusSafety } from '@/components/CampusSafety'
import { EmergencySpecs } from '@/components/EmergencySpecs'
import Features from '@/components/Features'
import { SampleSMS } from '@/components/SampleSMS'
import { PremiumFeatures } from '@/components/PremiumFeatures'
import PersonasPrivacy from '@/components/PersonasPrivacy'
import { IOSRealities } from '@/components/IOSRealities'
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

			{/* Demo Video Section */}
			<section id="demo">
				<DemoVideo />
			</section>

			{/* How It Works Section */}
			<section id="how-it-works">
				<HowItWorks />
			</section>

			{/* Campus / Institutional Section */}
			<section id="campus">
				<CampusSafety />
			</section>

			{/* Emergency Specs Section */}
			<section id="emergency-specs">
				<EmergencySpecs />
			</section>

			{/* Features Section - MVP */}
			<section id="features">
				<Features />
			</section>

			{/* Sample SMS Section */}
			<section id="sample-sms">
				<SampleSMS />
			</section>

			{/* Premium Features Section */}
			<section id="premium-features">
				<PremiumFeatures />
			</section>

			{/* Personas + Privacy Section */}
			<section id="personas-privacy">
				<PersonasPrivacy />
			</section>

			{/* iOS Realities Section */}
			<section id="ios-realities">
				<IOSRealities />
			</section>

			{/* FAQ Section */}
			<section id="faq">
				<FAQ />
			</section>

			{/* Final CTA / Waitlist Section */}
			<section id="waitlist">
				<FinalCTA />
			</section>

			{/* Footer */}
			<Footer />
		</main>
	)
}
