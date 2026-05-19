import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'

export const metadata: Metadata = {
  title: 'Landscaping Pricing | Lawn Care & Landscape Design Plans in Long Beach',
  description: 'Transparent landscaping pricing from GreenEdge in Long Beach, CA. One-time lawn visits from $89, full landscape design from $1,500, and custom maintenance plans. No surprise fees.',
  alternates: { canonical: 'https://greenedgelandscaping.com/pricing' },
  openGraph: {
    title: 'Landscaping Pricing in Long Beach, CA | GreenEdge',
    description: 'Clear, upfront pricing for lawn care, landscape design, and maintenance plans in Long Beach, CA.',
    url: 'https://greenedgelandscaping.com/pricing',
  },
}
import { PricingSection } from '../components/PricingSection'
import { CTASection } from '../components/CTASection'
import { Footer } from '../components/Footer'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
