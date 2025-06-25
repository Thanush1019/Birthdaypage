import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Star, Sparkles } from 'lucide-react'

const CountdownTimer: React.FC = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	})

	// Set the target date (June 28, 2025, 7:30 PM IST)
	const targetDate = new Date('2025-06-28T14:00:00Z').getTime() // 7:30 PM IST = 14:00 UTC

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime()
			const difference = targetDate - now

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24))
				const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
				const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
				const seconds = Math.floor((difference % (1000 * 60)) / 1000)

				setTimeLeft({ days, hours, minutes, seconds })
			} else {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
			}
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
		<motion.div
			className="text-center"
			whileHover={{ scale: 1.05 }}
		>
			<motion.div
				className="relative"
				key={value}
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				{/* Glowing Background */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-neon-purple via-neon-turquoise to-neon-pink rounded-2xl blur-sm"
					animate={{
						opacity: [0.5, 0.8, 0.5],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				
				{/* Time Display */}
				<div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 min-w-[120px]">
					<motion.div
						className="text-4xl md:text-5xl font-bold text-white"
						key={value}
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						{value.toString().padStart(2, '0')}
					</motion.div>
					<div className="text-sm md:text-base text-white/80 mt-2 font-medium">
						{label}
					</div>
				</div>
			</motion.div>
		</motion.div>
	)

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 aladdin-section opacity-30" />
			
			{/* Floating Stars */}
			{Array.from({ length: 20 }).map((_, i) => (
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
						duration: 3,
						delay: Math.random() * 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			))}

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Decorative Floating Images */}
				<motion.img
					src="/WhatsApp Image 2025-06-23 at 1.16.44 PM.jpeg"
					alt="Nidhi and Agam playful"
					className="hidden md:block absolute left-0 top-1/3 w-56 h-56 rounded-3xl shadow-2xl border-4 border-white object-cover rotate-[-8deg] z-20"
					animate={{ y: [0, -20, 0] }}
					transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
				/>
				<motion.img
					src="/WhatsApp Image 2025-06-23 at 1.16.20 PM.jpeg"
					alt="Nidhi and Agam smiling"
					className="hidden md:block absolute right-0 top-1/2 w-56 h-56 rounded-3xl shadow-2xl border-4 border-white object-cover rotate-[8deg] z-20"
					animate={{ y: [0, 20, 0] }}
					transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
				/>

				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-purple via-neon-turquoise to-neon-pink bg-clip-text text-transparent outline-none drop-shadow-[0_2px_8px_#1e293b] md:drop-shadow-[0_4px_16px_#1e293b] mb-4" style={{opacity: 1}}>
						Counting Down to the Magical Day!
					</h2>
					<p className="text-xl text-white/80">
						The adventure begins in...
					</p>
				</motion.div>

				{/* Countdown Display */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="mb-12"
				>
					{/* Hourglass Container */}
					<div className="relative max-w-4xl mx-auto">
						{/* Hourglass Shape */}
						<motion.div
							className="relative mx-auto w-32 h-48 mb-8"
							animate={{
								rotate: [0, 5, 0],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							{/* Hourglass Outline */}
							<div className="absolute inset-0 border-4 border-neon-gold rounded-full" />
							
							{/* Sand Animation */}
							<motion.div
								className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-gold to-transparent"
								animate={{
									height: ["100%", "0%"],
								}}
								transition={{
									duration: 86400, // 24 hours in seconds
									repeat: Infinity,
									ease: "linear",
								}}
							/>
							
							{/* Clock Icon */}
							<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<Clock className="w-8 h-8 text-neon-gold" />
							</div>
						</motion.div>

						{/* Time Units Grid */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 md:gap-8 w-full max-w-xl mx-auto">
							<TimeUnit value={timeLeft.days} label="Days" />
							<TimeUnit value={timeLeft.hours} label="Hours" />
							<TimeUnit value={timeLeft.minutes} label="Minutes" />
							<TimeUnit value={timeLeft.seconds} label="Seconds" />
						</div>
					</div>
				</motion.div>

				{/* Magic Lamp with Animated Genie Smoke */}
				<div className="flex justify-center mt-8 mb-8">
					<div className="relative w-40 h-28 md:w-64 md:h-40">
						{/* Magic Lamp SVG */}
						<svg
							viewBox="0 0 256 120"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 md:w-64 md:h-32 z-10"
							aria-label="Magic Lamp"
						>
							<title>Magic Lamp</title>
							{/* Lamp base */}
							<ellipse cx="128" cy="110" rx="60" ry="10" fill="#FBBF24" fillOpacity="0.7" />
							{/* Lamp body */}
							<path d="M40 90 Q128 10 216 90 Q180 100 128 100 Q76 100 40 90 Z" fill="#FDE68A" stroke="#F59E0B" strokeWidth="4" />
							{/* Lamp spout */}
							<path d="M216 90 Q240 80 230 100 Q220 110 216 90 Z" fill="#FDE68A" stroke="#F59E0B" strokeWidth="3" />
							{/* Lamp handle */}
							<path d="M40 90 Q20 80 36 70 Q52 80 40 90 Z" fill="#FDE68A" stroke="#F59E0B" strokeWidth="3" />
							{/* Lamp knob */}
							<circle cx="128" cy="30" r="8" fill="#F59E0B" stroke="#FDE68A" strokeWidth="3" />
						</svg>
						{/* Animated Genie Smoke (SVG) */}
						<motion.svg
							viewBox="0 0 80 120"
							className="absolute left-1/2 bottom-16 md:bottom-20 -translate-x-1/2 w-16 h-24 md:w-24 md:h-32 z-20 pointer-events-none"
						>
							<motion.path
								d="M40 110 Q45 90 35 80 Q55 70 40 60 Q25 50 40 40 Q55 30 40 20"
								fill="none"
								stroke="url(#smokeGradient)"
								strokeWidth="6"
								strokeLinecap="round"
								initial={{ pathLength: 0, opacity: 0.7 }}
								animate={{ pathLength: [0, 1, 0.7, 1], opacity: [0.7, 1, 0.7] }}
								transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
							/>
							<defs>
								<linearGradient id="smokeGradient" x1="40" y1="110" x2="40" y2="20" gradientUnits="userSpaceOnUse">
									<stop stopColor="#a78bfa" />
									<stop offset="0.5" stopColor="#67e8f9" />
									<stop offset="1" stopColor="#f472b6" />
								</linearGradient>
							</defs>
						</motion.svg>
						{/* Sparkles */}
						<motion.div
							className="absolute left-1/2 bottom-24 md:bottom-28 -translate-x-1/2 z-30"
							animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
							transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
						>
							<Sparkles className="text-neon-gold w-6 h-6 md:w-8 md:h-8" />
						</motion.div>
						<motion.div
							className="absolute left-1/2 bottom-32 md:bottom-40 -translate-x-1/2 z-30"
							animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
						>
							<Star className="text-neon-turquoise w-4 h-4 md:w-6 md:h-6" />
						</motion.div>
					</div>
				</div>

				{/* Special Message */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<div className="magical-card p-8 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold text-white mb-4">
							The Magic is Building! ✨
						</h3>
						<p className="text-lg text-white/80 leading-relaxed">
							Every second brings us closer to celebrating the most magical day of the year. 
							The genie's lamp is glowing brighter, and the ocean waves are calling our names!
						</p>
						<div className="flex justify-center space-x-4 mt-6">
							<Star className="w-6 h-6 text-neon-gold animate-pulse" />
							<Sparkles className="w-6 h-6 text-neon-turquoise animate-pulse" />
							<Star className="w-6 h-6 text-neon-pink animate-pulse" />
						</div>
					</div>
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
					<Sparkles size={25} />
				</motion.div>
			</div>
		</section>
	)
}

export default CountdownTimer 