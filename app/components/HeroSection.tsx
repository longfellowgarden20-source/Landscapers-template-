import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[620px] sm:min-h-[700px] lg:min-h-[780px] flex items-center bg-white">
      {/* Background image */}
      <Image
        priority
        src="/hero-bg.webp"
        alt="Beautiful landscaped garden pathway"
        fill
        sizes="100vw"
        quality={85}
        className="object-cover object-center"
      />

      {/* Light overlay — keeps left side readable, fades right so image shows */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/10" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Professional Landscapers Since 2005
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
            Beautiful outdoor spaces for
            <br className="hidden sm:block" />
            <span className="text-accent">homes and businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Diaz Gardening Services transforms your property with expert lawn care, garden design, and reliable maintenance. Count on certified professionals for every job.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <Link href="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base shadow-[0_4px_20px_rgba(58,125,68,0.35)]">
              Request Service
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-medium hover:border-accent hover:text-accent transition-all duration-200 text-sm sm:text-base text-center">
              View Our Services
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
