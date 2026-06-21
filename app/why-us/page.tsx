import type { Metadata } from 'next'
import { Navigation } from '../components/Navigation'

export const metadata: Metadata = {
  title: 'Why Choose Diaz Gardening | Trusted Landscapers in Long Beach, CA',
  description: 'Find out why Long Beach homeowners and businesses choose Diaz Gardening Services — certified professionals, transparent pricing, quality workmanship, and reliable scheduling.',
  alternates: { canonical: 'https://diazgardening.com/why-us' },
  openGraph: {
    title: 'Why Choose Diaz Gardening Services | Long Beach, CA',
    description: 'Certified, reliable, and transparent. See why Long Beach trusts Diaz Gardening for all their landscaping needs.',
    url: 'https://diazgardening.com/why-us',
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
