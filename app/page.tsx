import Link from 'next/link'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300 font-semibold mb-4">Explore BrightSpark</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Find the electrical service you need.
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Discover our licensed electricians, transparent packages, and why local customers choose BrightSpark Electric for safe power work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/about" className="group block rounded-3xl border-2 border-slate-700 bg-slate-800 p-8 hover:border-accent hover:bg-slate-700 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-white mb-3">About BrightSpark</h3>
              <p className="text-slate-400">Discover our licensed electricians, local service area, and commitment to safety and reliability.</p>
            </Link>
            <Link href="/services" className="group block rounded-3xl border-2 border-slate-700 bg-slate-800 p-8 hover:border-accent hover:bg-slate-700 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-white mb-3">Services</h3>
              <p className="text-slate-400">See the full range of electrical services, from repairs and upgrades to inspections and emergency response.</p>
            </Link>
            <Link href="/pricing" className="group block rounded-3xl border-2 border-slate-700 bg-slate-800 p-8 hover:border-accent hover:bg-slate-700 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-white mb-3">Pricing</h3>
              <p className="text-slate-400">Compare service packages and learn how our upfront pricing makes electrical work easier to plan.</p>
            </Link>
            <Link href="/why-us" className="group block rounded-3xl border-2 border-slate-700 bg-slate-800 p-8 hover:border-accent hover:bg-slate-700 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-white mb-3">Why Us</h3>
              <p className="text-slate-400">Learn why homeowners and businesses trust us for safe, fast, and reliable electrical service.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
