import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react'

interface GalleryPhoto {
	id: number
	src: string
	alt: string
	description: string
}

const Gallery: React.FC = () => {
	const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null)

	const galleryPhotos: GalleryPhoto[] = [
		{
			id: 1,
			src: '/WhatsApp Image 2025-06-23 at 1.12.13 PM.jpeg',
			alt: 'Tiny hands. Big love. Mama magic.',
			description: 'Nidhi Sree embracing her inner Moana spirit',
		},
		{
			id: 2,
			src: '/WhatsApp Image 2025-06-23 at 1.16.20 PM.jpeg',
			alt: 'Circle of Joy',
			description: 'Circle of Joy',
		},
		{
			id: 3,
			src: '/WhatsApp Image 2025-06-23 at 1.16.44 PM.jpeg',
			alt: 'Twins Together',
			description: 'The magical twins together on their special day',
		},
		{
			id: 4,
			src: '/WhatsApp Image 2025-06-23 at 1.18.58 PM.jpeg',
			alt: 'The Magical Bond',
			description: 'Celebrating with a magical birthday cake',
		},
		{
			id: 5,	
			src: '/familyphoto.jpeg',
			alt: 'Family Celebration',
			description: 'Surrounded by love and family',
		},
		{
			id: 6,
			src: '/WhatsApp Image 2025-06-23 at 1.29.30 PM.jpeg',
			alt: 'Magical Moments',
			description: 'Capturing the magic of turning one',
		},
	]

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 aladdin-section opacity-30" />
			
			{/* Floating Props */}
			{/* Magic Lamp */}
			<motion.div
				className="absolute top-20 left-10 text-aladdin-gold"
				animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
				transition={{ duration: 4, repeat: Infinity }}
			>
				<div className="w-8 h-12 bg-gradient-to-b from-aladdin-gold to-aladdin-orange rounded-t-full relative">
					<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-aladdin-purple rounded-full" />
				</div>
			</motion.div>
			
			{/* Flying Carpet */}
			<motion.div
				className="absolute top-40 right-20 text-aladdin-purple"
				animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
				transition={{ duration: 6, repeat: Infinity }}
			>
				<div className="w-16 h-8 bg-gradient-to-r from-aladdin-purple to-neon-pink rounded-lg transform rotate-12" />
			</motion.div>
			
			{/* Palm Tree */}
			<motion.div
				className="absolute bottom-20 left-20 text-moana-turquoise"
				animate={{ rotate: [0, 2, 0] }}
				transition={{ duration: 3, repeat: Infinity }}
			>
				<div className="w-2 h-16 bg-moana-turquoise" />
				<div className="w-8 h-8 bg-moana-turquoise rounded-full -mt-4 ml-1" />
			</motion.div>

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
						Birthday Gallery
					</h2>
					<p className="text-xl text-white/80">
						Professional photoshoot capturing the magic of our little stars ✨
					</p>
				</motion.div>

				{/* Photo Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
					{galleryPhotos.map((photo, index) => (
						<motion.div
							key={photo.id}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group cursor-pointer"
							onClick={() => setSelectedPhoto(photo)}
						>
							<motion.div
								className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neon-purple via-neon-turquoise to-neon-pink p-1"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<div className="bg-white rounded-xl overflow-hidden">
									<img
										src={photo.src}
										alt={photo.alt}
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
									/>
								</div>
								
								{/* Overlay */}
								<motion.div
									className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
								>
									<div className="text-center text-white">
										<Star className="w-8 h-8 mx-auto mb-2" />
										<p className="text-sm font-semibold">Click to view</p>
									</div>
								</motion.div>
							</motion.div>
							
							<p className="text-white text-center mt-3 font-medium">
								{photo.alt}
							</p>
						</motion.div>
					))}
				</div>

				{/* View All Button */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<p className="text-xl md:text-2xl font-bold text-white/90 mt-8">
						Every photo is a magical memory to cherish forever ✨
					</p>
				</motion.div>
			</div>

			{/* Modal for Full Photo View */}
			<AnimatePresence>
				{selectedPhoto && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
						onClick={() => setSelectedPhoto(null)}
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							className="relative max-w-4xl max-h-full"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close Button */}
							<button
								onClick={() => setSelectedPhoto(null)}
								className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
							>
								×
							</button>
							
							{/* Photo */}
							<div className="bg-gradient-to-br from-neon-purple via-neon-turquoise to-neon-pink p-2 rounded-2xl">
								<div className="bg-white rounded-xl overflow-hidden">
									<img
										src={selectedPhoto.src}
										alt={selectedPhoto.alt}
										className="w-full h-auto max-h-[80vh] object-contain"
									/>
								</div>
							</div>
							
							{/* Description */}
							<div className="text-center mt-4">
								<h3 className="text-2xl font-bold text-white mb-2">
									{selectedPhoto.alt}
								</h3>
								<p className="text-white/80">
									{selectedPhoto.description}
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}

export default Gallery 