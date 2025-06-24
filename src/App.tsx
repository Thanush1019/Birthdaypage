import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import EventDetails from './components/EventDetails'
import FamilyPhotos from './components/FamilyPhotos'
import Gallery from './components/Gallery'
import MeetTheStars from './components/MeetTheStars'
import CountdownTimer from './components/CountdownTimer'
import Footer from './components/Footer'
import Sparkles from './components/Sparkles'

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-moana-blue via-aladdin-purple to-neon-pink overflow-x-hidden">
			<Sparkles />
			
			{/* Hero Section */}
			<div id="hero">
				<HeroSection />
			</div>
			
			{/* Event Details */}
			<div id="event-details">
				<EventDetails />
			</div>
			
			{/* Family Photos */}
			<FamilyPhotos />
			
			{/* Gallery */}
			<div id="gallery">
				<Gallery />
			</div>
			
			{/* Meet the Stars */}
			<div id="meet-the-stars">
				<MeetTheStars />
			</div>
			
			{/* Countdown Timer */}
			<div id="countdown">
				<CountdownTimer />
			</div>
			
			{/* Blessings */}
			<div id="blessings">
				{/* If you have a Blessings component, place it here */}
			</div>
			
			{/* Footer */}
			<Footer />
		</div>
	)
}

export default App
