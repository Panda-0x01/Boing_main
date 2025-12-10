# API Abuse Detection System Website

A modern, animated website showcasing an advanced API abuse detection system built with Next.js, React, Framer Motion, and Tailwind CSS.

## Features

- **Clean Modern Design**: Professional black, white, and gray color scheme
- **MagicUI Components**: Beautiful, animated UI components with subtle effects
- **Spotlight Effect**: Elegant spotlight animation in the hero section
- **Meteors Background**: Subtle animated meteor shower effect
- **Bento Grid Layout**: Modern grid layout for feature showcase
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Components**: MagicUI-inspired components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx, tailwind-merge, and class-variance-authority
- **Language**: TypeScript for type safety

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Hero section with laser animations
│   ├── Features.tsx         # Features showcase section
│   ├── Documentation.tsx    # Documentation section
│   ├── Footer.tsx           # Footer with social links
│   └── LaserFlow.tsx        # Reusable laser animation component
└── ...config files
```

## Customization

### Laser Flow Component

The `LaserFlow` component is highly customizable:

```tsx
<LaserFlow 
  direction="horizontal" // or "vertical"
  color="#00d4ff"       // Custom color
  speed={2}             // Animation speed
  className="custom-class"
/>
```

### Color Scheme

Update the color scheme in `tailwind.config.js`:

```js
colors: {
  'cyber-blue': '#00d4ff',
  'cyber-purple': '#8b5cf6',
  'dark-bg': '#0a0a0a',
}
```

## GitHub Integration

The website includes a prominent GitHub button that links to your project repository. Update the GitHub URL in:

- `components/Header.tsx` (main CTA button)
- `components/Footer.tsx` (social links)

Replace `https://github.com/yourusername/api-abuse-detection` with your actual repository URL.

## Deployment

Deploy easily on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## License

MIT License - feel free to use this template for your own projects!