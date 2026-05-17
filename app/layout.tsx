import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BrightSpark Electric - Trusted Residential & Commercial Electricians',
  description: 'Licensed electricians providing safe, fast, and reliable electrical service for homes and businesses.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚡</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
