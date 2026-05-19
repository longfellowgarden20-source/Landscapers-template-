import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'

export const metadata: Metadata = {
  title: 'Landscaping Services | Lawn Care, Garden Design & More in Long Beach',
  description: 'GreenEdge offers full-service landscaping in Long Beach, CA — lawn maintenance, residential & commercial landscaping, garden design, tree & shrub care, and free consultations.',
  alternates: { canonical: 'https://greenedgelandscaping.com/services' },
  openGraph: {
    title: 'Landscaping Services in Long Beach, CA | GreenEdge',
    description: 'Lawn care, garden design, tree care, and commercial landscaping in Long Beach, CA.',
    url: 'https://greenedgelandscaping.com/services',
  },
}
import { FeaturesSection } from '../components/FeaturesSection'
import { CTASection } from '../components/CTASection'
import { Footer } from '../components/Footer'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
