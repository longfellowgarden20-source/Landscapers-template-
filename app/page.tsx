import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { ServiceAreaSection } from './components/ServiceAreaSection'
import { Footer } from './components/Footer'
import { faqs } from './faq/faqs'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GreenEdge Landscaping | Lawn Care & Landscape Design in Long Beach, CA',
  description: 'GreenEdge Landscaping — trusted lawn care, residential landscaping, garden design, and commercial grounds maintenance in Long Beach, CA. Book an appointment online.',
  alternates: { canonical: 'https://greenedgelandscaping.com' },
  openGraph: {
    title: 'GreenEdge Landscaping | Lawn Care & Landscape Design in Long Beach, CA',
    description: 'Trusted lawn care and landscaping in Long Beach, CA. Book online today.',
    url: 'https://greenedgelandscaping.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      <section className="py-20 bg-green-50 border-t border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">Explore GreenEdge</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950">
              Everything you need to know about us.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Discover our certified landscapers, transparent packages, and why local customers choose GreenEdge for beautiful, reliable outdoor work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/about" className="group block rounded-3xl border-2 border-green-200 bg-white p-8 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(58,125,68,0.3)] transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">About GreenEdge</h3>
              <p className="text-slate-500">Discover our certified landscapers, local service area, and commitment to quality and craftsmanship.</p>
            </Link>
            <Link href="/services" className="group block rounded-3xl border-2 border-green-200 bg-white p-8 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(58,125,68,0.3)] transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">Services</h3>
              <p className="text-slate-500">See the full range of landscaping services, from lawn care and garden design to tree work and maintenance plans.</p>
            </Link>
            <Link href="/our-work" className="group block rounded-3xl border-2 border-green-200 bg-white p-8 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(58,125,68,0.3)] transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">Our Work</h3>
              <p className="text-slate-500">Browse real projects we have completed for homeowners and businesses across the area.</p>
            </Link>
            <Link href="/why-us" className="group block rounded-3xl border-2 border-green-200 bg-white p-8 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(58,125,68,0.3)] transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">Why Us</h3>
              <p className="text-slate-500">Learn why homeowners and businesses trust us for beautiful, dependable landscaping service.</p>
            </Link>
          </div>
        </div>
      </section>

      <ServiceAreaSection />

      {/* FAQ preview — 2 most important questions */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950">
            Common questions
          </h2>
        </div>
        <div className="space-y-3 mb-8">
          {faqs.slice(0, 2).map((faq) => (
            <details key={faq.question} className="group border-2 border-slate-100 rounded-2xl bg-white open:border-accent open:bg-green-50 transition-all">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 text-base">
                {faq.question}
                <ChevronDown className="w-5 h-5 text-accent flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-slate-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            See all frequently asked questions →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
