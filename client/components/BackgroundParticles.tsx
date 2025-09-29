'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useReduced } from '@/components/Motion'

interface Particle {
	id: number
	x: number
	y: number
	size: number
	opacity: number
	speedX: number
	speedY: number
	delay: number
}

export default function BackgroundParticles() {
	const prefersReducedMotion = useReduced()
	const [particles, setParticles] = useState<Particle[]>([])

	const generateParticles = useCallback(() => {
		if (prefersReducedMotion) return []
		
		const newParticles: Particle[] = []
		const particleCount = 50 // More particles for fuller background
		
		for (let i = 0; i < particleCount; i++) {
			newParticles.push({
				id: i,
				x: Math.random() * 100, // Percentage positions
				y: Math.random() * 100,
				size: Math.random() * 4 + 2, // 2-6px particles
				opacity: Math.random() * 0.4 + 0.2, // Subtle but visible opacity (0.2-0.6)
				speedX: (Math.random() - 0.5) * 0.5, // Very slow movement
				speedY: (Math.random() - 0.5) * 0.3,
				delay: Math.random() * 10 // Stagger animations
			})
		}
		
		return newParticles
	}, [prefersReducedMotion])

	useEffect(() => {
		setParticles(generateParticles())
	}, [generateParticles])

	if (prefersReducedMotion) return null

	return (
		<div className="fixed inset-0 pointer-events-none bg-transparent" style={{ zIndex: -1 }}>
			{particles.map((particle) => (
				<motion.div
					key={particle.id}
					className="absolute bg-accent/60 rounded-full"
					style={{
						width: `${particle.size}px`,
						height: `${particle.size}px`,
						left: `${particle.x}%`,
						top: `${particle.y}%`,
						boxShadow: '0 0 3px rgba(119, 255, 119, 0.2)' // Subtle glow
					}}
					initial={{
						opacity: 0,
						scale: 0
					}}
					animate={{
						opacity: [0, particle.opacity, particle.opacity, 0],
						scale: [0, 1, 1, 0.8],
						x: [0, particle.speedX * 100, particle.speedX * 200],
						y: [0, particle.speedY * 100, particle.speedY * 200],
						rotate: [0, 180, 360]
					}}
					transition={{
						duration: 20 + Math.random() * 10, // 20-30 second cycles
						repeat: Infinity,
						delay: particle.delay,
						ease: "linear"
					}}
				/>
			))}
			
			{/* Additional floating dots for depth */}
			{Array.from({ length: 20 }).map((_, i) => (
				<motion.div
					key={`dot-${i}`}
					className="absolute bg-accent/40 rounded-full"
					style={{
						width: '2px',
						height: '2px',
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						boxShadow: '0 0 2px rgba(119, 255, 119, 0.1)'
					}}
					animate={{
						y: [-20, 20, -20],
						x: [-10, 10, -10],
						opacity: [0.2, 0.5, 0.2],
						scale: [0.8, 1.2, 0.8]
					}}
					transition={{
						duration: 15 + Math.random() * 10,
						repeat: Infinity,
						delay: Math.random() * 5,
						ease: "easeInOut"
					}}
				/>
			))}
		</div>
	)
}
