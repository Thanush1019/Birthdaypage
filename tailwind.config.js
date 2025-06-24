/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'moana-blue': '#1E3A8A',
				'moana-turquoise': '#06B6D4',
				'moana-ocean': '#0891B2',
				'aladdin-purple': '#7C3AED',
				'aladdin-gold': '#F59E0B',
				'aladdin-pink': '#EC4899',
				'aladdin-orange': '#F97316',
				'neon-purple': '#A855F7',
				'neon-turquoise': '#00D4FF',
				'neon-pink': '#FF6B9D',
				'neon-gold': '#FFD700',
			},
			animation: {
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'wave': 'wave 4s ease-in-out infinite',
				'bounce-slow': 'bounce 3s infinite',
				'pulse-slow': 'pulse 4s infinite',
			},
			keyframes: {
				sparkle: {
					'0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
					'50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				glow: {
					'0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' },
					'100%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' },
				},
				wave: {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(10px)' },
				},
			},
			backgroundImage: {
				'moana-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #06B6D4 50%, #0891B2 100%)',
				'aladdin-gradient': 'linear-gradient(135deg, #7C3AED 0%, #F59E0B 50%, #EC4899 100%)',
				'magical-gradient': 'linear-gradient(135deg, #A855F7 0%, #00D4FF 50%, #FF6B9D 100%)',
			},
		},
	},
	plugins: [],
} 