import Link from 'next/link'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">About GreenEdge</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6">
            Professional landscapers for homes, businesses, and outdoor transformations
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            GreenEdge Landscaping delivers dependable outdoor services with a focus on quality, craftsmanship, and lasting results.
            Our team is ready to design, install, and maintain landscapes that make your property stand out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition">
              Work with us
            </Link>
            <Link href="/" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-slate-300 text-slate-900 text-sm font-semibold hover:bg-slate-50 transition">
              Back to homepage
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Local expertise',
              body: 'Trusted landscapers who know local soil, climate, and plant life — delivering beautiful results every time.',
            },
            {
              title: 'Quality workmanship',
              body: 'We use quality materials, proven planting methods, and precise detailing for every landscaping project.',
            },
            {
              title: 'Customer care',
              body: 'Friendly communication, clear estimates, and follow-through from first consultation to final cleanup.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border-2 border-blue-100 p-8 bg-white hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(96,165,250,0.2)] transition-all duration-300">
              <h2 className="text-xl font-semibold text-slate-950 mb-3">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
