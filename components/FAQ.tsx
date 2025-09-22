'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReduced } from './Motion'
import { ChevronDown } from 'lucide-react'

const faqData = [
	{
		id: 'faq-1',
		question: 'Does Whisppr call 911?',
		answer: 'No. Whisppr notifies contacts.'
	},
	{
		id: 'faq-2', 
		question: 'Will this drain my battery?',
		answer: 'No heavy background services.'
	},
	{
		id: 'faq-3',
		question: 'What if I\'m offline?',
		answer: 'We queue until signal returns.'
	},
	{
		id: 'faq-4',
		question: 'Can I choose who gets alerted?',
		answer: 'Yes; profiles will be available.'
	},
	{
		id: 'faq-5',
		question: 'Does it send silent background messages?',
		answer: 'No; iOS disallows background SMS.'
	}
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2
		}
	}
}

const itemVariants = {
	hidden: { 
		opacity: 0, 
		y: 10
	},
	visible: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.4,
			ease: [0.22, 1, 0.36, 1]
		}
	}
}

const answerVariants = {
	collapsed: { 
		height: 0,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1]
		}
	},
	expanded: { 
		height: 'auto',
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1]
		}
	}
}

const instantVariants = {
	collapsed: { height: 0, opacity: 0 },
	expanded: { height: 'auto', opacity: 1 }
}

interface FAQItemProps {
	faq: typeof faqData[0]
	isOpen: boolean
	onToggle: () => void
	shouldReduceMotion: boolean
}

function FAQItem({ faq, isOpen, onToggle, shouldReduceMotion }: FAQItemProps) {
	const buttonRef = useRef<HTMLButtonElement>(null)
	const contentId = `${faq.id}-content`

	const handleKeyDown = (event: React.KeyboardEvent) => {
		const currentIndex = faqData.findIndex(item => item.id === faq.id)
		
		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault()
				const nextIndex = (currentIndex + 1) % faqData.length
				const nextButton = document.querySelector(`#${faqData[nextIndex].id}-button`) as HTMLButtonElement
				nextButton?.focus()
				break
			case 'ArrowUp':
				event.preventDefault()
				const prevIndex = currentIndex === 0 ? faqData.length - 1 : currentIndex - 1
				const prevButton = document.querySelector(`#${faqData[prevIndex].id}-button`) as HTMLButtonElement
				prevButton?.focus()
				break
			case 'Home':
				event.preventDefault()
				const firstButton = document.querySelector(`#${faqData[0].id}-button`) as HTMLButtonElement
				firstButton?.focus()
				break
			case 'End':
				event.preventDefault()
				const lastButton = document.querySelector(`#${faqData[faqData.length - 1].id}-button`) as HTMLButtonElement
				lastButton?.focus()
				break
		}
	}

	return (
		<motion.div
			variants={shouldReduceMotion ? {} : itemVariants}
			className="border border-panel/40 rounded-xl overflow-hidden bg-panel/10 backdrop-blur-sm"
		>
			<button
				ref={buttonRef}
				id={`${faq.id}-button`}
				onClick={onToggle}
				onKeyDown={handleKeyDown}
				aria-expanded={isOpen}
				aria-controls={contentId}
				className="
					w-full px-6 py-4 text-left flex items-center justify-between
					transition-colors duration-200 hover:bg-panel/20 focus:bg-panel/20
					focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-inset
				"
			>
				<span className="text-lg font-semibold text-text pr-4">
					{faq.question}
				</span>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
					className="flex-shrink-0"
				>
					<ChevronDown 
						className="w-5 h-5 text-muted" 
						aria-hidden="true"
					/>
				</motion.div>
			</button>
			
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						id={contentId}
						variants={shouldReduceMotion ? instantVariants : answerVariants}
						initial="collapsed"
						animate="expanded" 
						exit="collapsed"
						className="overflow-hidden"
					>
						<div className="px-6 pb-4 pt-2">
							<p className="text-muted leading-relaxed">
								{faq.answer}
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

export default function FAQ() {
	const [openItems, setOpenItems] = useState<string[]>([])
	const shouldReduceMotion = useReduced()

	const toggleItem = (id: string) => {
		setOpenItems(prev => 
			prev.includes(id) 
				? prev.filter(item => item !== id)
				: [...prev, id]
		)
	}

	return (
		<section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
			<div className="max-w-4xl mx-auto">
				<motion.div
					variants={shouldReduceMotion ? {} : containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<div className="text-center mb-12">
						<h2 className="font-bold mb-4 lg:mb-6" style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}>
							Frequently asked{' '}
							<span className="text-accent">questions</span>
						</h2>
						<p className="text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
							Get answers to common questions about how Whisppr works and protects your privacy.
						</p>
					</div>

					<div 
						className="space-y-4"
						role="region"
						aria-label="Frequently Asked Questions"
					>
						{faqData.map((faq) => (
							<FAQItem
								key={faq.id}
								faq={faq}
								isOpen={openItems.includes(faq.id)}
								onToggle={() => toggleItem(faq.id)}
								shouldReduceMotion={shouldReduceMotion}
							/>
						))}
					</div>

					<div className="mt-12 text-center">
						<p className="text-muted">
							Have more questions?{' '}
							<button 
								className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
								onClick={() => {/* TODO: Add contact link */}}
							>
								Get in touch
							</button>
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
