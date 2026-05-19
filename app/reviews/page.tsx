'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { Star, CheckCircle2 } from 'lucide-react'
import { business } from '../../config/business'

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  created_at: string
}

function StarRating({ rating, onSelect }: { rating: number; onSelect?: (r: number) => void }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type={onSelect ? 'button' : undefined}
          onClick={() => onSelect?.(n)}
          onMouseEnter={() => onSelect && setHovered(n)}
          onMouseLeave={() => onSelect && setHovered(0)}
          className={onSelect ? 'cursor-pointer' : 'cursor-default'}
        >
          <Star
            className={`w-5 h-5 transition-colors ${
              n <= (hovered || rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
            }`}
          />
        </button>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', rating: 0, comment: '' })

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data) => setReviews(data.reviews ?? []))
      .finally(() => setLoading(false))
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.rating === 0) { setError('Please select a star rating.'); return }
    setSubmitting(true)
    setError('')
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setSubmitted(true)
    } else {
      setError('Something went wrong. Please try again.')
    }
    setSubmitting(false)
  }

  const avg = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-green-200 text-sm uppercase tracking-widest font-semibold mb-3">Customer Reviews</p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            What our clients say
          </h1>
          {avg && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-4xl font-bold text-white">{avg}</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((n) => (
                    <Star key={n} className={`w-5 h-5 ${n <= Math.round(Number(avg)) ? 'fill-yellow-400 text-yellow-400' : 'text-green-600'}`} />
                  ))}
                </div>
                <span className="text-green-200 text-xs mt-0.5">{reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Leave a review */}
        <section>
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Leave a review</h2>
          {submitted ? (
            <div className="rounded-2xl bg-green-50 border-2 border-green-100 p-8 text-center">
              <CheckCircle2 className="w-10 h-10 text-accent mx-auto mb-3" />
              <p className="font-semibold text-slate-900 text-lg mb-1">Thank you for your review!</p>
              <p className="text-slate-500 text-sm">It will appear once approved by our team.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border-2 border-green-100 p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-sm font-medium text-slate-800">Your Name</span>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-800">Email <span className="text-slate-400 font-normal">(not shown publicly)</span></span>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </label>
              </div>

              <div>
                <span className="text-sm font-medium text-slate-800 block mb-2">Rating</span>
                <StarRating rating={form.rating} onSelect={(r) => setForm({ ...form, rating: r })} />
              </div>

              <label className="block">
                <span className="text-sm font-medium text-slate-800">Your Review</span>
                <textarea
                  required
                  rows={4}
                  placeholder={`Tell others about your experience with ${business.name}...`}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>

              {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-2xl bg-accent text-white font-semibold hover:bg-accent-dark transition disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          )}
        </section>

        {/* Reviews list */}
        <section>
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
            {reviews.length > 0 ? `${reviews.length} Review${reviews.length !== 1 ? 's' : ''}` : 'Reviews'}
          </h2>
          {loading ? (
            <div className="text-center py-16 text-slate-400">Loading reviews...</div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-16 text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
              <Star className="w-8 h-8 mx-auto mb-3 opacity-30" />
              <p className="font-medium text-slate-500">No reviews yet.</p>
              <p className="text-sm mt-1">Be the first to leave one above.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {reviews.map((r) => (
                <div key={r.id} className="bg-white rounded-2xl border-2 border-green-100 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <StarRating rating={r.rating} />
                    <span className="text-xs text-slate-400">
                      {new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm mb-4">&ldquo;{r.comment}&rdquo;</p>
                  <p className="text-sm font-semibold text-slate-900">{r.name}</p>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>

      <Footer />
    </main>
  )
}
