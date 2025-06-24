import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Sparkles } from 'lucide-react'

interface Character {
	id: number
	name: string
	character: string
	avatar: string
	bio: string
	personality: string[]
	animation: string
}

const MeetTheStars: React.FC = () => {
	const characters: Character[] = [
		{
			id: 1,
			name: "Nidhi Sree",
			character: "Moana",
			avatar: "/WhatsApp Image 2025-06-23 at 1.07.31 PM.jpeg",
			bio: "Our little ocean explorer with a heart as vast as the sea. Nidhi brings the spirit of adventure and determination wherever she goes.",
			personality: ["Adventurous", "Determined", "Loving", "Curious"],
			animation: "rowing"
		},
		{
			id: 2,
			name: "Tirumala Agam",
			character: "Aladdin",
			avatar: "/WhatsApp Image 2025-06-23 at 1.07.52 PM.jpeg",
			bio: "Our magical little prince with a heart of gold. Tirumala spreads joy and wonder like magic dust wherever he goes.",
			personality: ["Magical", "Joyful", "Brave", "Kind"],
			animation: "flying"
		}
	]

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 magical-gradient opacity-20" />
			
			{/* Floating Elements */}
			{Array.from({ length: 15 }).map((_, i) => (
				<motion.div
					key={i}
					className="absolute"
					style={{
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
					}}
					animate={{
						y: [0, -30, 0],
						rotate: [0, 360],
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: 5,
						delay: Math.random() * 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					{i % 3 === 0 ? (
						<Heart className="w-4 h-4 text-neon-pink" />
					) : i % 3 === 1 ? (
						<Star className="w-4 h-4 text-neon-gold" />
					) : (
						<Sparkles className="w-4 h-4 text-neon-turquoise" />
					)}
				</motion.div>
			))}

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-6xl font-bold magical-text mb-4">
						Meet the Stars
					</h2>
					<p className="text-xl text-white/80">
						Our little heroes with hearts full of magic ✨
					</p>
				</motion.div>

				{/* Characters Grid */}
				<div className="grid md:grid-cols-2 gap-12">
					{characters.map((character, index) => (
						<motion.div
							key={character.id}
							initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="text-center"
						>
							{/* Avatar Container */}
							<motion.div
								className="relative mb-8"
								whileHover={{ scale: 1.05 }}
							>
								{/* Background Glow */}
								<motion.div
									className="absolute inset-0 rounded-full"
									animate={{
										boxShadow: [
											"0 0 30px rgba(168, 85, 247, 0.5)",
											"0 0 50px rgba(0, 212, 255, 0.8)",
											"0 0 30px rgba(168, 85, 247, 0.5)",
										],
									}}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								/>
								
								{/* Avatar */}
								<div className="relative w-48 h-48 mx-auto">
									<div className="w-full h-full bg-gradient-to-br from-neon-purple via-neon-turquoise to-neon-pink rounded-full p-2">
										<div className="w-full h-full bg-white rounded-full overflow-hidden">
											<img
												src={character.avatar}
												alt={character.name}
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
									
									{/* Character Badge */}
									<motion.div
										className="absolute -bottom-2 -right-2 bg-gradient-to-r from-aladdin-gold to-aladdin-orange text-white px-4 py-2 rounded-full text-sm font-bold"
										animate={{
											y: [0, -5, 0],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									>
										{character.character}
									</motion.div>
								</div>

								{/* Animation Elements */}
								{character.animation === "rowing" && (
									<motion.div
										className="absolute -bottom-8 -left-8 text-moana-turquoise"
										animate={{
											x: [0, 20, 0],
											rotate: [0, 15, 0],
										}}
										transition={{
											duration: 3,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									>
										{/* Simple canoe shape */}
										<div className="w-12 h-6 bg-moana-turquoise rounded-full" />
									</motion.div>
								)}
								
								{character.animation === "flying" && (
									<motion.div
										className="absolute -top-8 -right-8 text-aladdin-purple"
										animate={{
											x: [0, -20, 0],
											y: [0, -10, 0],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									>
										{/* Simple carpet shape */}
										<div className="w-10 h-6 bg-gradient-to-r from-aladdin-purple to-neon-pink rounded-lg transform rotate-12" />
									</motion.div>
								)}
							</motion.div>

							{/* Character Info */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								viewport={{ once: true }}
								className="space-y-4"
							>
								<h3 className="text-3xl font-bold text-white">
									{character.name}
								</h3>
								
								<p className="text-lg text-white/80 leading-relaxed">
									{character.bio}
								</p>
								
								{/* Personality Traits */}
								<div className="flex flex-wrap justify-center gap-2 mt-6">
									{character.personality.map((trait, traitIndex) => (
										<motion.span
											key={trait}
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.5, delay: traitIndex * 0.1 }}
											viewport={{ once: true }}
											className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm text-white border border-white/30"
										>
											{trait}
										</motion.span>
									))}
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Special Message */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<div className="magical-card p-8 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold text-white mb-4">
							Our Magical Twins
						</h3>
						<p className="text-lg text-white/80 leading-relaxed">
							These two little stars bring endless joy and wonder to our lives. 
							Every day with them is a new adventure filled with love, laughter, and magic. 
							They remind us that the greatest treasures in life are the moments we share together.
						</p>
						<div className="flex justify-center space-x-4 mt-6">
							<Heart className="w-6 h-6 text-neon-pink animate-pulse" />
							<Star className="w-6 h-6 text-neon-gold animate-pulse" />
							<Sparkles className="w-6 h-6 text-neon-turquoise animate-pulse" />
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default MeetTheStars 