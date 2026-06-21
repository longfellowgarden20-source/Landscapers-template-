import { MapPin, CheckCircle } from 'lucide-react'
import { ServiceAreaMap } from './ServiceAreaMap'

const neighborhoods = [
  'Downtown Long Beach',
  'Belmont Shore',
  'Bixby Knolls',
  'California Heights',
  'East Village',
  'Lakewood Village',
  'Los Altos',
  'Naples Island',
  'North Long Beach',
  'Park Estates',
  'Signal Hill',
  'Wrigley',
]

const nearbyAreas = [
  'Lakewood',
  'Compton',
  'Carson',
  'Torrance',
  'Paramount',
  'Bellflower',
]

export function ServiceAreaSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">

          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold">Service Area</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 mb-4 leading-tight">
              Proudly serving<br />Long Beach & surrounding cities
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Diaz Gardening Services is based in Long Beach, CA. Our certified landscapers serve homes and businesses across the city and neighboring communities — fast response times, no long drives, and deep familiarity with local soil and climate conditions.
            </p>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 mb-6">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-widest mb-4">Long Beach Neighborhoods</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {neighborhoods.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-widest mb-4">Also Serving Nearby Cities</h3>
              <ul className="flex flex-wrap gap-2">
                {nearbyAreas.map((city) => (
                  <li key={city} className="px-3 py-1.5 rounded-full bg-white border border-slate-300 text-sm text-slate-700 font-medium">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — map embed */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] aspect-[4/3] w-full">
            <ServiceAreaMap />
          </div>

        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-slate-500">
          Not sure if we cover your area?{' '}
          <a href="/contact" className="font-semibold text-accent hover:underline">
            Give us a call — we'll let you know right away.
          </a>
        </p>
      </div>
    </section>
  )
}
