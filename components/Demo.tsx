'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReduced } from '@/components/Motion'

type DemoState = 'widget' | 'toast' | 'sms'

export function Demo() {
	const [currentState, setCurrentState] = useState<DemoState>('widget')
	const [progress, setProgress] = useState(0)
	const [isPlaying, setIsPlaying] = useState(true)
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
	const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null)
	const isReducedMotion = useReduced()

	const clearTimers = useCallback(() => {
		if (timeoutId) clearTimeout(timeoutId)
		if (intervalId) clearInterval(intervalId)
		setTimeoutId(null)
		setIntervalId(null)
	}, [timeoutId, intervalId])

	const resetDemo = useCallback(() => {
		clearTimers()
		setCurrentState('widget')
		setProgress(0)
		setIsPlaying(true)
	}, [clearTimers])

	const startDemo = useCallback(() => {
		if (isReducedMotion) {
			setIsPlaying(false)
			return
		}

		// Widget tap → show toast (1.2s delay)
		const tapTimeout = setTimeout(() => {
			setCurrentState('toast')
			setProgress(0)

			// 5s progress animation
			const progressInterval = setInterval(() => {
				setProgress(prev => {
					const newProgress = prev + (100 / (5000 / 100)) // Update every 100ms
					if (newProgress >= 100) {
						clearInterval(progressInterval)
						// Show SMS after progress completes (0.4s delay)
						setTimeout(() => {
							setCurrentState('sms')
							// Hold SMS for 1s, then restart loop
							setTimeout(() => {
								resetDemo()
							}, 1000)
						}, 400)
						return 100
					}
					return newProgress
				})
			}, 100)

			setIntervalId(progressInterval)
		}, 1200)

		setTimeoutId(tapTimeout)
	}, [isReducedMotion, resetDemo])

	useEffect(() => {
		if (isPlaying && !isReducedMotion) {
			startDemo()
		}

		return clearTimers
	}, [isPlaying, isReducedMotion, startDemo, clearTimers])

	const handleReplay = () => {
		resetDemo()
		if (!isReducedMotion) {
			setTimeout(startDemo, 100)
		}
	}

	const handleCancel = () => {
		clearTimers()
		setCurrentState('widget')
		setProgress(0)
		setIsPlaying(false)
	}

	if (isReducedMotion) {
		return (
			<div 
				className="relative w-full h-full bg-bg rounded-[2.5rem] border border-panel/50 overflow-hidden"
				role="img"
				aria-label="Demo of widget trigger to undo to SMS - static view due to reduced motion settings"
			>
				<StaticDemo onReplay={handleReplay} />
			</div>
		)
	}

	return (
		<div 
			className="relative w-full h-full bg-bg rounded-[2.5rem] border border-panel/50 overflow-hidden"
			role="img"
			aria-label="Demo of widget trigger to undo to SMS"
		>
			{/* Screen content */}
			<div className="absolute inset-4 flex flex-col">
				{/* Status bar */}
				<div className="flex justify-between items-center mb-8 pt-4">
					<div className="text-xs text-muted">9:41</div>
					<div className="flex items-center gap-1">
						<div className="w-4 h-2 border border-muted rounded-sm">
							<div className="w-3 h-1 bg-accent rounded-sm m-0.5"></div>
						</div>
					</div>
				</div>

				{/* Toast notification */}
				<AnimatePresence>
					{currentState === 'toast' && (
						<motion.div
							initial={{ y: -60, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -60, opacity: 0 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
							className="bg-panel border border-panel/50 rounded-xl p-4 mb-4 shadow-low"
							role="alert"
							aria-label={`Sending emergency alert in ${Math.ceil((100 - progress) / 20)} seconds`}
						>
							<div className="flex items-center justify-between mb-2">
								<span className="text-sm font-medium text-text">
									Sending in {Math.ceil((100 - progress) / 20)}s…
								</span>
								<button
									onClick={handleCancel}
									className="text-xs text-accent hover:text-accent/80 font-medium"
									aria-label="Cancel emergency alert"
								>
									Cancel
								</button>
							</div>
							<div className="w-full bg-panel/50 rounded-full h-1.5 overflow-hidden">
								<motion.div
									className="h-full bg-accent rounded-full"
									initial={{ width: '0%' }}
									animate={{ width: `${progress}%` }}
									transition={{ duration: 0.1, ease: 'linear' }}
								/>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Main content area */}
				<div className="flex-1 flex flex-col items-center justify-center space-y-6">
					{/* App icon */}
					<div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
						<div className="w-8 h-8 bg-accent rounded-lg"></div>
					</div>

					{/* App title */}
					<div className="text-center space-y-2">
						<div className="w-32 h-4 bg-panel rounded"></div>
						<div className="w-24 h-3 bg-panel/50 rounded"></div>
					</div>

					{/* Widget button */}
					<AnimatePresence mode="wait">
						{currentState === 'widget' && (
							<motion.div
								key="widget"
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ 
									scale: 1, 
									opacity: 1,
								}}
								exit={{ scale: 0.9, opacity: 0 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}
								className="bg-accent/10 rounded-xl border border-accent/20 px-6 py-3 cursor-pointer relative"
								role="button"
								aria-label="Emergency alert widget - disguised as normal app button"
							>
								{/* Subtle pulse ring for attention */}
								<motion.div
									className="absolute inset-0 bg-accent/5 rounded-xl"
									animate={{ 
										scale: [1, 1.05, 1],
										opacity: [0.5, 0.8, 0.5]
									}}
									transition={{ 
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut"
									}}
								/>
								<div className="flex items-center gap-2 relative">
									<div className="w-3 h-3 bg-accent/60 rounded-full"></div>
									<span className="text-sm text-muted">Quick Actions</span>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* SMS Preview Card */}
				<AnimatePresence>
					{currentState === 'sms' && (
						<motion.div
							initial={{ x: 300, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 300, opacity: 0 }}
							transition={{ duration: 0.4, ease: 'easeOut' }}
							className="absolute bottom-20 left-4 right-4 bg-panel border border-panel/50 rounded-xl p-4 shadow-low"
							role="alert"
							aria-label="SMS preview showing emergency alert sent to contacts"
						>
							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
									<div className="w-4 h-4 bg-bg rounded-sm"></div>
								</div>
								<div className="flex-1">
									<div className="text-xs text-muted mb-1">Messages</div>
									<div className="text-sm text-text font-medium mb-1">Emergency Contact</div>
									<div className="text-xs text-muted">
										🚨 I need help. My location: [Live Location]
									</div>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Replay button */}
				{!isPlaying && (
					<motion.button
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						onClick={handleReplay}
						className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-accent/20 hover:bg-accent/30 text-accent text-xs px-4 py-2 rounded-lg transition-colors"
						aria-label="Replay demo animation"
					>
						Replay Demo
					</motion.button>
				)}

				{/* Bottom home indicator */}
				<div className="flex justify-center pb-4">
					<div className="w-32 h-1 bg-panel rounded-full"></div>
				</div>
			</div>

			{/* Notch */}
			<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-bg rounded-b-2xl"></div>
		</div>
	)
}

// Static version for reduced motion - shows State B (undo countdown)
function StaticDemo({ onReplay }: { onReplay: () => void }) {
	return (
		<div className="absolute inset-4 flex flex-col">
			{/* Status bar */}
			<div className="flex justify-between items-center mb-8 pt-4">
				<div className="text-xs text-muted">9:41</div>
				<div className="flex items-center gap-1">
					<div className="w-4 h-2 border border-muted rounded-sm">
						<div className="w-3 h-1 bg-accent rounded-sm m-0.5"></div>
					</div>
				</div>
			</div>

			{/* State B: Undo countdown display */}
			<div className="flex-1 flex flex-col items-center justify-center space-y-6">
				{/* Toast notification */}
				<div className="bg-coral/20 border border-coral/40 rounded-xl p-4 max-w-xs text-center">
					<div className="text-coral text-sm font-medium mb-2">
						Sending emergency alert...
					</div>
					<div className="text-coral/80 text-xs mb-3">
						Alert will be sent in 3 seconds
					</div>
					
					{/* Progress ring (static at ~60%) */}
					<div className="relative w-12 h-12 mx-auto mb-3">
						<svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 24 24">
							<circle
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
								className="text-coral/20"
							/>
							<circle
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
								strokeDasharray="62.83"
								strokeDashoffset="25.13"
								className="text-coral"
								strokeLinecap="round"
							/>
						</svg>
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="text-coral text-xs font-medium">3</span>
						</div>
					</div>
					
					<button 
						className="bg-coral text-white text-xs px-4 py-2 rounded-lg font-medium"
						aria-label="Cancel emergency alert (static demo)"
						tabIndex={-1}
					>
						Cancel
					</button>
				</div>

				<div className="text-center space-y-2">
					<div className="text-xs text-muted">
						Reduced motion: showing undo state
					</div>
					<button
						onClick={onReplay}
						className="bg-accent/20 hover:bg-accent/30 text-accent text-xs px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-bg"
						aria-label="Enable motion to see animated demo"
					>
						Enable Motion for Full Demo
					</button>
				</div>
			</div>

			{/* Bottom home indicator */}
			<div className="flex justify-center pb-4">
				<div className="w-32 h-1 bg-panel rounded-full"></div>
			</div>
		</div>
	)
}
