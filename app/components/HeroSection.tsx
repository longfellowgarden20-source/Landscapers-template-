import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-900">
      {/* Decorative background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] items-center">
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Professional Landscapers Since 2005
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Beautiful outdoor spaces for
              <br className="hidden sm:block" />
              <span className="text-green-100">homes and businesses</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-green-50 leading-relaxed">
              GreenEdge Landscaping transforms your property with expert lawn care, garden design, and reliable maintenance. Count on certified professionals for every job.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
              <Link href="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-900 rounded-lg font-medium hover:bg-green-50 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base">
                Request Service
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/60 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-200 text-sm sm:text-base">
                View Our Services
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-4 text-xs sm:text-sm text-green-100">
              <div className="flex items-center gap-2">
                <span>⭐ 4.9/5 from 200+ customers</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30"></div>
              <span>Trusted by homeowners and local businesses</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-3xl rounded-[2rem] border-2 border-white/30 bg-white/10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.3)] overflow-hidden">
            <Image
              priority
              src="/hero-lcp.svg"
              alt="Landscaper maintaining a beautiful garden"
              width={1200}
              height={720}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
