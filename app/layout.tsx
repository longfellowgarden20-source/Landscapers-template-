import type { Metadata } from 'next'
import './globals.css'
import { business } from '../config/business'
import { CallButton } from './components/CallButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://diazgardening.com'),
  title: {
    default: 'Diaz Gardening Services | Lawn Care & Landscape Design in Long Beach, CA',
    template: '%s | Diaz Gardening Services',
  },
  description: 'Diaz Gardening Services provides professional lawn care, residential landscaping, garden design, and commercial grounds maintenance in Long Beach, CA. 20+ years of experience. Book online today.',
  keywords: ['landscaping Long Beach', 'lawn care Long Beach CA', 'landscape design', 'garden design', 'commercial landscaping', 'lawn maintenance', 'tree care', 'Diaz Gardening Services'],
  authors: [{ name: 'Diaz Gardening Services' }],
  creator: 'Diaz Gardening Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Diaz Gardening Services',
    title: 'Diaz Gardening Services | Lawn Care & Landscape Design in Long Beach, CA',
    description: 'Professional lawn care, residential landscaping, and garden design in Long Beach, CA. 20+ years of experience. Book online.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diaz Gardening Services | Long Beach, CA',
    description: 'Professional lawn care, landscaping, and garden design in Long Beach, CA.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌿</text></svg>',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    telephone: business.phone,
    email: business.email,
    ...(business.googlePlaceId && {
      sameAs: [`https://maps.google.com/?cid=${business.googlePlaceId}`],
    }),
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CallButton />
      </body>
    </html>
  )
}
