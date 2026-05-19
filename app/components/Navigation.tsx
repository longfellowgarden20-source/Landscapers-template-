'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const closeNav = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-base">
              🌿
            </div>
            <span className="font-display text-lg font-bold text-slate-900">
              GreenEdge
            </span>
          </Link>

          {/* Desktop nav — only visible on large screens */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/book"
              className="px-4 py-2.5 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-medium whitespace-nowrap"
            >
              Book Appointment
            </Link>
          </div>

          {/* Hamburger — visible below lg */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-slate-900" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile / tablet dropdown */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden pb-4 border-t border-slate-200">
            <div className="flex flex-col pt-2">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeNav}
                  className="px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-3 mt-1 border-t border-slate-200">
                <Link
                  href="/contact"
                  onClick={closeNav}
                  className="w-full px-4 py-3 text-sm text-center text-slate-700 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/book"
                  onClick={closeNav}
                  className="w-full px-4 py-3 text-sm text-center bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
