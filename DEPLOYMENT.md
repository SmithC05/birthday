# 🎉 Birthday App Deployment Guide

## Free Hosting Options

### 1. Vercel (Recommended for Full-Stack)
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

**Environment Variables:**
- `DATABASE_URL` - Your PostgreSQL connection string
- `NODE_ENV` - Set to "production"

### 2. Netlify (Good for Static + Functions)
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
4. Set environment variables in Netlify dashboard

### 3. Railway (Great for Full-Stack with Database)
1. Push code to GitHub
2. Connect GitHub repo to Railway
3. Railway will auto-detect and deploy
4. Add PostgreSQL database service
5. Set environment variables

### 4. Render (Alternative Full-Stack)
1. Push code to GitHub
2. Create new Web Service on Render
3. Build command: `npm run build`
4. Start command: `npm start`
5. Set environment variables

## Database Setup

### Free PostgreSQL Options:
- **Neon** (Recommended): 3GB free tier
- **Supabase**: 500MB free tier
- **Railway**: PostgreSQL addon
- **Render**: PostgreSQL service

## Pre-Deployment Checklist

- [ ] Remove all Replit dependencies ✅
- [ ] Set up environment variables
- [ ] Test build locally: `npm run build`
- [ ] Upload media assets to hosting service
- [ ] Configure database connection
- [ ] Test deployment

## Media Assets

Your app includes:
- Background video: `bg-video_1759461765836.mp4`
- Background music: `raja-rani.c1a2bc91b5330ca77ad0_1759461765837.mp3`
- Stock images in `attached_assets/stock_images/`

Make sure these are accessible in your deployment!

## Quick Deploy Commands

```bash
# Build for production
npm run build

# Test locally
npm run preview

# Check for TypeScript errors
npm run check
```