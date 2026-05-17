import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[620px] sm:min-h-[700px] lg:min-h-[780px] flex items-center">
      {/* Background image */}
      <Image
        priority
        src="/hero-bg.webp"
        alt="Beautiful landscaped backyard at dusk"
        fill
        sizes="100vw"
        quality={85}
        className="object-cover object-center"
      />

      {/* Dark overlay for text legibility — heavier on the left where text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      {/* Secondary bottom fade for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Professional Landscapers Since 2005
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            Beautiful outdoor spaces for
            <br className="hidden sm:block" />
            <span className="text-green-300">homes and businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            GreenEdge Landscaping transforms your property with expert lawn care, garden design, and reliable maintenance. Count on certified professionals for every job.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <Link href="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base shadow-[0_4px_20px_rgba(58,125,68,0.5)]">
              Request Service
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-sm border border-white/40 text-white rounded-lg font-medium hover:bg-white/25 transition-all duration-200 text-sm sm:text-base text-center">
              View Our Services
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-2 text-xs sm:text-sm text-white/80">
            <span>⭐ 4.9/5 from 200+ customers</span>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <span>Trusted by homeowners and local businesses</span>
          </div>
        </div>
      </div>
    </section>
  )
}
