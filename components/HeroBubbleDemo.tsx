'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { bubbleBreath, sweepRotate, useParallax, useReduced } from '@/components/Motion'

export default function HeroBubbleDemo() {
	const containerRef = useRef<HTMLDivElement>(null)
	const prefersReducedMotion = useReduced()
	const { x, y } = useParallax(containerRef)

	return (
		<div 
			ref={containerRef}
			className="relative w-full max-w-md mx-auto"
		>
			{/* Container with fixed aspect ratio */}
			<div className="relative aspect-square w-full">
				{/* Bubble Layer (the orb) - behind phone */}
				<motion.div
					className="absolute inset-0 flex items-center justify-center"
					variants={prefersReducedMotion ? {} : bubbleBreath}
					animate={prefersReducedMotion ? {} : "animate"}
					style={{ x, y }}
				>
					{/* Main Bubble */}
					<div 
						className="relative w-full aspect-square rounded-full backdrop-blur-xl border border-white/10 glow-pulse"
						style={{
							background: `radial-gradient(ellipse at 30% 30%, rgba(119, 255, 119, 0.3) 0%, rgba(119, 255, 119, 0.1) 50%, transparent 70%)`,
							boxShadow: `
								inset 0 1px 0 rgba(255, 255, 255, 0.2),
								inset 0 -1px 0 rgba(255, 255, 255, 0.1),
								0 4px 32px rgba(119, 255, 119, 0.15),
								0 8px 64px rgba(119, 255, 119, 0.1),
								0 16px 128px rgba(119, 255, 119, 0.05)
							`
						}}
					>
						{/* Inner highlight ring */}
						<div 
							className="absolute inset-2 rounded-full"
							style={{
								background: `radial-gradient(ellipse at 40% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
								border: '1px solid rgba(255, 255, 255, 0.05)'
							}}
						/>

						{/* Sweep highlight */}
						<motion.div
							className="absolute inset-0 rounded-full overflow-hidden"
							variants={prefersReducedMotion ? {} : sweepRotate}
							animate={prefersReducedMotion ? {} : "animate"}
						>
							<div 
								className="absolute inset-0 rounded-full"
								style={{
									background: `conic-gradient(
										from 0deg,
										transparent 0deg,
										rgba(255, 255, 255, 0.1) 30deg,
										rgba(20, 184, 166, 0.2) 60deg,
										rgba(255, 255, 255, 0.1) 90deg,
										transparent 120deg,
										transparent 360deg
									)`,
									mask: `radial-gradient(ellipse at center, transparent 60%, black 62%, black 98%, transparent 100%)`
								}}
							/>
						</motion.div>

						{/* Additional outer glow layers */}
						<div 
							className="absolute -inset-8 rounded-full opacity-40 pointer-events-none"
							style={{
								background: `radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.08) 0%, transparent 70%)`,
								filter: 'blur(20px)'
							}}
						/>
					</div>
				</motion.div>

				{/* Phone Frame - in front of bubble */}
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<div className="relative">
						{/* Phone bezel */}
						<div 
							className="w-40 h-80 rounded-[2rem] p-1 bg-black relative overflow-hidden"
							style={{
								border: '2px solid #333',
								boxShadow: `
									0 0 0 1px rgba(255, 255, 255, 0.1),
									0 8px 32px rgba(0, 0, 0, 0.6),
									inset 0 1px 0 rgba(255, 255, 255, 0.05)
								`
							}}
						>
							{/* Screen area */}
							<div 
								className="w-full h-full rounded-[1.7rem] relative overflow-hidden"
								style={{
									background: `linear-gradient(145deg, #0A0F14, #1a2332)`,
									border: '1px solid rgba(100, 116, 139, 0.1)'
								}}
							>
								{/* iPhone notch */}
								<div 
									className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl z-10"
									style={{
										boxShadow: 'inset 0 -2px 4px rgba(255,255,255,0.1)'
									}}
								>
									{/* Speaker grille */}
									<div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-700 rounded-full"></div>
								</div>

								{/* Screen content placeholder */}
								<div className="p-4 pt-8 h-full flex flex-col justify-between relative z-0">
									{/* iOS Status bar - positioned around notch */}
									<div className="absolute top-1.5 left-4 right-4 flex justify-start items-center text-white text-xs">
										<div className="flex items-center">
											<span className="font-medium">9:41</span>
										</div>
									</div>

									{/* Main content area */}
									<div className="flex-1 flex items-center justify-center mt-8">
										{/* Dissolving Emergency Circle */}
										<motion.div 
											className="flex flex-col items-center justify-center"
											animate={!prefersReducedMotion ? {
												opacity: [1, 1, 0.7, 0.3, 0.1, 0, 1],
												scale: [1, 1, 0.95, 0.9, 0.85, 0.8, 1],
												filter: [
													'blur(0px)',
													'blur(0px)',
													'blur(0.5px)',
													'blur(1px)',
													'blur(2px)',
													'blur(3px)',
													'blur(0px)'
												]
											} : {}}
											transition={{
												duration: 8,
												repeat: Infinity,
												ease: "easeInOut"
											}}
										>
											{/* Emergency Triangle */}
											<div className="relative">
												<motion.div 
													className="w-12 h-12 border-2 border-accent bg-accent/10 flex items-center justify-center relative"
													style={{
														clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
													}}
													animate={!prefersReducedMotion ? {
														rotate: [0, 2, -2, 0]
													} : {}}
													transition={{
														duration: 4,
														repeat: Infinity,
														ease: "easeInOut"
													}}
												>
													{/* Exclamation mark */}
													<div className="absolute inset-0 flex items-center justify-center">
														<div className="text-accent text-lg font-bold">!</div>
													</div>
												</motion.div>
											</div>
										</motion.div>
									</div>

									{/* Bottom area */}
									<div className="text-center">
										<motion.div 
											className="w-12 h-1 bg-teal-500/60 rounded-full mx-auto"
											animate={!prefersReducedMotion ? {
												opacity: [0.6, 1, 0.6],
												scaleX: [1, 1.1, 1]
											} : {}}
											transition={{
												duration: 2.5,
												repeat: Infinity,
												ease: "easeInOut"
											}}
										/>
									</div>
								</div>

								{/* Screen reflection */}
								<div 
									className="absolute inset-0 rounded-[1.8rem] pointer-events-none"
									style={{
										background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.05) 100%)`
									}}
								/>
							</div>

							{/* Phone highlight */}
							<div 
								className="absolute top-1 left-1/4 right-1/4 h-1 rounded-b opacity-30"
								style={{
									background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
