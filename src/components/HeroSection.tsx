import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Star, Heart } from 'lucide-react'

const HeroSection: React.FC = () => {
	const [isChestOpen, setIsChestOpen] = useState(false)

	// Image sources for birthday kids
	const kidImages = [
		{
			src: '/WhatsApp Image 2025-06-23 at 1.07.31 PM.jpeg',
			alt: 'Nidhi Sree smiling',
			className: 'left-2 md:left-24 top-1/4',
			border: 'from-neon-turquoise via-neon-purple to-neon-gold',
		},
		{
			src: '/WhatsApp Image 2025-06-23 at 1.07.52 PM.jpeg',
			alt: 'Tirumala Agam happy',
			className: 'right-2 md:right-24 top-1/4',
			border: 'from-neon-gold via-neon-pink to-neon-turquoise',
		},
	]

	// Sparkle positions for each image
	const sparklePositions = [
		{ top: '-8', left: '1/2' },
		{ top: '1/2', left: '-8' },
		{ bottom: '-8', left: '1/3' },
		{ bottom: '-8', right: '1/3' },
		{ top: '1/3', right: '-8' },
	]

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Birthday Kids Images */}
			{kidImages.map((img, idx) => (
				<motion.div
					key={img.src}
					className={`hidden md:block absolute z-30 ${img.className}`}
					initial={{ y: 0 }}
					animate={{ y: [0, -30, 0] }}
					transition={{ duration: 3 + idx, repeat: Infinity, ease: 'easeInOut' }}
				>
					<div className="relative flex items-center justify-center">
						{/* Animated Gradient Border */}
						<motion.div
							className={`absolute -inset-3 rounded-full bg-gradient-to-tr ${img.border} blur-xl opacity-80 animate-pulse`}
							style={{ zIndex: 1 }}
							animate={{ opacity: [0.7, 1, 0.7] }}
							transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
						/>
						{/* Main Image */}
						<img
							src={img.src}
							alt={img.alt}
							className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white bg-white relative z-10"
						/>
						{/* Sparkles */}
						{sparklePositions.map((pos, i) => (
							<motion.div
								key={i}
								className={`absolute ${pos.top ? `top-${pos.top}` : ''} ${pos.bottom ? `bottom-${pos.bottom}` : ''} ${pos.left ? `left-${pos.left}` : ''} ${pos.right ? `right-${pos.right}` : ''} w-4 h-4 bg-neon-gold rounded-full opacity-80`}
								animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
								transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
							/>
						))}
					</div>
				</motion.div>
			))}

			{/* Background Split */}
			<div className="absolute inset-0">
				{/* Moana Side */}
				<div className="absolute left-0 top-0 w-1/2 h-full moana-section">
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-moana-ocean/50" />
					{/* Ocean Waves */}
					<motion.div
						className="absolute bottom-0 left-0 w-full h-32 bg-moana-turquoise/30"
						animate={{
							clipPath: [
								"polygon(0% 100%, 100% 100%, 100% 80%, 0% 80%)",
								"polygon(0% 100%, 100% 100%, 100% 60%, 0% 60%)",
								"polygon(0% 100%, 100% 100%, 100% 80%, 0% 80%)",
							],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</div>
				
				{/* Aladdin Side */}
				<div className="absolute right-0 top-0 w-1/2 h-full aladdin-section">
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-aladdin-purple/50" />
					{/* Stars */}
					{Array.from({ length: 20 }).map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-neon-gold rounded-full"
							style={{
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
							}}
							animate={{
								opacity: [0, 1, 0],
								scale: [0, 1, 0],
							}}
							transition={{
								duration: 3,
								delay: Math.random() * 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					))}
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-20 text-center px-4">
				{/* Birthday Kids Images for Mobile */}
				<div className="flex justify-center gap-8 mb-8 md:hidden">
					{kidImages.map((img, idx) => (
						<motion.div
							key={img.src}
							className="relative flex items-center justify-center"
							initial={{ y: 0 }}
							animate={{ y: [0, -18, 0] }}
							transition={{ duration: 3 + idx, repeat: Infinity, ease: 'easeInOut' }}
						>
							{/* Animated Gradient Border */}
							<motion.div
								className={`absolute -inset-2 rounded-full bg-gradient-to-tr ${img.border} blur-lg opacity-80 animate-pulse`}
								style={{ zIndex: 1 }}
								animate={{ opacity: [0.7, 1, 0.7] }}
								transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
							/>
							<img
								src={img.src}
								alt={img.alt}
								className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-2xl border-4 border-white bg-white relative z-10"
							/>
							{/* Sparkles */}
							{sparklePositions.map((pos, i) => (
								<motion.div
									key={i}
									className={`absolute ${pos.top ? `top-${pos.top}` : ''} ${pos.bottom ? `bottom-${pos.bottom}` : ''} ${pos.left ? `left-${pos.left}` : ''} ${pos.right ? `right-${pos.right}` : ''} w-3 h-3 bg-neon-gold rounded-full opacity-80`}
									animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
									transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
								/>
							))}
						</motion.div>
					))}
				</div>

				{/* Treasure Chest */}
				<motion.div
					className="mb-8 cursor-pointer"
					onClick={() => setIsChestOpen(!isChestOpen)}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					<motion.div
						className="w-32 h-24 mx-auto bg-gradient-to-b from-aladdin-gold to-aladdin-orange rounded-lg relative"
						animate={{
							boxShadow: isChestOpen 
								? "0 0 50px rgba(245, 158, 11, 0.8)"
								: "0 0 20px rgba(245, 158, 11, 0.4)"
						}}
						transition={{ duration: 0.5 }}
					>
						{/* Chest Lid */}
						<motion.div
							className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-aladdin-gold to-aladdin-orange rounded-t-lg origin-bottom"
							animate={{
								rotateX: isChestOpen ? -90 : 0,
							}}
							transition={{ duration: 0.8, ease: "easeOut" }}
						/>
						
						{/* Chest Lock */}
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-aladdin-purple rounded-full" />
					</motion.div>
				</motion.div>

				{/* Invitation Text */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 1 }}
					className="space-y-6"
				>
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-purple via-neon-turquoise to-neon-pink bg-clip-text text-transparent outline-none drop-shadow-[0_2px_8px_#1e293b] md:drop-shadow-[0_4px_16px_#1e293b]" style={{opacity: 1}}>
						You're Invited to a
					</h1>
					<h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
						Magical Celebration!
					</h2>
					
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 1, duration: 0.8, type: "spring" }}
						className="flex items-center justify-center space-x-4 text-2xl md:text-4xl font-bold"
					>
						<span className="text-moana-turquoise">Nidhi Sree</span>
						<Heart className="text-neon-pink animate-pulse" />
						<span className="text-aladdin-gold">Tirumala Agam</span>
					</motion.div>
					
					<h3 className="text-3xl md:text-5xl font-bold text-white">
						turn <span className="text-neon-gold font-extrabold drop-shadow-[0_0_12px_#FFD700]">ONE!</span>
					</h3>
				</motion.div>

				{/* Floating Elements */}
				<motion.div
					className="absolute top-20 left-10 text-neon-gold"
					animate={{ y: [0, -20, 0] }}
					transition={{ duration: 3, repeat: Infinity }}
				>
					<Sparkles size={24} />
				</motion.div>
				
				<motion.div
					className="absolute top-40 right-20 text-neon-turquoise"
					animate={{ y: [0, -15, 0] }}
					transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
				>
					<Star size={20} />
				</motion.div>
				
				<motion.div
					className="absolute bottom-40 left-20 text-neon-pink"
					animate={{ y: [0, -25, 0] }}
					transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
				>
					<Heart size={18} />
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
			>
				<div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
					<motion.div
						className="w-1 h-3 bg-white rounded-full mt-2"
						animate={{ y: [0, 12, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
					/>
				</div>
			</motion.div>
		</section>
	)
}

export default HeroSection 