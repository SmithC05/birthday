# Birthday Celebration Website

## Overview

A personalized birthday celebration website for Keerthana featuring interactive animations, festive effects, and multimedia content. The application is a single-page React application with a full-screen video background, animated visual effects (confetti, balloons, fireworks, hearts, sparkles), background music, and multiple content sections including a countdown timer, photo gallery, birthday messages, and surprise reveals.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool

**Routing**: Wouter for lightweight client-side routing with a simple Home page and 404 fallback

**UI Component Library**: shadcn/ui (Radix UI primitives) with Tailwind CSS for styling
- Extensive use of Radix UI components for accessible, unstyled primitives
- Custom theme with festive color palette (birthday pink, celebration purple, joy yellow, party blue)
- Mobile-first responsive design approach

**State Management**: 
- React hooks (useState, useEffect) for local component state
- TanStack Query (React Query) for server state management (configured but minimal API usage)
- No global state management library - components are self-contained

**Animation Strategy**:
- CSS animations and transitions for performance
- Intersection Observer API for scroll-triggered animations
- Multiple concurrent animation layers (confetti, balloons, hearts, fireworks, sparkles) managed independently
- Custom CSS animations defined in Tailwind config

**Component Architecture**:
- Section-based layout (Hero, Countdown, Gallery, Messages, Surprise, Fireworks)
- Reusable effect components (ConfettiEffect, FloatingBalloons, FloatingHearts, etc.)
- Shared UI components from shadcn/ui library
- Video and audio playback with autoplay handling

**Typography**: Google Fonts integration
- Primary: Poppins (playful, rounded)
- Accent: Pacifico (handwritten feel)

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**Development Setup**:
- Vite middleware integration for HMR in development
- Custom logging middleware for API requests
- Serves static build files in production

**Storage Layer**:
- Abstract storage interface (IStorage) for CRUD operations
- In-memory implementation (MemStorage) for user data
- Designed to be swappable with database implementation

**Session Management**: 
- Configured for connect-pg-simple (PostgreSQL session store)
- Currently minimal authentication implementation

### Data Storage Solutions

**Database ORM**: Drizzle ORM with PostgreSQL dialect
- Schema definition in TypeScript with Zod validation
- Migration support via drizzle-kit
- Connection via Neon serverless driver (@neondatabase/serverless)

**Current Schema**:
- Users table with id (UUID), username, password
- Designed for extension but minimal current usage

**Database Strategy**:
- Schema-first approach with type safety
- Drizzle generates TypeScript types from schema
- Prepared for PostgreSQL but can be adapted to other databases

### External Dependencies

**Third-Party Services**:
- **Google Fonts API**: Poppins and Pacifico font families for typography
- **Neon Database**: Serverless PostgreSQL hosting (configured via DATABASE_URL environment variable)

**Media Assets**:
- Background video (MP4 format, autoplay with muted fallback)
- Background music (MP3 format, Raja Rani theme)
- Stock birthday images (6 images in gallery)
- All media files stored in attached_assets directory

**Build & Development Tools**:
- Replit-specific plugins for development (cartographer, dev banner, runtime error overlay)
- esbuild for server-side bundling
- PostCSS with Tailwind CSS and Autoprefixer

**Key Libraries**:
- @tanstack/react-query: Server state and caching
- wouter: Lightweight routing
- date-fns: Date manipulation for countdown
- lucide-react: Icon library
- class-variance-authority & clsx: Conditional styling utilities

**Performance Considerations**:
- Video and audio preloading strategies
- Lazy animation triggering via Intersection Observer
- Optimized asset delivery
- Mobile-first responsive breakpoints