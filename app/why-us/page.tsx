import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'

export const metadata: Metadata = {
  title: 'Why Choose GreenEdge | Trusted Landscapers in Long Beach, CA',
  description: 'Find out why Long Beach homeowners and businesses choose GreenEdge Landscaping — certified professionals, transparent pricing, quality workmanship, and reliable scheduling.',
  alternates: { canonical: 'https://greenedgelandscaping.com/why-us' },
  openGraph: {
    title: 'Why Choose GreenEdge Landscaping | Long Beach, CA',
    description: 'Certified, reliable, and transparent. See why Long Beach trusts GreenEdge for all their landscaping needs.',
    url: 'https://greenedgelandscaping.com/why-us',
  },
}
import { WhyUsSection } from '../components/WhyUsSection'
import { CTASection } from '../components/CTASection'
import { Footer } from '../components/Footer'

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
