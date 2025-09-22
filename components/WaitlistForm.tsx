'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReduced } from './Motion'
import { Mail, User, MessageSquare, Check, AlertCircle } from 'lucide-react'

interface FormData {
	email: string
	name: string
	why: string
	consent: boolean
}

interface FormErrors {
	email?: string
	consent?: string
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const inputVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: { 
		opacity: 1, 
		y: 0,
		transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
	}
}

export default function WaitlistForm() {
	const [formData, setFormData] = useState<FormData>({
		email: '',
		name: '',
		why: '',
		consent: false
	})
	const [errors, setErrors] = useState<FormErrors>({})
	const [formState, setFormState] = useState<FormState>('idle')
	const shouldReduceMotion = useReduced()

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {}

		// Email validation
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address'
		}

		// Consent validation
		if (!formData.consent) {
			newErrors.consent = 'You must agree to join the waitlist'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		if (!validateForm()) {
			return
		}

		setFormState('submitting')
		setErrors({})

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1500))
			
			// Log the payload as requested
			console.log('Waitlist Form Payload:', {
				email: formData.email,
				name: formData.name || null,
				why: formData.why || null,
				consent: formData.consent,
				timestamp: new Date().toISOString()
			})

			setFormState('success')
			
			// Reset form after success
			setTimeout(() => {
				setFormData({ email: '', name: '', why: '', consent: false })
				setFormState('idle')
			}, 3000)

		} catch (error) {
			console.error('Waitlist submission error:', error)
			setFormState('error')
			
			// Reset error state after 3 seconds
			setTimeout(() => {
				setFormState('idle')
			}, 3000)
		}
	}

	const handleInputChange = (field: keyof FormData, value: string | boolean) => {
		setFormData(prev => ({ ...prev, [field]: value }))
		
		// Clear errors when user starts typing
		if (errors[field as keyof FormErrors]) {
			setErrors(prev => ({ ...prev, [field]: undefined }))
		}
	}

	return (
		<motion.form
			variants={shouldReduceMotion ? {} : inputVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			onSubmit={handleSubmit}
			className="w-full max-w-md mx-auto space-y-4 lg:space-y-6 px-4 sm:px-0"
			noValidate
		>
			{/* Email Input - Required */}
			<div>
				<label htmlFor="email" className="block text-sm font-medium text-text mb-2">
					Email address *
				</label>
				<div className="relative">
					<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" aria-hidden="true" />
					<input
						type="email"
						id="email"
						value={formData.email}
						onChange={(e) => handleInputChange('email', e.target.value)}
						disabled={formState === 'submitting'}
						className={`
							w-full pl-10 pr-4 py-3 rounded-xl border backdrop-blur-sm
							transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
							focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 
							focus:ring-offset-transparent
							${errors.email 
								? 'border-coral bg-coral/5 text-text' 
								: 'border-panel/40 bg-panel/10 text-text hover:border-panel/60'
							}
						`}
						placeholder="your@email.com"
						aria-invalid={errors.email ? 'true' : 'false'}
						aria-describedby={errors.email ? 'email-error' : undefined}
					/>
				</div>
				{errors.email && (
					<p id="email-error" className="mt-2 text-sm text-coral flex items-center space-x-1">
						<AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
						<span>{errors.email}</span>
					</p>
				)}
			</div>

			{/* Name Input - Optional */}
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-text mb-2">
					Name <span className="text-muted text-xs">(optional)</span>
				</label>
				<div className="relative">
					<User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" aria-hidden="true" />
					<input
						type="text"
						id="name"
						value={formData.name}
						onChange={(e) => handleInputChange('name', e.target.value)}
						disabled={formState === 'submitting'}
						className="
							w-full pl-10 pr-4 py-3 rounded-xl border border-panel/40 
							bg-panel/10 backdrop-blur-sm text-text transition-all duration-200
							hover:border-panel/60 focus:outline-none focus:ring-2 focus:ring-accent/50 
							focus:ring-offset-2 focus:ring-offset-transparent
							disabled:opacity-50 disabled:cursor-not-allowed
						"
						placeholder="Your name"
					/>
				</div>
			</div>

			{/* Why Input - Optional */}
			<div>
				<label htmlFor="why" className="block text-sm font-medium text-text mb-2">
					Why are you interested? <span className="text-muted text-xs">(optional)</span>
				</label>
				<div className="relative">
					<MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted" aria-hidden="true" />
					<textarea
						id="why"
						value={formData.why}
						onChange={(e) => handleInputChange('why', e.target.value)}
						disabled={formState === 'submitting'}
						rows={3}
						className="
							w-full pl-10 pr-4 py-3 rounded-xl border border-panel/40 
							bg-panel/10 backdrop-blur-sm text-text transition-all duration-200
							hover:border-panel/60 focus:outline-none focus:ring-2 focus:ring-accent/50 
							focus:ring-offset-2 focus:ring-offset-transparent resize-none
							disabled:opacity-50 disabled:cursor-not-allowed
						"
						placeholder="Tell us about your safety concerns or how you'd use Whisppr..."
					/>
				</div>
			</div>

			{/* Consent Checkbox - Required */}
			<div>
				<label className="flex items-start space-x-3 cursor-pointer">
					<div className="relative mt-0.5">
						<input
							type="checkbox"
							checked={formData.consent}
							onChange={(e) => handleInputChange('consent', e.target.checked)}
							disabled={formState === 'submitting'}
							className="sr-only"
							aria-invalid={errors.consent ? 'true' : 'false'}
							aria-describedby={errors.consent ? 'consent-error' : undefined}
						/>
						<div className={`
							w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200
							${formData.consent 
								? 'bg-accent border-accent' 
								: errors.consent 
									? 'border-coral bg-coral/5'
									: 'border-panel/60 bg-panel/10'
							}
							${formState === 'submitting' ? 'opacity-50' : 'hover:border-accent/60'}
						`}>
							{formData.consent && (
								<Check className="w-3 h-3 text-white" aria-hidden="true" />
							)}
						</div>
					</div>
					<span className={`text-sm leading-relaxed ${errors.consent ? 'text-coral' : 'text-muted'}`}>
						I agree to join the Whisppr waitlist and receive updates about the app. *
					</span>
				</label>
				{errors.consent && (
					<p id="consent-error" className="mt-2 text-sm text-coral flex items-center space-x-1">
						<AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
						<span>{errors.consent}</span>
					</p>
				)}
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={formState === 'submitting'}
				className="
					w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200
					bg-accent text-white hover:bg-accent/90 focus:outline-none focus:ring-2 
					focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-transparent
					disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]
				"
			>
				{formState === 'submitting' ? (
					<span className="flex items-center justify-center space-x-2">
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
							className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
						/>
						<span>Joining waitlist...</span>
					</span>
				) : (
					'Join the waitlist'
				)}
			</button>

			{/* Success/Error Messages */}
			<div className="min-h-[60px] flex items-center justify-center">
				{formState === 'success' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex items-center space-x-2 text-accent"
					>
						<Check className="w-5 h-5" aria-hidden="true" />
						<span className="font-medium">Successfully joined the waitlist! Check your email.</span>
					</motion.div>
				)}
				
				{formState === 'error' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex items-center space-x-2 text-coral"
					>
						<AlertCircle className="w-5 h-5" aria-hidden="true" />
						<span className="font-medium">Something went wrong. Please try again.</span>
					</motion.div>
				)}
			</div>
		</motion.form>
	)
}
