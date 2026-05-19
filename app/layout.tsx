import type { Metadata } from 'next'
import './globals.css'
import { business } from '../config/business'

export const metadata: Metadata = {
  title: 'GreenEdge Landscaping - Trusted Residential & Commercial Landscapers',
  description: 'Professional landscapers providing beautiful, reliable lawn and garden services for homes and businesses.',
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
      </body>
    </html>
  )
}
