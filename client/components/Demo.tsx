'use client'

import { motion } from 'framer-motion'
import { useReduced } from '@/components/Motion'

export function Demo() {
	const isReducedMotion = useReduced()

	// Sound wave animation variants
	const waveVariants = {
		animate: {
			scale: [1, 1.4, 1.8, 2.2],
			opacity: [0.6, 0.4, 0.2, 0],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: "easeOut"
			}
		}
	}

	const bubbleVariants = {
		animate: {
			scale: [1, 1.02, 1],
			transition: {
				duration: 4,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}
	}

	const phoneVariants = {
		animate: {
			y: [0, -4, 0],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}
	}

	return (
		<div className="relative w-full max-w-sm mx-auto">
			{/* Main container with aspect ratio */}
			<div className="relative aspect-[3/4] w-full">
				{/* Sound waves - outermost */}
				{!isReducedMotion && (
					<>
						{[...Array(4)].map((_, i) => (
							<motion.div
								key={`wave-${i}`}
								className="absolute inset-0 rounded-full border-2 border-accent/20"
								variants={waveVariants}
								animate="animate"
								style={{
									animationDelay: `${i * 0.7}s`
								}}
							/>
						))}
					</>
				)}

				{/* Protective bubble */}
				<motion.div
					className="absolute inset-6 rounded-full"
					variants={isReducedMotion ? {} : bubbleVariants}
					animate={isReducedMotion ? {} : "animate"}
					style={{
						background: `
							radial-gradient(ellipse at 30% 30%, rgba(0, 210, 255, 0.15) 0%, transparent 50%),
							radial-gradient(ellipse at 70% 70%, rgba(78, 205, 196, 0.10) 0%, transparent 50%),
							radial-gradient(ellipse at 50% 50%, rgba(0, 210, 255, 0.05) 0%, transparent 70%)
						`,
						backdropFilter: 'blur(20px)',
						border: '1px solid rgba(0, 210, 255, 0.2)',
						boxShadow: `
							0 0 40px rgba(0, 210, 255, 0.15),
							inset 0 0 40px rgba(0, 210, 255, 0.05)
						`
					}}
				>
					{/* Inner glow */}
					<div 
						className="absolute inset-2 rounded-full opacity-40"
						style={{
							background: `
								radial-gradient(ellipse at 50% 50%, rgba(0, 210, 255, 0.1) 0%, transparent 60%)
							`
						}}
					/>

					{/* Phone container */}
					<motion.div
						className="absolute inset-0 flex items-center justify-center"
						variants={isReducedMotion ? {} : phoneVariants}
						animate={isReducedMotion ? {} : "animate"}
					>
						{/* Phone */}
						<div className="relative">
							{/* Phone body */}
							<div 
								className="w-24 h-44 rounded-3xl relative overflow-hidden"
								style={{
									background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
									border: '2px solid #333',
									boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
								}}
							>
								{/* Screen */}
								<div 
									className="absolute inset-2 rounded-2xl overflow-hidden"
									style={{
										background: 'linear-gradient(145deg, #0A0F14, #1a2332)'
									}}
								>
									{/* Screen content - Whisppr widget */}
									<div className="p-3 h-full flex flex-col">
										{/* Status bar */}
										<div className="flex justify-between items-center mb-2">
											<div className="flex space-x-1">
												<div className="w-1 h-1 bg-white/60 rounded-full"></div>
												<div className="w-1 h-1 bg-white/60 rounded-full"></div>
												<div className="w-1 h-1 bg-white/60 rounded-full"></div>
											</div>
											<div className="text-white/60 text-xs">9:41</div>
											<div className="flex space-x-1">
												<div className="w-3 h-1.5 bg-white/60 rounded-sm"></div>
											</div>
										</div>

										{/* Whisppr widget */}
										<div className="flex-1 flex items-center justify-center">
											<motion.div 
												className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/40"
												whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
												transition={{ duration: 0.2 }}
											>
												<div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
													<span className="text-xs text-bg font-bold">W</span>
												</div>
											</motion.div>
										</div>

										{/* Bottom indicator */}
										<div className="text-center">
											<div className="text-white/40 text-xs mb-1">Emergency Alert</div>
											<motion.div 
												className="w-8 h-0.5 bg-accent/60 rounded mx-auto"
												animate={!isReducedMotion ? {
													opacity: [0.6, 1, 0.6],
													scale: [1, 1.1, 1]
												} : {}}
												transition={{
													duration: 2,
													repeat: Infinity,
													ease: "easeInOut"
												}}
											/>
										</div>
									</div>
								</div>

								{/* Phone highlight */}
								<div 
									className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-white/20 rounded-b"
								/>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Subtle ambient glow */}
				<div 
					className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
					style={{
						background: `
							radial-gradient(circle at 50% 50%, rgba(0, 210, 255, 0.03) 0%, transparent 70%)
						`,
						filter: 'blur(30px)'
					}}
				/>
			</div>
		</div>
	)
}
