# Deployment Guide

This document provides comprehensive deployment instructions for the Boing website.

## Quick Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Panda-0x01/Boing_main)

### Manual Vercel Deployment

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## Alternative Deployment Options

### Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`

### Docker Deployment

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY . .
   COPY --from=deps /app/node_modules ./node_modules
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   COPY --from=builder /app/package.json ./package.json

   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**:
   ```bash
   docker build -t boing-website .
   docker run -p 3000:3000 boing-website
   ```

### Static Export (GitHub Pages)

1. **Update next.config.js**:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   module.exports = nextConfig
   ```

2. **Build and export**:
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Site URL
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Performance Optimizations

The website includes several performance optimizations:

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Static Generation**: Pre-rendered static pages
- **Font Optimization**: Google Fonts optimization
- **Bundle Analysis**: Run `npm run build:analyze` to analyze bundle size

## Security Headers

The `vercel.json` file includes security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## Monitoring and Analytics

### Core Web Vitals
Monitor performance with:
- Vercel Analytics (automatic with Vercel deployment)
- Google PageSpeed Insights
- Lighthouse CI

### Error Tracking
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior analytics

## Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Configure DNS records as instructed

### DNS Configuration
```
Type: CNAME
Name: www
Value: your-project.vercel.app

Type: A
Name: @
Value: 76.76.19.61
```

## SSL Certificate

SSL certificates are automatically provided by:
- Vercel (Let's Encrypt)
- Netlify (Let's Encrypt)
- Cloudflare (if using their DNS)

## Troubleshooting

### Build Failures
1. Check Node.js version (requires >=18.0.0)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check for TypeScript errors: `npm run type-check`

### Performance Issues
1. Analyze bundle: `npm run build:analyze`
2. Check image optimization settings
3. Review Core Web Vitals in deployment platform

### Mobile Issues
1. Test responsive design at different breakpoints
2. Verify touch targets are ≥44px
3. Check viewport meta tag configuration

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Monitor Core Web Vitals
- Track error rates and performance metrics

## Support

For deployment issues:
1. Check the [Next.js deployment documentation](https://nextjs.org/docs/deployment)
2. Review platform-specific guides (Vercel, Netlify, etc.)
3. Open an issue in the repository for project-specific problems