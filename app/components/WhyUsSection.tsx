export function WhyUsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="text-center mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">Why Choose BrightSpark</p>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6">
          Trusted electricians who put safety first
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Our licensed electricians deliver safe installations, honest pricing, and fast response. Here’s what makes BrightSpark the right choice.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {[
          {
            title: 'Licensed electricians',
            description:
              'Our technicians are fully licensed, insured, and trained for residential and commercial electrical work.',
          },
          {
            title: 'Transparent pricing',
            description:
              'You receive clear estimates, honest costs, and no surprise fees—just dependable electrical service.',
          },
          {
            title: 'Safety-first service',
            description:
              'We follow code, use quality materials, and leave your property clean and secure after every job.',
          },
          {
            title: 'Reliable availability',
            description:
              'From planned upgrades to emergency repairs, we’re ready to respond when you need us most.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border-2 border-blue-100 p-8 shadow-sm bg-white hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(96,165,250,0.2)] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-slate-950 mb-3">{item.title}</h2>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          When you choose BrightSpark, you get electrical work done right the first time—safe, reliable, and built to last.
        </p>
      </div>
    </section>
  )
}
