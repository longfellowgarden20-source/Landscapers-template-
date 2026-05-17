import Link from 'next/link'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { ServiceAreaSection } from './components/ServiceAreaSection'
import { Footer } from './components/Footer'

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
      <Footer />
    </main>
  )
}
