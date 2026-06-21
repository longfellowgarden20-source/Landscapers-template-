'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { business } from '../../config/business'

export function CallButton() {
  const phoneDigits = business.phone.replace(/\D/g, '')
  return (
    <Link
      href={`tel:+1${phoneDigits}`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-accent text-white pl-4 pr-5 py-3 rounded-full shadow-[0_4px_20px_rgba(58,125,68,0.45)] hover:bg-accent-dark hover:shadow-[0_6px_28px_rgba(58,125,68,0.55)] transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label="Call Diaz Gardening Services"
    >
      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
        <Phone className="w-4 h-4" />
      </div>
      <span className="text-sm font-semibold whitespace-nowrap">{business.phone}</span>
    </Link>
  )
}
