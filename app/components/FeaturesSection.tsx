import { Scissors, Home, Building2, Flower2, Trees, Headphones } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Lawn Maintenance',
    description: 'Regular mowing, edging, and trimming to keep your lawn looking neat and healthy year-round.',
  },
  {
    icon: Home,
    title: 'Residential Landscaping',
    description: 'Custom garden design, sod installation, planting beds, and full front and backyard transformations.',
  },
  {
    icon: Building2,
    title: 'Commercial Landscaping',
    description: 'Reliable grounds maintenance, seasonal clean-ups, and landscape upkeep for businesses of all sizes.',
  },
  {
    icon: Flower2,
    title: 'Garden Design',
    description: 'Professional planting plans, flower beds, mulching, and seasonal color rotations.',
  },
  {
    icon: Trees,
    title: 'Tree & Shrub Care',
    description: 'Pruning, shaping, removal, and stump grinding to keep your trees and shrubs healthy and safe.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Clear estimates, reliable communication, and friendly follow-through from first call to final cleanup.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold">What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950">
            Landscaping Services
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
            Professional landscaping solutions for lawn care, garden design, tree service, and commercial grounds maintenance.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-xl border-2 border-slate-200 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(96,165,250,0.3)] transition-all duration-300 bg-white hover:bg-blue-50/30"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
