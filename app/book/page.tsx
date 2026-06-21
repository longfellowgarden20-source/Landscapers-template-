import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { business } from '../../config/business'

export const metadata: Metadata = {
  title: 'Book an Appointment | Diaz Gardening Services',
  description: 'Call or text Diaz Gardening Services to book a lawn care or landscaping appointment in Long Beach, CA.',
}

export default function BookPage() {
  const phoneDigits = business.phone.replace(/\D/g, '')

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">Book an Appointment</p>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-4 leading-tight">
          Ready to get started?
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-12">
          Give us a call or send a text and we will get you scheduled. We respond fast.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href={`tel:+1${phoneDigits}`}
            className="group flex items-center gap-5 w-full rounded-2xl border-2 border-green-200 bg-green-50 px-8 py-6 hover:border-accent hover:bg-accent hover:shadow-[0_8px_30px_-6px_rgba(58,125,68,0.4)] transition-all duration-200 active:scale-[0.98]"
          >
            <div className="w-14 h-14 rounded-xl bg-accent group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent group-hover:text-green-100 transition-colors duration-200">Call Us</p>
              <p className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-200">{business.phone}</p>
            </div>
          </Link>

          <Link
            href={`sms:+1${phoneDigits}`}
            className="group flex items-center gap-5 w-full rounded-2xl border-2 border-slate-200 bg-white px-8 py-6 hover:border-accent hover:shadow-[0_8px_30px_-6px_rgba(58,125,68,0.2)] transition-all duration-200 active:scale-[0.98]"
          >
            <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-accent flex items-center justify-center flex-shrink-0 transition-colors duration-200">
              <MessageSquare className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors duration-200" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 group-hover:text-accent transition-colors duration-200">Text Us</p>
              <p className="text-2xl font-bold text-slate-900">{business.phone}</p>
            </div>
          </Link>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Mon – Fri, 8 AM – 5 PM · We typically respond within the hour
        </p>
      </section>

      <Footer />
    </main>
  )
}
