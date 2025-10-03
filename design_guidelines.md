# Birthday Celebration Website - Design Guidelines

## Design Approach: Festive Reference-Based
Drawing inspiration from modern celebration and event websites with a focus on joyful, interactive experiences. The design should feel like a digital birthday party - vibrant, playful, and full of delightful surprises.

## Core Design Principles
- **Mobile-First Optimization**: Every interaction and animation must work flawlessly on touch devices
- **Festive & Cheerful**: Bright, celebratory colors with playful animations throughout
- **Surprise & Delight**: Progressive revelations and interactive elements that reward scrolling
- **Lightweight Performance**: Optimized assets and animations for smooth mobile experience

## Color Palette

**Primary Colors (Bright & Celebratory)**
- Birthday Pink: 340 82% 65%
- Celebration Purple: 280 75% 68%
- Joy Yellow: 48 95% 65%
- Party Blue: 200 85% 60%

**Accent & Supporting**
- Confetti Red: 0 85% 62%
- Balloon Green: 150 70% 55%
- Sparkle Gold: 45 100% 70%

**Background & Overlay**
- Dark overlay for video: 0 0% 0% / 30% (to ensure text readability)
- Card backgrounds: 0 0% 100% / 10% (glassmorphic effect over video)

## Typography

**Primary Font**: Poppins (Google Fonts) - playful, rounded, friendly
**Accent Font**: Pacifico (Google Fonts) - for handwritten feel on special messages

**Scale**:
- Hero Heading: text-6xl md:text-8xl font-bold (animated glowing effect)
- Section Headings: text-4xl md:text-5xl font-semibold
- Body Text: text-lg md:text-xl font-normal
- Interactive Buttons: text-xl font-medium

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20
- Section padding: py-16 md:py-20
- Card spacing: p-6 md:p-8
- Element gaps: gap-4 md:gap-6

**Container**: max-w-6xl mx-auto for content sections

## Component Library

### Video Background Layer
- Full-screen (w-screen h-screen), fixed position, object-cover
- Muted, autoplay, loop attributes
- Slight blur filter when overlaid with content for readability

### Music Control
- "Tap to Start 🎶" button: Floating fixed bottom-8 right-8, glassmorphic card with backdrop-blur
- Pulsing animation to draw attention
- Auto-hide after music starts, show volume control icon

### Greeting Section (Hero)
- Full viewport height (min-h-screen)
- Animated glowing text effect: "Happy Birthday 🥳 Keerthi Madam 🎂🎈"
- Typewriter animation on load
- Text shadow with multi-color glow (pink, purple, yellow)

### Confetti & Balloons
- Confetti: 50+ pieces falling from top, random colors, continuous loop for first 10 seconds
- Floating Balloons: 15-20 balloons, floating upward animation, positioned randomly
- Tappable balloons: Scale + pop animation on tap, with sound effect indicator

### Gallery Section
- 2x2 grid on mobile, 3x3 on desktop
- Placeholder images: birthday cake, candles, balloons, fireworks, party hats, gifts, streamers
- Hover/tap effect: gentle scale and brightness increase
- Note below gallery: "You can replace these with your own photos later!" (italic, lighter text)

### Messages Section
- Typing effect animation for each line
- Staggered reveal (one line appears after previous completes)
- Sample messages with emojis, centered text
- Floating heart/star particles around messages

### Countdown Timer
- Large digital display: separate boxes for hours, minutes, seconds
- Glowing borders with celebration colors
- Final message reveal: "It's officially your day! 🎉" with burst animation

### Hidden Surprise Button
- Prominent "Click here for a surprise" button with pulse animation
- Reveal: Modal/overlay with birthday GIF or secret message
- Confetti burst on reveal

### Ending Section with Fireworks
- Full-screen fireworks animation (particle effects, multiple colors)
- Final message: "Once again, Happy Birthday Keerthi Madam🎉💖"
- Large, centered, with subtle fade-in animation

### Floating Animations (Throughout Page)
- Hearts: Floating upward, fading out, random spawn points
- Bubbles: Gentle float with wobble effect
- Sparkles: Twinkling particles near text elements

## Animations & Interactions

**Scroll Behavior**: Smooth scroll with snap-to-section on mobile
**Transitions**: All sections fade-in on scroll into view
**Text Effects**: 
- Typewriter for greeting
- Typing effect for messages
- Glowing text with CSS animations

**Interactive Elements**:
- Balloon pop: Scale to 1.5x then disappear with particle burst
- Button hovers: Gentle scale (1.05x) with shadow increase
- Card interactions: Lift effect (translateY(-4px))

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked sections)
- Tablet: 768px - 1024px (adjusted spacing, larger text)
- Desktop: > 1024px (multi-column grids, enhanced animations)

## Performance Considerations
- Lazy load images in gallery section
- Use CSS animations over JavaScript where possible
- Reduce particle count on mobile devices
- Video quality: lower resolution for mobile networks

## Images Section
No traditional hero image - instead using full-screen video background (bg-video.mp4) throughout the entire page experience. 

**Gallery Placeholders**: Use festive stock images or illustrations:
- Birthday cake with candles (central piece)
- Colorful balloons cluster
- Fireworks display
- Party decorations (streamers, confetti)
- Gift boxes wrapped with ribbons
- Birthday candles close-up

All images should have rounded corners (rounded-xl) and subtle shadow effects.