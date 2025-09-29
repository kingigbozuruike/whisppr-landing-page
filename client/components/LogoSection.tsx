'use client'

import { motion } from 'framer-motion'
import NavWhispprParticles from '@/components/NavWhispprParticles'

export default function LogoSection() {
	return (
		<section className="relative w-full py-24 sm:py-28 lg:py-32 xl:py-36 bg-gradient-to-b from-transparent via-panel/10 to-transparent overflow-hidden">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
				{/* Main Logo - Massive font override */}
				<motion.div 
					className="relative flex justify-center"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
				>
					<div 
						className="[&>*]:!text-8xl [&>*]:sm:!text-9xl [&>*]:md:!text-[10rem] [&>*]:lg:!text-[12rem] [&>*]:xl:!text-[15rem] [&>*]:2xl:!text-[18rem]"
						style={{ 
							fontSize: 'clamp(8rem, 15vw, 18rem) !important',
							lineHeight: '1'
						}}
					>
						<NavWhispprParticles />
					</div>
				</motion.div>
			</div>
			
			{/* Gradient Overlay for Fade Effect */}
			<div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg pointer-events-none opacity-30" />
			<div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent pointer-events-none opacity-50" />
			
			{/* Subtle Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
			</div>
		</section>
	)
}
