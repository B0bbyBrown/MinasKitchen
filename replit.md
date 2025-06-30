# Mina's Kitchen Fundraising Platform

## Overview
A dynamic fundraising platform for Mina's Kitchen that transforms community support into tangible meal provision for children across South Africa. The platform tells the inspiring story of Mina, who went from losing her restaurant job during COVID to becoming a community leader feeding 500 children every Saturday in Smutsville, Sedgefield.

## Project Architecture
- **Frontend**: React with TypeScript, Vite build system
- **Backend**: Express.js server with in-memory storage
- **Styling**: Tailwind CSS with custom color scheme and animations
- **UI Components**: shadcn/ui component library
- **State Management**: TanStack Query for server state
- **Animation**: Framer Motion for interactive animations
- **Charts**: Chart.js for cost breakdown visualization

## Key Features
- Interactive hero section with donation progress tracking
- Animated cost breakdown pie chart showing fund allocation
- Real-time impact metrics (meals served, children fed, women employed)
- Donation modal with one-time and monthly giving options
- Challenge section highlighting the first R100K milestone
- Photo gallery showcasing community impact
- Contact section with WhatsApp and email integration
- Responsive design with warm, community-focused color palette

## Data Model
- **Donations**: Track donor information, amounts, and recurring status
- **Impact Metrics**: Store community impact statistics
- **Users**: Basic user management (currently unused)

## Current Status
- Fully functional fundraising website with all core features implemented
- In-memory storage with sample donation data
- All animations and interactions working
- Ready for deployment considerations

## Recent Changes
- Built comprehensive fundraising platform with all requested features
- Implemented animated cost breakdown chart
- Added donation statistics tracking
- Updated hero section to split-screen design: vertical video (left 1/3) + white content area (right 2/3)
- Redirected all donation CTAs to BackaBuddy campaign: https://www.backabuddy.co.za/campaign/help-feed-500-kids-with-minas-kitchen
- Right-aligned hero content with title "Nourishing South Africa's Future" and subtitle "12,000+ meals served since April 2024"
- Updated navigation to right-aligned layout
- Changed challenge from R100K to R150K milestone
- Removed "Weeks Running" metric, kept 3-column layout for impact metrics
- Updated cost breakdown: combined packaging/transport with operations (15%), updated messaging to "Each meal costs R40 per child"
- Updated story section: changed title to "Our Visionary Women", updated branding from Curious Cat Creative to Cat.Design with clickable link, changed "thousands" to "hundreds" of children, improved text contrast with white text

## User Preferences
- Focus on community impact storytelling
- Warm, approachable design aesthetic
- South African context and currency (Rand)
- Emphasis on transparency in fund usage

## Deployment Notes
- Project configured for Replit deployment
- Uses in-memory storage (suitable for demonstration)
- Environment ready for external database integration if needed