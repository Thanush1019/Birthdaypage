# 🎉 Nidhi Sree & Tirumala Agam's 1st Birthday Website

A magical, animated, and responsive React.js website celebrating the 1st birthday of twins Nidhi Sree and Tirumala Agam. This enchanting website features a split theme inspired by Disney's Moana and Aladdin, with vibrant neon colors, cartoon-style visuals, and playful animations.

## ✨ Features

### 🎨 Visual Design
- **Split Magical Theme**: Half Moana's oceanic island vibe, half Aladdin's Arabian night charm
- **Neon Color Palette**: Purples, turquoise, sky blue, gold, and soft pinks
- **Magical Elements**: Waves, palm trees, sparkles, flying carpets, treasure chests, and magic lamps
- **Cartoon Avatars**: Nidhi as Moana and Tirumala as Aladdin

### 📱 Responsive Sections
1. **Hero Section**: Animated treasure chest, split-screen background, invitation text
2. **Event Details**: Date, time, venue with magical UI elements and RSVP button
3. **Family Photos**: Carousel with animated frames and floating effects
4. **Gallery**: Birthday photoshoot with modal view and Moana/Aladdin props
5. **Meet the Stars**: Character profiles with scroll-triggered animations
6. **Countdown Timer**: Genie's hourglass style with glowing numbers
7. **Blessings**: Interactive form for guest messages with sky/stars background
8. **Footer**: Neon styling with palm trees, ocean waves, and magic lamp logo

### 🎭 Animations & Interactions
- **Framer Motion**: Smooth scroll-triggered animations
- **Interactive Elements**: Clickable treasure chest, photo modals, hover effects
- **Floating Elements**: Sparkles, stars, hearts, and magical props
- **Countdown Timer**: Real-time countdown to the birthday
- **Form Interactions**: Blessings submission with real-time updates

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nidhi-agam-birthday
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll-triggered animations

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'moana-blue': '#1E3A8A',
  'moana-turquoise': '#06B6D4',
  'moana-ocean': '#0891B2',
  'aladdin-purple': '#7C3AED',
  'aladdin-gold': '#F59E0B',
  'aladdin-pink': '#EC4899',
  'neon-purple': '#A855F7',
  'neon-turquoise': '#00D4FF',
  'neon-pink': '#FF6B9D',
  'neon-gold': '#FFD700',
}
```

### Event Details
Update the event information in `src/components/EventDetails.tsx`:

```javascript
const eventData = {
  date: "December 15, 2024",
  time: "2:00 PM - 6:00 PM",
  venue: "Magical Garden Palace",
  address: "123 Enchanted Street, Fairyland City",
  rsvpLink: "#rsvp"
}
```

### Photos
Replace placeholder images with actual photos:

1. **Family Photos**: Update `src/components/FamilyPhotos.tsx`
2. **Gallery**: Update `src/components/Gallery.tsx`
3. **Character Avatars**: Update `src/components/MeetTheStars.tsx`

### Countdown Timer
Set the target date in `src/components/CountdownTimer.tsx`:

```javascript
const targetDate = new Date('2024-12-15T14:00:00').getTime()
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎵 Optional Enhancements

### Background Music
To add background music, you can:

1. Add audio files to the `public` folder
2. Create a music toggle component
3. Integrate with the existing UI

### Additional Animations
- Add more floating elements
- Create custom SVG animations
- Implement particle effects

### Interactive Features
- Add a guest book
- Create a photo sharing feature
- Implement RSVP functionality

## 📄 License

This project is created for the personal celebration of Nidhi Sree and Tirumala Agam's 1st birthday.

## 🙏 Acknowledgments

- Disney's Moana and Aladdin for theme inspiration
- Framer Motion for smooth animations
- Tailwind CSS for beautiful styling
- Lucide React for magical icons

---

**Made with 💜💙💖 for our magical twins**

*Every moment with them is a treasure beyond measure.*
