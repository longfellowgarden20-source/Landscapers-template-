'use client'

import { Zap, Home, Plug, Shield, Clock, Headphones } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Electrical Repairs',
    description: 'Fast diagnosis and repair for lighting, outlets, breakers, and faulty wiring.',
  },
  {
    icon: Home,
    title: 'Residential Service',
    description: 'Safe home wiring, panel upgrades, lighting installs, and smart home electrical projects.',
  },
  {
    icon: Plug,
    title: 'Commercial Electrical',
    description: 'Reliable power systems, lighting upgrades, and maintenance for businesses of all sizes.',
  },
  {
    icon: Shield,
    title: 'Safety Inspections',
    description: 'Code-compliant inspections, grounding checks, and surge protection recommendations.',
  },
  {
    icon: Clock,
    title: 'Emergency Response',
    description: 'Same-day service and emergency repairs when electrical issues can’t wait.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Clear estimates, reliable communication, and friendly follow-through from start to finish.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Electrical Services
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
            Professional electrical solutions for repairs, upgrades, safety inspections, and emergency service.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-xl border-2 border-slate-700 hover:border-accent hover:shadow-lg transition-all duration-300 bg-slate-800 hover:bg-slate-700"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
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
