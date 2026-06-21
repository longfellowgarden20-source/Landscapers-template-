import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { business } from '../../config/business'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Landscaping Quote in Long Beach, CA',
  description: 'Contact Diaz Gardening Services for a free quote on lawn care, garden design, or commercial landscaping in Long Beach, CA. Call (562) 786-9827 or fill out our quick form.',
  alternates: { canonical: 'https://diazgardening.com/contact' },
  openGraph: {
    title: 'Contact Diaz Gardening | Free Landscaping Quote in Long Beach, CA',
    description: 'Get a free landscaping quote from Diaz Gardening Services in Long Beach, CA. Call or fill out our form — we respond fast.',
    url: 'https://diazgardening.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">Contact Diaz Gardening</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6">
              Ready for a beautiful yard? Get a free quote today
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Call or message us for lawn care, garden design, clean-ups, or ongoing maintenance. Our certified landscapers will respond quickly.
            </p>

            <div className="mt-8 space-y-3">
              <Link
                href={`tel:+1${business.phone.replace(/\D/g, '')}`}
                className="group flex items-center gap-4 w-full rounded-2xl border-2 border-green-200 bg-green-50 px-6 py-4 hover:border-accent hover:bg-accent hover:shadow-[0_8px_24px_-6px_rgba(58,125,68,0.4)] transition-all duration-200 active:scale-[0.98]"
              >
                <div className="w-11 h-11 rounded-xl bg-accent group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent group-hover:text-green-100 transition-colors duration-200">Call Us Now</p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-200">{business.phone}</p>
                </div>
              </Link>

              <Link
                href={`mailto:${business.email}`}
                className="group flex items-center gap-4 w-full rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 hover:border-accent hover:shadow-[0_8px_24px_-6px_rgba(58,125,68,0.2)] transition-all duration-200 active:scale-[0.98]"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-accent flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 group-hover:text-accent transition-colors duration-200">Email Us</p>
                  <p className="text-sm font-semibold text-slate-900">{business.email}</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-green-100 bg-green-50 p-8 shadow-sm">
            <form className="space-y-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Name</span>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Email</span>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Phone</span>
                <input
                  type="tel"
                  placeholder="(562) 786-9827"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Message</span>
                <textarea
                  rows={6}
                  placeholder="Describe your landscaping project or service needed"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
