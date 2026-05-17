import Link from 'next/link'
import { Navigation } from '../components/Navigation'
import { CTASection } from '../components/CTASection'
import { Footer } from '../components/Footer'

const projects = [
  {
    title: 'Full Backyard Transformation',
    category: 'Residential Design',
    description: 'Complete redesign of a neglected backyard — new sod, raised planting beds, stone pathway, and perimeter shrubs.',
    image: 'https://placehold.co/800x600/3a7d44/ffffff?text=Backyard+Transformation',
    tags: ['Sod Installation', 'Garden Beds', 'Stone Work'],
  },
  {
    title: 'Commercial Grounds Refresh',
    category: 'Commercial Maintenance',
    description: 'Seasonal overhaul for a local office complex including mulching, trimming, and fresh seasonal plantings at the entrance.',
    image: 'https://placehold.co/800x600/2d6235/ffffff?text=Commercial+Grounds',
    tags: ['Mulching', 'Seasonal Planting', 'Trimming'],
  },
  {
    title: 'Front Yard Curb Appeal',
    category: 'Residential Design',
    description: 'Stripped out overgrown shrubs and replaced with a clean modern landscape featuring ornamental grasses and river rock.',
    image: 'https://placehold.co/800x600/1e4d2b/ffffff?text=Curb+Appeal',
    tags: ['Shrub Removal', 'Ornamental Grass', 'River Rock'],
  },
  {
    title: 'Weekly Lawn Maintenance',
    category: 'Ongoing Maintenance',
    description: 'Recurring weekly service for a residential client — mowing, edging, blowing, and seasonal fertilization program.',
    image: 'https://placehold.co/800x600/4a8f55/ffffff?text=Lawn+Maintenance',
    tags: ['Mowing', 'Edging', 'Fertilization'],
  },
  {
    title: 'Garden Bed Installation',
    category: 'Residential Design',
    description: 'Designed and installed three raised garden beds with custom soil mix, drip irrigation, and a mix of perennials and annuals.',
    image: 'https://placehold.co/800x600/3a7d44/ffffff?text=Garden+Beds',
    tags: ['Raised Beds', 'Drip Irrigation', 'Perennials'],
  },
  {
    title: 'Tree & Shrub Pruning',
    category: 'Tree Care',
    description: 'Large-scale pruning job across a residential property with 12 mature trees and 20+ shrubs shaped for the season.',
    image: 'https://placehold.co/800x600/2d6235/ffffff?text=Tree+%26+Shrub+Care',
    tags: ['Tree Pruning', 'Shrub Shaping', 'Cleanup'],
  },
]

const categories = ['All', 'Residential Design', 'Commercial Maintenance', 'Ongoing Maintenance', 'Tree Care']

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">Our Work</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6 leading-tight">
            Projects we are proud of
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every property is different. Browse a selection of real landscaping projects we have completed for homeowners and businesses across Long Beach and surrounding areas.
          </p>
        </div>
      </section>

      {/* Category filter pills (static, visual only) */}
      <section className="border-t border-green-100 bg-green-50 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  i === 0
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-slate-600 border-green-200 hover:border-accent hover:text-accent'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border-2 border-green-100 bg-white hover:border-accent hover:shadow-[0_8px_40px_-12px_rgba(58,125,68,0.25)] transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-xs text-slate-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="border-t border-green-100 bg-green-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">What Clients Say</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950">
              Trusted by homeowners and businesses
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                quote: 'Our backyard went from an eyesore to our favorite room in the house. The team was professional and fast.',
                name: 'Maria T.',
                location: 'Long Beach, CA',
              },
              {
                quote: 'We have been on their maintenance plan for two years. Our lawn has never looked better and they always show up on time.',
                name: 'James R.',
                location: 'Lakewood, CA',
              },
              {
                quote: 'Great communication, fair pricing, and the results speak for themselves. Highly recommend GreenEdge.',
                name: 'Sandra K.',
                location: 'Torrance, CA',
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl bg-white border-2 border-green-100 p-8 shadow-sm">
                <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
