# DigiNeom Portfolio

A premium, multi-page portfolio website for a software development and web design agency. Built with Next.js 14, TypeScript, Tailwind CSS, and advanced UI components.

## Features

- 🎨 **Premium Design**: Modern, professional UI with Deep Royal Blue (#0d47a1) color scheme
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Next.js 14**: Built with App Router for optimal performance
- 🎭 **Advanced Animations**: Framer Motion for smooth, engaging interactions
- ✨ **Interactive Components**: 
  - Sparkles particle effects in Hero
  - Shimmer buttons with animated effects
  - Wave path dividers
  - Feature carousel for work process
  - Gallery carousel for portfolio
  - Highlighter effects for contact cards
- 💅 **Shadcn UI**: Beautiful, accessible component library
- 🔧 **TypeScript**: Full type safety throughout

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI structure
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Particles**: TSParticles
- **Carousel**: Embla Carousel

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── projects/
│   │   └── page.tsx        # Portfolio page
│   ├── about/
│   │   └── page.tsx        # About/Team page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── sparkles.tsx    # Particle effects
│   │   ├── shimmer-button.tsx
│   │   ├── wave-path.tsx
│   │   ├── feature-carousel.tsx
│   │   ├── gallery4.tsx
│   │   ├── highlighter.tsx
│   │   └── ... (Shadcn components)
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── ClientsStats.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── PortfolioPreview.tsx
│   ├── Reviews.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

### Home (`/`)
- Hero section with sparkles background
- Clients/Stats section
- Services showcase
- Work Process (carousel)
- Portfolio preview (gallery)
- Client reviews
- Call-to-action section

### Projects (`/projects`)
- Full portfolio grid
- Project details with tags
- Filter and search capabilities

### About (`/about`)
- Agency story
- Team members
- Company values
- Statistics

### Contact (`/contact`)
- Contact form
- Contact information with highlighter effects
- Multiple communication channels

## Key Components

### Sparkles
Animated particle background effect using TSParticles. Used in the Hero section.

### Shimmer Button
Animated button with shimmer effect. Used for primary CTAs.

### Wave Path
SVG wave divider component for visual section separation.

### Feature Carousel
Interactive carousel showcasing the work process steps.

### Gallery4
Portfolio gallery with carousel functionality and hover effects.

### Highlighter
Hover effect component that creates a glow around contact cards.

## Customization

### Colors
Update the primary color scheme in `tailwind.config.js`:
```js
colors: {
  primary: {
    // Your color palette
  }
}
```

### Content
All content is easily customizable in the component files. Update text, images, and links as needed.

## Deployment

The site is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

## License

This project is private and proprietary.

---

Made with ❤️ by the DigiNeom team
