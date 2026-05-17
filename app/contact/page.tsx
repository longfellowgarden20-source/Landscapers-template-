import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">Contact GreenEdge</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6">
              Ready for a beautiful yard? Get a free quote today
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Call or message us for lawn care, garden design, clean-ups, or ongoing maintenance. Our certified landscapers will respond quickly.
            </p>

            <div className="mt-8 rounded-2xl border-2 border-green-100 bg-green-50 p-6">
              <p className="text-base font-semibold text-slate-900">Prefer to call? We're here to help.</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Call us directly at <a href="tel:+15551234567" className="text-accent font-medium hover:underline">(555) 123-4567</a> or email <a href="mailto:hello@example.com" className="text-accent font-medium hover:underline">hello@example.com</a>. If we don't pick up, please fill out the form and we'll respond as soon as possible.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-green-100 bg-green-50 p-8 shadow-sm">
            <form className="space-y-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Name</span>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Email</span>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Phone</span>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Message</span>
                <textarea
                  rows={6}
                  placeholder="Describe your landscaping project or service needed"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
