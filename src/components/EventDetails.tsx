import React from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Calendar, Star } from 'lucide-react'

const EventDetails: React.FC = () => {
	const eventData = {
		date: '28th June 2025, Saturday',
		time: '7:30 PM',
		venue: 'Taj Falaknuma Palace, Hyderabad',
		rsvpLink: '#rsvp'
	}

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 magical-gradient opacity-20" />
			
			{/* Floating Stars */}
			{Array.from({ length: 15 }).map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-2 h-2 bg-neon-gold rounded-full"
					style={{
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
					}}
					animate={{
						opacity: [0, 1, 0],
						scale: [0, 1, 0],
					}}
					transition={{
						duration: 4,
						delay: Math.random() * 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
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
						Event Details
					</h2>
					<p className="text-xl text-white/80">
						Join us for a day filled with magic and wonder!
					</p>
				</motion.div>

				{/* Event Cards */}
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{/* Date Card */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="magical-card p-8 text-center group hover:scale-105 transition-transform duration-300 border-2 border-neon-gold shadow-lg hover:shadow-neon-gold/60"
					>
						<motion.div
							className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-moana-turquoise to-moana-ocean rounded-full flex items-center justify-center"
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.6 }}
						>
							<Calendar className="w-8 h-8 text-white" />
						</motion.div>
						<h3 className="text-2xl font-bold text-white mb-2">🗓️ Date</h3>
						<p className="text-lg text-white/80">{eventData.date}</p>
					</motion.div>

					{/* Time Card */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="magical-card p-8 text-center group hover:scale-105 transition-transform duration-300 border-2 border-aladdin-orange shadow-lg hover:shadow-aladdin-orange/60"
					>
						<motion.div
							className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-aladdin-gold to-aladdin-orange rounded-full flex items-center justify-center"
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.6 }}
						>
							<Clock className="w-8 h-8 text-white" />
						</motion.div>
						<h3 className="text-2xl font-bold text-white mb-2">🕢 Time</h3>
						<p className="text-lg text-white/80">{eventData.time}</p>
					</motion.div>

					{/* Venue Card */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
						className="magical-card p-8 text-center group hover:scale-105 transition-transform duration-300 border-2 border-neon-pink shadow-lg hover:shadow-neon-pink/60"
					>
						<motion.div
							className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-aladdin-purple to-neon-pink rounded-full flex items-center justify-center"
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.6 }}
						>
							<MapPin className="w-8 h-8 text-white" />
						</motion.div>
						<h3 className="text-2xl font-bold text-white mb-2">📍 Venue</h3>
						<p className="text-lg text-white/80">{eventData.venue}</p>
					</motion.div>
				</div>

				{/* RSVP Button */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<p className="text-2xl md:text-3xl font-bold magical-text mb-2 mt-4">
						We can't wait to celebrate this magical day with you!
					</p>
					<p className="text-lg text-white/80 max-w-2xl mx-auto">
						Your presence will make our memories even more special ✨
					</p>
				</motion.div>

				{/* Decorative Elements */}
				<motion.div
					className="absolute top-10 left-10 text-neon-gold"
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
				>
					<Star size={30} />
				</motion.div>
				
				<motion.div
					className="absolute bottom-10 right-10 text-neon-turquoise"
					animate={{ rotate: -360 }}
					transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				>
					<Star size={25} />
				</motion.div>
			</div>
		</section>
	)
}

export default EventDetails 