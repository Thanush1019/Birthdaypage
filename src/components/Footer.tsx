import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Sparkles, Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
	return (
		<footer className="relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-t from-black via-moana-blue to-aladdin-purple" />
			
			{/* Ocean Waves */}
			<motion.div
				className="absolute top-0 left-0 w-full h-16 bg-moana-turquoise/30"
				animate={{
					clipPath: [
						"polygon(0% 100%, 100% 100%, 100% 60%, 0% 60%)",
						"polygon(0% 100%, 100% 100%, 100% 40%, 0% 40%)",
						"polygon(0% 100%, 100% 100%, 100% 60%, 0% 60%)",
					],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			
			{/* Palm Trees */}
			{Array.from({ length: 3 }).map((_, i) => (
				<motion.div
					key={i}
					className="absolute bottom-0 text-moana-turquoise"
					style={{
						left: `${20 + i * 30}%`,
					}}
					animate={{
						rotate: [0, 2, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					{/* Tree Trunk */}
					<div className="w-3 h-16 bg-moana-turquoise" />
					{/* Palm Leaves */}
					<div className="w-8 h-8 bg-moana-turquoise rounded-full -mt-4 ml-1" />
					<div className="w-6 h-6 bg-moana-turquoise rounded-full -mt-2 ml-3" />
				</motion.div>
			))}
			
			{/* Stars */}
			{Array.from({ length: 25 }).map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-1 h-1 bg-neon-gold rounded-full"
					style={{
						top: `${Math.random() * 50}%`,
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

			<div className="relative z-10 pt-20 pb-8 px-4">
				<div className="max-w-6xl mx-auto">
					{/* Main Footer Content */}
					<div className="grid md:grid-cols-3 gap-8 mb-12">
						{/* Magic Lamp Logo */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="text-center md:text-left"
						>
							<div className="flex items-center justify-center md:justify-start mb-4">
								{/* Magic Lamp */}
								<motion.div
									className="relative mr-4"
									animate={{
										y: [0, -10, 0],
									}}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								>
									<div className="w-12 h-16 bg-gradient-to-b from-aladdin-gold to-aladdin-orange rounded-t-full relative">
										<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-aladdin-purple rounded-full" />
									</div>
								</motion.div>
								
								<div>
									<h3 className="text-2xl font-bold magical-text">
										Magical Twins
									</h3>
									<p className="text-white/60 text-sm">
										Nidhi & Agam's 1st Birthday
									</p>
								</div>
							</div>
							
							<p className="text-white/80 leading-relaxed">
								Creating magical memories and celebrating the wonder of childhood. 
								Every moment with our little stars is a treasure beyond measure.
							</p>
						</motion.div>

						{/* Quick Links */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-center"
						>
							<h4 className="text-xl font-bold text-white mb-6">
								Quick Links
							</h4>
							<div className="flex flex-col items-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-6">
								<a href="#hero" className="block text-white/80 hover:text-neon-turquoise transition-colors text-lg sm:text-base">
									Invitation
								</a>
								<a href="#event-details" className="block text-white/80 hover:text-neon-turquoise transition-colors text-lg sm:text-base">
									Event Details
								</a>
								<a href="#gallery" className="block text-white/80 hover:text-neon-turquoise transition-colors text-lg sm:text-base">
									Gallery
								</a>
								<a href="#meet-the-stars" className="block text-white/80 hover:text-neon-turquoise transition-colors text-lg sm:text-base">
									Meet the Stars
								</a>
								<a href="#countdown" className="block text-white/80 hover:text-neon-turquoise transition-colors text-lg sm:text-base">
									Counting Down to the Magical Day!
								</a>
							</div>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="text-center md:text-right"
						>
							<h4 className="text-xl font-bold text-white mb-6">
								Event Details
							</h4>
							<div className="space-y-3 text-lg text-white/80">
								<div>🗓️ 28th June 2025, Saturday</div>
								<div>🕢 7:30 PM</div>
								<div>📍 Taj Falaknuma Palace, Hyderabad</div>
							</div>
						</motion.div>
					</div>

					{/* Divider */}
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"
					/>

					{/* Bottom Section */}
					<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
						{/* Copyright */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="text-center md:text-left"
						>
							
						</motion.div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="flex items-center space-x-4"
						>
							<motion.div
								className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-turquoise rounded-full flex items-center justify-center"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Heart className="w-4 h-4 text-white" />
							</motion.div>
							<motion.div
								className="w-8 h-8 bg-gradient-to-r from-neon-turquoise to-neon-pink rounded-full flex items-center justify-center"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Star className="w-4 h-4 text-white" />
							</motion.div>
							<motion.div
								className="w-8 h-8 bg-gradient-to-r from-neon-pink to-neon-gold rounded-full flex items-center justify-center"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Sparkles className="w-4 h-4 text-white" />
							</motion.div>
						</motion.div>
					</div>

					{/* Special Message */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="text-center mt-8"
					>
						<p className="text-white/80 text-sm">
							Made with 💜💙💖 for our magical twins
						</p>
					</motion.div>
				</div>
			</div>
		</footer>
	)
}

export default Footer 