export function WhyUsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="text-center mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">Why Choose Diaz Gardening</p>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6">
          Trusted landscapers who put quality first
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Our certified landscapers deliver beautiful results, honest pricing, and dependable service. Here's what makes Diaz Gardening the right choice.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {[
          {
            title: 'Certified landscapers',
            description:
              'Our crew is fully certified, insured, and trained for residential and commercial landscaping projects of any size.',
          },
          {
            title: 'Transparent pricing',
            description:
              'You receive clear estimates, honest costs, and no surprise fees—just dependable landscaping service.',
          },
          {
            title: 'Quality-first craftsmanship',
            description:
              'We use premium materials, proven techniques, and leave your property looking pristine after every visit.',
          },
          {
            title: 'Reliable scheduling',
            description:
              'From one-time cleanups to recurring maintenance plans, we show up on time and get the job done right.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border-2 border-green-100 p-8 shadow-sm bg-white hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(58,125,68,0.2)] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-slate-950 mb-3">{item.title}</h2>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          When you choose Diaz Gardening, you get landscaping done right the first time—beautiful, reliable, and built to last.
        </p>
      </div>
    </section>
  )
}
