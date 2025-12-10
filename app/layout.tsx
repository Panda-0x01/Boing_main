import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boing-main.vercel.app'),
  title: {
    default: 'Boing - API Abuse Detection Platform',
    template: '%s | Boing'
  },
  description: 'Production-ready API abuse & cybersecurity monitoring platform with multi-layer detection, real-time alerts, and local ML models. Free and open-source.',
  keywords: [
    'API security',
    'abuse detection',
    'cybersecurity',
    'monitoring',
    'real-time alerts',
    'machine learning',
    'open source',
    'FastAPI',
    'React',
    'Next.js'
  ],
  authors: [{ name: 'Boing Team' }],
  creator: 'Boing',
  publisher: 'Boing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/boing_logo.jpeg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://boing-main.vercel.app',
    title: 'Boing - API Abuse Detection Platform',
    description: 'Production-ready API abuse & cybersecurity monitoring platform with multi-layer detection, real-time alerts, and local ML models.',
    siteName: 'Boing',
    images: [
      {
        url: '/boing_logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Boing API Abuse Detection Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boing - API Abuse Detection Platform',
    description: 'Production-ready API abuse & cybersecurity monitoring platform with multi-layer detection, real-time alerts, and local ML models.',
    images: ['/boing_logo.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        <div id="root">{children}</div>
      </body>
    </html>
  )
}