import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Calendar, Star, PartyPopper } from 'lucide-react'

const EventDetails: React.FC = () => {
	const [flipped, setFlipped] = useState(false)
	const eventData = {
		date: '28th June 2025, Saturday',
		time: '7:30 PM',
		venue: 'Taj Falaknuma Palace, Hyderabad',
		mapsUrl: 'https://www.google.com/maps/place/TAJ+FALAKNUMA+PALACE,+Fatima+Nagar,+Falaknuma,+Hyderabad,+Telangana+500053/@17.3318612,78.4607834,1091m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcbbd57b948e937:0xc83cd648a9a012d0!8m2!3d17.3314746!4d78.4659588!16s%2Fg%2F11rf7cgv15!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D',
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

			<div className="max-w-3xl mx-auto relative z-10">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-6xl font-bold magical-text mb-4">
						Event Details
					</h2>
					<p className="text-xl text-white/80">
						Join us for a day filled with magic and wonder!
					</p>
				</motion.div>

				{/* Flip Card */}
				<div className="flex justify-center items-center">
					<div className="[perspective:1200px] w-full max-w-2xl">
						<motion.div
							className={`relative w-full h-[32rem] md:h-[36rem] cursor-pointer`}
							style={{ transformStyle: 'preserve-3d' }}
							animate={{ rotateY: flipped ? 180 : 0 }}
							transition={{ duration: 0.8, type: 'spring' }}
							onClick={() => setFlipped(f => !f)}
						>
							{/* Front Side */}
							<div className={`absolute inset-0 flex flex-col items-center justify-center rounded-3xl shadow-2xl bg-gradient-to-br from-neon-purple via-neon-turquoise to-neon-pink text-white transition-all duration-500 ${flipped ? 'rotate-y-180 pointer-events-none' : ''}`} style={{ backfaceVisibility: 'hidden' }}>
								<PartyPopper className="w-24 h-24 md:w-32 md:h-32 mb-8 text-white drop-shadow-lg animate-bounce" />
								<h3 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">You're Invited!</h3>
								<p className="text-2xl md:text-3xl font-semibold mb-6">Tap for Details</p>
								<span className="inline-block px-8 py-3 rounded-full bg-white/20 text-2xl font-bold magical-text shadow-lg animate-pulse">Magical Celebration Awaits</span>
							</div>
							{/* Back Side */}
							<div className={`absolute inset-0 flex flex-col items-center justify-center rounded-3xl shadow-2xl bg-white text-center transition-all duration-500 px-4 md:px-12 py-8 md:py-12 ${flipped ? '' : 'rotate-y-180 pointer-events-none'}`} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
								<h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-neon-purple via-neon-turquoise to-neon-pink bg-clip-text text-transparent">Magical Birthday Bash</h3>
								<div className="flex flex-col gap-6 items-center w-full">
									<div className="flex items-center gap-4 justify-center">
										<Calendar className="w-8 h-8 text-neon-turquoise" />
										<span className="text-2xl md:text-3xl font-bold text-gray-800">{eventData.date}</span>
									</div>
									<div className="flex items-center gap-4 justify-center">
										<Clock className="w-8 h-8 text-aladdin-orange" />
										<span className="text-2xl md:text-3xl font-bold text-gray-800">{eventData.time}</span>
									</div>
									<div className="flex items-center gap-4 justify-center">
										<MapPin className="w-8 h-8 text-neon-pink" />
										<span className="text-2xl md:text-3xl font-bold text-gray-800">{eventData.venue}</span>
									</div>
								</div>
								<a href={eventData.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block px-10 py-4 rounded-full bg-gradient-to-r from-neon-purple via-neon-turquoise to-neon-pink text-white text-xl font-bold shadow-lg hover:scale-105 transition-transform">View on Google Maps</a>
								<p className="mt-8 text-lg md:text-2xl text-gray-700 font-semibold leading-relaxed max-w-xl mx-auto">
									Step into a world of wonder as we celebrate a magical milestone! Dress in your brightest smiles and join us for an evening of joy, laughter, and unforgettable memories.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default EventDetails 