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

export default function NavWhispprParticles() {
	const prefersReducedMotion = useReduced()
	const [particles, setParticles] = useState<Particle[]>([])
	const [isAnimating, setIsAnimating] = useState(false)
	const [showText, setShowText] = useState(true)

	const text = "Whisppr"
	const letters = text.split('')

	// Generate fewer particles for navbar (more subtle)
	const generateParticles = (letterIndex: number) => {
		const newParticles: Particle[] = []
		const particleCount = 12 // fewer particles for navbar
		
		for (let i = 0; i < particleCount; i++) {
			newParticles.push({
				id: Date.now() + letterIndex * 1000 + i,
				x: (Math.random() - 0.5) * 20,
				y: (Math.random() - 0.5) * 25,
				opacity: 1,
				size: Math.random() * 2 + 1,
				speed: Math.random() * 1.2 + 0.5
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
				}, 2000)
			}, (letters.length - 1 - index) * 120) // faster sequence for navbar
		})

		// Start fade out before reset
		setTimeout(() => {
			setShowText(false)
		}, 3200)

		// Reset after full animation with fade in
		setTimeout(() => {
			setIsAnimating(false)
			setParticles([])
			setShowText(true)
		}, 3500)
	}, [prefersReducedMotion, letters])

	useEffect(() => {
		// Start animation on mount
		const timer = setTimeout(startAnimation, 2000) // delay initial animation
		
		// Repeat animation every 15 seconds (less frequent for navbar)
		const interval = setInterval(startAnimation, 15000)
		
		return () => {
			clearTimeout(timer)
			clearInterval(interval)
		}
	}, [startAnimation])

	return (
		<div className="relative">
			{/* Main Text - navbar sized */}
			<div className="relative flex justify-center">
				<motion.div 
					className="text-xl lg:text-2xl font-bold text-text relative"
					style={{ fontFamily: 'var(--font-karla), Karla, sans-serif' }}
					animate={{
						opacity: showText ? 1 : 0
					}}
					transition={{
						duration: 0.3,
						ease: "easeInOut"
					}}
				>
					{letters.map((letter, index) => (
						<motion.span
							key={index}
							className="inline-block"
							animate={isAnimating ? {
								opacity: [1, 0.7, 0.2, 0],
								scale: [1, 1.02, 0.98, 0.9],
								filter: [
									'blur(0px)',
									'blur(0.3px)',
									'blur(1px)',
									'blur(2px)'
								],
								y: [0, -2, 2, 8]
							} : {}}
							transition={{
								duration: 2,
								delay: (letters.length - 1 - index) * 0.12,
								ease: [0.25, 0.46, 0.45, 0.94]
							}}
						>
							{letter}
						</motion.span>
					))}
				</motion.div>

				{/* Particles - scaled for navbar */}
				<div className="absolute inset-0 pointer-events-none overflow-visible">
					{particles.map((particle) => (
						<motion.div
							key={particle.id}
							className="absolute bg-accent rounded-full"
							style={{
								width: `${particle.size}px`,
								height: `${particle.size}px`,
								left: '50%',
								top: '50%',
								boxShadow: '0 0 4px rgba(119, 255, 119, 0.5)'
							}}
							initial={{
								x: particle.x,
								y: particle.y,
								opacity: particle.opacity,
								scale: 1
							}}
							animate={{
								x: particle.x + (-80 - (particle.speed * 60)),
								y: particle.y + (Math.random() - 0.5) * 40,
								opacity: 0,
								scale: [1, 1.1, 0.1],
								rotate: Math.random() * 180
							}}
							transition={{
								duration: 2.2,
								ease: [0.25, 0.46, 0.45, 0.94]
							}}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
