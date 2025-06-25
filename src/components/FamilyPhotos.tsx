import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react'

interface FamilyPhoto {
	id: number
	src: string
	alt: string
	caption: string
}

const FamilyPhotos: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [selectedPhoto, setSelectedPhoto] = useState<FamilyPhoto | null>(null)

	const familyPhotos: FamilyPhoto[] = [
		{
			id: 1,
			src: '/WhatsApp Image 2025-06-23 at 1.29.51 PM.jpeg',
			alt: 'Nidhi and Agam together on a chair',
			caption: 'Nidhi & Agam Together',
		},
		{
			id: 2,
			src: '/Screenshot agam.png',
			alt: 'Agam smiling in a bow tie',
			caption: 'Agam close up',
		},
		{
			id: 3,
			src: '/Screenshot Nidhi.png',
			alt: 'Nidhi in a beautiful dress',
			caption: 'Princess Nidhi',
		},
		{
			id: 4,
			src: '/Screenshot family.png',
			alt: 'Family together',
			caption: 'Family Love',
		},
		{
			id: 5,
			src: '/Screenshot of nidhi.png',
			alt: 'Nidhi smiling closeup',
			caption: 'Nidhi Closeup',
		},
		{
			id: 6,
			src: '/WhatsApp Image 2025-06-23 at 1.07.52 PM.jpeg',
			alt: 'Nidhi and Agam together',
			caption: 'Prince Agam',
		},
	]

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % familyPhotos.length)
	}

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + familyPhotos.length) % familyPhotos.length)
	}

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 moana-section opacity-30" />
			
			{/* Floating Leaves and Sparkles */}
			{Array.from({ length: 20 }).map((_, i) => (
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
						duration: 6,
						delay: Math.random() * 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					{i % 2 === 0 ? (
						<Heart className="w-4 h-4 text-neon-pink" />
					) : (
						<Star className="w-4 h-4 text-neon-gold" />
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
					<h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-purple via-neon-turquoise to-neon-pink bg-clip-text text-transparent outline-none drop-shadow-[0_2px_8px_#1e293b] md:drop-shadow-[0_4px_16px_#1e293b] mb-4" style={{opacity: 1}}>
						With Love, From Our Family to Yours
					</h2>
					<p className="text-xl text-white/80">
						Precious moments captured in time ✨
					</p>
				</motion.div>

				{/* Photo Carousel */}
				<div className="relative mt-16">
					{/* Main Photo Display */}
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="relative mx-auto max-w-2xl"
					>
						{/* Animated Frame */}
						<motion.div
							className="relative p-4"
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
						>
							<div className="bg-gradient-to-br from-neon-purple via-neon-turquoise to-neon-pink p-1 rounded-2xl">
								<div className="bg-white rounded-xl overflow-hidden">
									<img
										src={familyPhotos[currentIndex].src}
										alt={familyPhotos[currentIndex].alt}
										className="w-full h-80 object-cover cursor-pointer"
										onClick={() => setSelectedPhoto(familyPhotos[currentIndex])}
									/>
								</div>
							</div>
							
							{/* Caption */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="text-center mt-4"
							>
								<p className="text-xl font-semibold text-white">
									{familyPhotos[currentIndex].caption}
								</p>
							</motion.div>
						</motion.div>

						{/* Floating Elements Around Photo */}
						<motion.div
							className="absolute -top-4 -left-4 text-neon-gold"
							animate={{ rotate: 360 }}
							transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
						>
							<Star size={20} />
						</motion.div>
						
						<motion.div
							className="absolute -top-4 -right-4 text-neon-pink"
							animate={{ rotate: -360 }}
							transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
						>
							<Heart size={18} />
						</motion.div>
						
						<motion.div
							className="absolute -bottom-4 -left-4 text-neon-turquoise"
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							<Star size={16} />
						</motion.div>
						
						<motion.div
							className="absolute -bottom-4 -right-4 text-neon-gold"
							animate={{ y: [0, -15, 0] }}
							transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
						>
							<Heart size={14} />
						</motion.div>
					</motion.div>

					{/* Navigation Buttons */}
					<motion.button
						onClick={prevSlide}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<ChevronLeft size={24} />
					</motion.button>
					
					<motion.button
						onClick={nextSlide}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<ChevronRight size={24} />
					</motion.button>
				</div>

				{/* Photo Indicators */}
				<div className="flex justify-center mt-8 space-x-2">
					{familyPhotos.map((_, index) => (
						<motion.button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentIndex
									? 'bg-neon-gold scale-125'
									: 'bg-white/40 hover:bg-white/60'
							}`}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8 }}
						/>
					))}
				</div>

				{/* Photo Counter */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="text-center mt-6"
				>
					<p className="text-white/60">
						{currentIndex + 1} of {familyPhotos.length}
					</p>
				</motion.div>
			</div>

			{/* Modal Popup for Full Image */}
			{selectedPhoto && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
					<div className="relative max-w-lg w-full mx-4">
						<div className="bg-gradient-to-br from-neon-purple via-neon-turquoise to-neon-pink p-1 rounded-2xl">
							<div className="bg-white rounded-xl overflow-hidden">
								<img
									src={selectedPhoto.src}
									alt={selectedPhoto.alt}
									className="w-full max-h-[80vh] object-contain"
								/>
							</div>
						</div>
						{/* Caption */}
						<div className="text-center mt-4">
							<p className="text-xl font-semibold text-white drop-shadow-lg">
								{selectedPhoto.caption}
							</p>
						</div>
						{/* Close Button */}
						<button
							onClick={() => setSelectedPhoto(null)}
							className="absolute top-2 right-2 bg-white/80 hover:bg-white text-neon-purple rounded-full w-8 h-8 flex items-center justify-center text-2xl font-bold shadow-lg focus:outline-none"
							aria-label="Close"
						>
							&times;
						</button>
					</div>
				</div>
			)}
		</section>
	)
}

export default FamilyPhotos 