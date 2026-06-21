import Link from 'next/link'
import { Check, Phone } from 'lucide-react'

const plans = [
  {
    name: 'Lawn Care Visit',
    price: '$85',
    description: 'One-time lawn maintenance for a clean, manicured look.',
    features: [
      'Mowing & edging',
      'Trimming along borders',
      'Blowing of clippings',
      'Weed control check',
      'Debris cleanup',
      'Property walkthrough',
      'No-obligation follow-up estimate',
    ],
    cta: 'Call to Book a Visit',
    featured: false,
  },
  {
    name: 'Full Landscape Design',
    price: 'Custom',
    description: 'Ideal for new installs, full yard makeovers, and garden transformations.',
    features: [
      'Custom design consultation',
      'Sod or seed installation',
      'Planting beds & flowers',
      'Mulch & edging',
      'Irrigation check & setup',
      '1 year plant guarantee',
    ],
    cta: 'Call for a Quote',
    featured: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-green-50 border-t border-green-100">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold">Transparent Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950">
            Our Packages
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
            Transparent pricing for landscaping packages. All estimates are clear, upfront, and tailored to your property.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 ${
                plan.featured
                  ? 'border-2 border-accent bg-green-700 shadow-[0_8px_40px_-8px_rgba(58,125,68,0.5)]'
                  : 'border-2 border-green-200 bg-white hover:border-accent hover:shadow-md'
              }`}
            >
              {plan.featured && (
                <div className="px-4 sm:px-6 py-2 bg-green-800 text-white text-xs sm:text-sm font-semibold text-center rounded-t-2xl">
                  Most Popular
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm sm:text-base ${plan.featured ? 'text-green-100' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className={`text-4xl sm:text-5xl font-bold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </div>
                  {plan.price === 'Custom' && (
                    <p className={`text-sm mt-1 ${plan.featured ? 'text-green-200' : 'text-slate-500'}`}>
                      Priced based on your property
                    </p>
                  )}
                </div>

                {/* Call CTA */}
                <Link
                  href="tel:+15627869827"
                  className={`w-full py-3 sm:py-3.5 rounded-lg font-semibold mb-8 transition-all duration-200 hover:scale-105 active:scale-95 text-sm sm:text-base flex items-center justify-center gap-2 ${
                    plan.featured
                      ? 'bg-white text-green-900 hover:bg-green-50'
                      : 'bg-accent text-white hover:bg-accent-dark'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  {plan.cta}
                </Link>

                <div className="space-y-3 sm:space-y-4 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 sm:gap-4">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-green-200' : 'text-accent'}`} />
                      <span className={`text-sm sm:text-base ${plan.featured ? 'text-green-100' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-slate-600 text-sm sm:text-base">
            Not sure which service is right?{' '}
            <Link href="tel:+15627869827" className="font-semibold text-accent hover:underline">
              Call us for a free consultation.
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
