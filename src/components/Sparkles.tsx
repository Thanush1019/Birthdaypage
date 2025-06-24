import React from 'react'
import { motion } from 'framer-motion'

interface SparkleProps {
	id: number
	top: number
	left: number
	delay: number
}

const Sparkle: React.FC<SparkleProps> = ({ id, top, left, delay }) => {
	return (
		<motion.div
			className="absolute w-2 h-2 bg-neon-gold rounded-full"
			style={{ top: `${top}%`, left: `${left}%` }}
			initial={{ scale: 0, opacity: 0 }}
			animate={{
				scale: [0, 1, 0],
				opacity: [0, 1, 0],
				rotate: [0, 180, 360],
			}}
			transition={{
				duration: 2,
				delay,
				repeat: Infinity,
				ease: "easeInOut",
			}}
		/>
	)
}

const Sparkles: React.FC = () => {
	const sparkles = Array.from({ length: 20 }, (_, i) => ({
		id: i,
		top: Math.random() * 100,
		left: Math.random() * 100,
		delay: Math.random() * 2,
	}))

	return (
		<div className="fixed inset-0 pointer-events-none z-10">
			{sparkles.map((sparkle) => (
				<Sparkle key={sparkle.id} {...sparkle} />
			))}
		</div>
	)
}

export default Sparkles 