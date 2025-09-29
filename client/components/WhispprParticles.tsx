'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useReduced } from '@/components/Motion'

interface Particle {
	id: number
	x: number
	y: number
	opacity: number
	size: number
	speed: number
}

export default function WhispprParticles() {
	const prefersReducedMotion = useReduced()
	const [particles, setParticles] = useState<Particle[]>([])
	const [isAnimating, setIsAnimating] = useState(false)

	const text = "Whisppr"
	const letters = text.split('')

	// Generate particles for each letter
	const generateParticles = (letterIndex: number) => {
		const newParticles: Particle[] = []
		const particleCount = 40 // massively increased particles per letter for dense disintegration effect
		
		for (let i = 0; i < particleCount; i++) {
			newParticles.push({
				id: Date.now() + letterIndex * 1000 + i,
				x: (Math.random() - 0.5) * 40, // slightly more spread
				y: (Math.random() - 0.5) * 80, // increased vertical spread
				opacity: 1,
				size: Math.random() * 3.5 + 1, // varied particle sizes
				speed: Math.random() * 1.8 + 0.6
			})
		}
		return newParticles
	}

	const startAnimation = useCallback(() => {
		if (prefersReducedMotion) return
		setIsAnimating(true)
		setParticles([])

		// Animate each letter dissolving from right to left
		letters.forEach((letter, index) => {
			setTimeout(() => {
				const newParticles = generateParticles(index)
				setParticles(prev => [...prev, ...newParticles])

				// Remove particles after animation
				setTimeout(() => {
					setParticles(prev => 
						prev.filter(p => !newParticles.some(np => np.id === p.id))
					)
				}, 3000) // longer particle lifetime for smoother effect
			}, (letters.length - 1 - index) * 150) // faster letter sequence for smoother disintegration
		})

		// Reset after full animation
		setTimeout(() => {
			setIsAnimating(false)
			setParticles([])
		}, 5000) // longer reset time for smoother cycle
	}, [prefersReducedMotion, letters])

	useEffect(() => {
		// Start animation on mount
		const timer = setTimeout(startAnimation, 1000)
		
		// Repeat animation every 10 seconds for better pacing
		const interval = setInterval(startAnimation, 10000)
		
		return () => {
			clearTimeout(timer)
			clearInterval(interval)
		}
	}, [prefersReducedMotion, startAnimation])

	return (
		<div className="relative w-full py-16 bg-slate-900/50">
			<div className="max-w-4xl mx-auto px-6">
				{/* Main Text */}
				<div className="relative flex justify-center">
					<motion.div 
						className="text-8xl font-bold text-white relative"
						style={{ fontFamily: 'var(--font-karla), Karla, sans-serif' }}
					>
						{letters.map((letter, index) => (
							<motion.span
								key={index}
								className="inline-block"
								animate={isAnimating ? {
									opacity: [1, 0.8, 0.3, 0],
									scale: [1, 1.05, 0.95, 0.8],
									filter: [
										'blur(0px)',
										'blur(0.5px)',
										'blur(2px)',
										'blur(4px)'
									],
									y: [0, -5, 5, 15] // slight movement as letter disintegrates
								} : {}}
								transition={{
									duration: 2.5, // longer, smoother transition
									delay: (letters.length - 1 - index) * 0.15,
									ease: [0.25, 0.46, 0.45, 0.94] // smoother easing curve
								}}
							>
								{letter}
							</motion.span>
						))}
					</motion.div>

					{/* Particles */}
					<div className="absolute inset-0 pointer-events-none">
						{particles.map((particle) => (
							<motion.div
								key={particle.id}
								className="absolute bg-teal-400 rounded-full"
								style={{
									width: `${particle.size}px`,
									height: `${particle.size}px`,
									left: '50%',
									top: '50%',
									boxShadow: '0 0 6px rgba(20, 184, 166, 0.6)' // subtle glow
								}}
								initial={{
									x: particle.x,
									y: particle.y,
									opacity: particle.opacity,
									scale: 1
								}}
								animate={{
									x: particle.x + (-180 - (particle.speed * 120)), // more varied spread
									y: particle.y + (Math.random() - 0.5) * 100, // more vertical movement
									opacity: 0,
									scale: [1, 1.2, 0.1], // particles expand then shrink
									rotate: Math.random() * 360 // subtle rotation
								}}
								transition={{
									duration: 2.8, // longer, smoother particle animation
									ease: [0.25, 0.46, 0.45, 0.94] // matching easing
								}}
							/>
						))}
					</div>
				</div>

				{/* Subtitle */}
				<motion.p 
					className="text-center text-white/70 text-lg mt-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
				>
					Messages that fade away like whispers
				</motion.p>
			</div>
		</div>
	)
}
