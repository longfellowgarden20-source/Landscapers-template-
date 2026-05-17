import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Safety Inspection',
    price: '149',
    description: 'Identify hazards, code issues, and get clear repair recommendations.',
    features: [
      'Comprehensive home inspection',
      'Breaker panel review',
      'Outlet & switch testing',
      'Grounding verification',
      'Surge protection advice',
      'Written safety report',
      'No-obligation estimate',
    ],
    cta: 'Book Inspection',
    featured: false,
  },
  {
    name: 'Electrical Upgrade',
    price: '1,250',
    description: 'Ideal for kitchen remodels, panel upgrades, EV chargers, and modern lighting.',
    features: [
      'Panel and circuit upgrades',
      'New outlet and lighting installs',
      'EV charger wiring',
      'Smart home ready upgrades',
      'Permitting assistance',
      '1 year workmanship warranty',
    ],
    cta: 'Get Estimate',
    featured: true,
  },
  {
    name: 'Commercial Maintenance',
    price: 'Custom',
    description: 'Planned service and emergency support for businesses of any size.',
    features: [
      'Preventive maintenance',
      'Lighting and power audits',
      'Emergency response',
      'Equipment replacement',
      'Safety compliance checks',
      'Priority scheduling',
      'Service agreements',
    ],
    cta: 'Schedule Consultation',
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-blue-50 border-t border-blue-100">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold">Transparent Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950">
            Our Packages
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
            Transparent pricing for electrical service packages. All estimates are clear, upfront, and tailored to your needs.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 ${
                plan.featured
                  ? 'border-2 border-accent bg-blue-600 shadow-[0_8px_40px_-8px_rgba(96,165,250,0.5)] scale-100 md:scale-105'
                  : 'border-2 border-blue-200 bg-white hover:border-accent hover:shadow-md'
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="px-4 sm:px-6 py-2 bg-blue-700 text-white text-xs sm:text-sm font-semibold text-center rounded-t-2xl">
                  Most Popular
                </div>
              )}

              {/* Card content */}
              <div className="p-6 sm:p-8 flex flex-col h-full">
                {/* Plan name and description */}
                <div className="mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm sm:text-base ${plan.featured ? 'text-blue-100' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className={`text-4xl sm:text-5xl font-bold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 sm:py-3.5 rounded-lg font-medium mb-8 transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base ${
                    plan.featured
                      ? 'bg-white text-blue-700 hover:bg-blue-50'
                      : 'bg-accent text-white hover:bg-accent-dark'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features list */}
                <div className="space-y-3 sm:space-y-4 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 sm:gap-4">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-blue-200' : 'text-accent'}`} />
                      <span className={`text-sm sm:text-base ${plan.featured ? 'text-blue-100' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-slate-600 text-sm sm:text-base">
            Not sure which service is right? <span className="font-semibold">Contact us for a free consultation and custom electrician estimate.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
