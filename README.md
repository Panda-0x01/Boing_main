# Boing - API Abuse Detection Platform Website

A modern, professional website for the Boing API abuse detection platform built with Next.js, React, Framer Motion, and Tailwind CSS.

## Features

- **Modern Dark Theme**: Professional black, white, and gray color scheme
- **Interactive Sidebar**: Organized project components with detailed modals
- **Enhanced Header**: Detection pipeline visualization with floating elements
- **Documentation Section**: CardSwap animation with comprehensive guides
- **Custom Scrollbar**: Styled scrollbars that match the dark theme
- **Boing Logo Integration**: Real logo with SVG fallbacks throughout
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Components**: shadcn/ui components with Radix UI primitives
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
│   ├── globals.css          # Global styles and custom scrollbar
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Enhanced hero section
│   ├── Sidebar.tsx          # Interactive sidebar with projects
│   ├── Features.tsx         # Platform features showcase
│   ├── Documentation.tsx    # Documentation with CardSwap
│   ├── GitHubSection.tsx    # GitHub integration section
│   ├── Footer.tsx           # Footer with Boing branding
│   ├── ProjectDetails.tsx   # Modal for project details
│   └── icons/index.tsx      # Custom SVG icons including Boing logo
├── public/
│   ├── boing_logo.jpeg      # Boing logo image
│   └── favicon.ico          # Favicon
└── ...config files
```

## Key Components

### Interactive Sidebar
- **Project Categories**: Detection, Monitoring, Security, Platform
- **Clickable Items**: Each project opens detailed information modal
- **Custom Scrollbar**: Dark-themed scrollbar styling
- **Boing Logo**: Real logo with SVG fallback

### Enhanced Header
- **Detection Pipeline**: Visual representation with orbiting elements
- **Gradient Backgrounds**: Subtle radial gradients for depth
- **Action Buttons**: Direct links to GitHub repository
- **Responsive Layout**: Two-column layout with proper spacing

### Documentation Section
- **CardSwap Animation**: Smooth card transitions
- **Comprehensive Guides**: Quick Start, API Integration, Detection Config, Production Deploy
- **Proper Spacing**: Fixed container overflow issues
- **GitHub Links**: Direct links to specific documentation sections

## GitHub Integration

All GitHub links point to the official Boing repository:
- Repository: `https://github.com/Panda-0x01/Boing_API`
- Documentation links include proper anchors
- External link attributes for security

## Customization

### Color Scheme
The website uses CSS variables for consistent theming:
```css
.dark {
  --background: 0 0% 3%;
  --foreground: 0 0% 98%;
  --card: 0 0% 5%;
  --border: 0 0% 12%;
  /* ... */
}
```

### Boing Logo
The logo appears in multiple locations:
- Sidebar header (32x32px)
- Footer branding (40x40px)
- Browser favicon
- SVG fallback component

## Deployment

Deploy easily on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The website is optimized for production with:
- Next.js Image optimization
- Proper meta tags and SEO
- Performance-optimized animations
- Responsive design

## License
MIT License - feel free to use this template for your own projects!