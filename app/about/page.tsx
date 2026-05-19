import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">About GreenEdge</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6 leading-tight">
            Built on hard work, rooted in craftsmanship
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            GreenEdge Landscaping has been transforming outdoor spaces for homeowners and businesses across the region for over two decades. Everything we do is guided by one principle — if we would not be proud to put our name on it, we do not deliver it.
          </p>
        </div>
      </section>

      {/* Owner section */}
      <section className="border-t border-green-100 bg-green-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Photo */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-[0_20px_60px_-15px_rgba(58,125,68,0.3)] relative">
                <Image
                  src="/owner.png"
                  alt="Hector Diaz, Owner of GreenEdge Landscaping"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 400px"
                  priority
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 sm:right-auto sm:-left-4 lg:-left-6 bg-accent text-white rounded-2xl px-5 py-4 shadow-lg max-w-[160px]">
                <p className="text-2xl font-bold leading-none">20+</p>
                <p className="text-xs font-medium text-green-100 mt-1 leading-snug">Years of experience</p>
              </div>
            </div>

            {/* Content */}
            <div className="pt-6 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Meet the Owner</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 mb-1 leading-tight">
                Hector Diaz
              </h2>
              <p className="text-base text-accent font-medium mb-6">Founder & Owner, GreenEdge Landscaping</p>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  What started as a summer job cutting neighbors' lawns turned into a lifelong career built on genuine love for the craft. With over 20 years of hands-on experience in residential and commercial landscaping, Hector has seen — and handled — just about every challenge a property can throw at you.
                </p>
                <p>
                  Hector founded GreenEdge with a simple belief: that every customer deserves the same care and attention he would give his own home. That means showing up on time, communicating clearly, and never cutting corners — no matter the size of the job.
                </p>
                <p>
                  From full backyard redesigns to weekly maintenance programs, Hector personally oversees every project to make sure the quality meets the standard GreenEdge has built its reputation on. When he is not on a job site, you will find him studying new planting techniques, training his crew, or spending time with his family outdoors.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-slate-300 text-slate-900 text-sm font-semibold hover:bg-white transition"
                >
                  See Our Work
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">What We Stand For</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950">
            The values behind every job
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Local expertise',
              body: 'We know the local soil, climate, and plant life — which means better decisions and longer-lasting results for your property.',
            },
            {
              title: 'Quality workmanship',
              body: 'We use quality materials, proven methods, and precise detailing on every project. The standard never changes based on the size of the job.',
            },
            {
              title: 'Honest communication',
              body: 'Clear estimates, no surprise charges, and straight answers from the first call to the final cleanup. That is how we build lasting relationships.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border-2 border-green-100 p-8 bg-white hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(58,125,68,0.2)] transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-950 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
