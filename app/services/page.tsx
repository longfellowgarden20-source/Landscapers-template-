import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'

export const metadata: Metadata = {
  title: 'Landscaping Services | Lawn Care, Garden Design & More in Long Beach',
  description: 'Diaz Gardening Services offers full-service landscaping in Long Beach, CA — lawn maintenance, residential & commercial landscaping, garden design, tree & shrub care, and free consultations.',
  alternates: { canonical: 'https://diazgardening.com/services' },
  openGraph: {
    title: 'Landscaping Services in Long Beach, CA | Diaz Gardening',
    description: 'Lawn care, garden design, tree care, and commercial landscaping in Long Beach, CA.',
    url: 'https://diazgardening.com/services',
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
