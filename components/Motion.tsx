'use client'

import { motion, useReducedMotion, Variants, Transition, Variant, HTMLMotionProps, useMotionValue, useSpring } from 'framer-motion'
import { createContext, useContext, ReactNode, useEffect, RefObject } from 'react'

// Create a context for reduced motion state
const ReducedMotionContext = createContext<boolean>(false)

// Provider component
export function ReducedMotionProvider({ children }: { children: ReactNode }) {
	const prefersReducedMotion = useReducedMotion()
	
	return (
		<ReducedMotionContext.Provider value={prefersReducedMotion || false}>
			{children}
		</ReducedMotionContext.Provider>
	)
}

// Hook to get reduced motion state
export function useReduced(): boolean {
	return useContext(ReducedMotionContext)
}

// Shared animation variants
export const fadeInUp: Variants = {
	initial: {
		opacity: 0,
		y: 12,
	},
	whileInView: {
		opacity: 1,
		y: 0,
	},
}

export const fadeInUpTransition = {
	duration: 0.5,
}

export const staggerParent: Variants = {
	initial: {},
	whileInView: {
		transition: {
			staggerChildren: 0.08,
		},
	},
}

export const slideIn: Variants = {
	initial: {
		opacity: 0,
		x: -20,
	},
	whileInView: {
		opacity: 1,
		x: 0,
	},
}

export const slideInFromRight: Variants = {
	initial: {
		opacity: 0,
		x: 40,
	},
	whileInView: {
		opacity: 1,
		x: 0,
	},
}

export const slideInFromRightTransition = {
	duration: 0.8,
	ease: 'easeOut',
}

export const slideInTransition = {
	duration: 0.6,
	ease: 'easeOut',
}

export const scaleTap: Variants = {
	whileTap: {
		scale: 0.98,
	},
}

// Bubble-specific motion variants
export const bubbleBreath: Variants = {
	animate: {
		scale: [1, 1.015, 1],
		opacity: [0.9, 1, 0.9],
		transition: {
			duration: 6,
			repeat: Infinity,
			ease: 'easeInOut',
		}
	}
}

export const sweepRotate: Variants = {
	animate: {
		rotate: [0, 360],
		transition: {
			duration: 40,
			repeat: Infinity,
			ease: 'linear',
		}
	}
}

// Helper function to wrap motion props with reduced motion consideration
export function motionProps(
	variants: Variants, 
	transition: Transition = {},
	reducedMotion: boolean = false
) {
	if (reducedMotion) {
		// For reduced motion, only keep opacity animations, remove transforms
		const reducedVariants: Variants = {}
		
		Object.keys(variants).forEach(key => {
			const variant = variants[key]
			if (typeof variant === 'object' && variant !== null) {
				// Extract only opacity, remove transforms
				const typedVariant = variant as Variant
				const opacity = 'opacity' in typedVariant ? typedVariant.opacity : undefined
				reducedVariants[key] = {
					...(opacity !== undefined && { opacity }),
				}
			} else {
				reducedVariants[key] = variant
			}
		})
		
		return {
			variants: reducedVariants,
			transition: { duration: 0.3 },
			viewport: { once: true, margin: '-20% 0px' },
		}
	}
	
	return {
		variants,
		transition,
		viewport: { once: true, margin: '-20% 0px' },
	}
}

// Enhanced motion components with reduced motion support
export function FadeInUpDiv({ 
	children, 
	className, 
	...props 
}: { 
	children: ReactNode
	className?: string
} & Omit<HTMLMotionProps<"div">, "children" | "className">) {
	const isReducedMotion = useReduced()
	
	return (
		<motion.div
			className={className}
			initial="initial"
			whileInView="whileInView"
			viewport={{ once: true, margin: '-10%' }}
			variants={fadeInUp}
			transition={isReducedMotion ? { duration: 0.3 } : fadeInUpTransition}
			{...props}
		>
			{children}
		</motion.div>
	)
}

export function SlideInDiv({ 
	children, 
	className, 
	...props 
}: { 
	children: ReactNode
	className?: string
} & Omit<HTMLMotionProps<"div">, "children" | "className">) {
	const isReducedMotion = useReduced()
	
	return (
		<motion.div
			className={className}
			initial="initial"
			whileInView="whileInView"
			viewport={{ once: true, margin: '-10%' }}
			variants={isReducedMotion ? fadeInUp : slideIn}
			transition={isReducedMotion ? { duration: 0.3 } : slideInTransition}
			{...props}
		>
			{children}
		</motion.div>
	)
}

export function SlideInFromRightDiv({ 
	children, 
	className, 
	...props 
}: { 
	children: ReactNode
	className?: string
} & Omit<HTMLMotionProps<"div">, "children" | "className">) {
	const isReducedMotion = useReduced()
	
	return (
		<motion.div
			className={className}
			initial="initial"
			whileInView="whileInView"
			viewport={{ once: true, margin: '-10%' }}
			variants={isReducedMotion ? fadeInUp : slideInFromRight}
			transition={isReducedMotion ? { duration: 0.3 } : slideInFromRightTransition}
			{...props}
		>
			{children}
		</motion.div>
	)
}

export function StaggerContainer({ 
	children, 
	className, 
	...props 
}: { 
	children: ReactNode
	className?: string
} & Omit<HTMLMotionProps<"div">, "children" | "className">) {
	const isReducedMotion = useReduced()
	
	return (
		<motion.div
			className={className}
			initial="initial"
			whileInView="whileInView"
			viewport={{ once: true, margin: '-10%' }}
			variants={staggerParent}
			{...props}
		>
			{children}
		</motion.div>
	)
}

export function TapButton({ 
	children, 
	className, 
	onClick,
	...props 
}: { 
	children: ReactNode
	className?: string
	onClick?: () => void
} & Omit<HTMLMotionProps<"button">, "children" | "className" | "onClick">) {
	const isReducedMotion = useReduced()
	
	return (
		<motion.button
			className={className}
			onClick={onClick}
			whileTap={isReducedMotion ? {} : { scale: 0.98 }}
			transition={{ duration: 0.1 }}
			{...props}
		>
			{children}
		</motion.button>
	)
}

// useParallax hook for mouse-based parallax effects
export function useParallax(ref: RefObject<HTMLElement>) {
	const x = useMotionValue(0)
	const y = useMotionValue(0)
	const isReducedMotion = useReduced()
	
	// Use spring for smooth motion
	const springX = useSpring(x, { stiffness: 150, damping: 15 })
	const springY = useSpring(y, { stiffness: 150, damping: 15 })

	useEffect(() => {
		// If reduced motion is enabled, set values to 0 and return
		if (isReducedMotion) {
			x.set(0)
			y.set(0)
			return
		}

		const handleMouseMove = (event: MouseEvent) => {
			if (!ref.current) return

			const rect = ref.current.getBoundingClientRect()
			const centerX = rect.left + rect.width / 2
			const centerY = rect.top + rect.height / 2

			// Calculate relative position (-1 to 1)
			const relativeX = (event.clientX - centerX) / (rect.width / 2)
			const relativeY = (event.clientY - centerY) / (rect.height / 2)

			// Clamp and scale to max movement (10px)
			const maxMovement = 10
			const clampedX = Math.max(-1, Math.min(1, relativeX)) * maxMovement
			const clampedY = Math.max(-1, Math.min(1, relativeY)) * maxMovement

			x.set(clampedX)
			y.set(clampedY)
		}

		const handleMouseLeave = () => {
			// Return to center when mouse leaves
			x.set(0)
			y.set(0)
		}

		// Add event listeners to document for global mouse tracking
		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseleave', handleMouseLeave)

		// Cleanup
		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [ref, x, y, isReducedMotion])

	// Return motion values - they'll be 0 if reduced motion is enabled
	return { x: springX, y: springY }
}
