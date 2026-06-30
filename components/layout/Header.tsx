"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { IconPhone, IconMail } from "@/components/ui/Icons"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isLight = mounted && resolvedTheme === "light"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? isLight
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-2 border-b border-slate-100"
            : "bg-navy-950/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-2"
          : "bg-transparent py-4"
      )}
    >
      {/* Top info bar — always shows on dark backgrounds (hero is always dark) */}
      <div className={cn(
        "border-b border-white/10 transition-all duration-500 overflow-hidden",
        scrolled ? "max-h-0 opacity-0 mb-0" : "max-h-8 opacity-100 mb-2"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-white/60 pb-2">
          <div className="flex items-center gap-4">
            <a href="tel:08140332132" className="flex items-center gap-1.5 hover:text-brand-400 transition-colors">
              <IconPhone className="w-3 h-3" strokeWidth={2} />
              081403 32132
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="mailto:info@shivoffset.com" className="hidden sm:flex items-center gap-1.5 hover:text-brand-400 transition-colors">
              <IconMail className="w-3 h-3" strokeWidth={2} />
              info@shivoffset.com
            </a>
          </div>
          <span className="hidden sm:block">Mon–Sat: 9:00 AM – 6:30 PM</span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative">
              <div className="w-11 h-11 group-hover:scale-105 transition-transform">
                <Image src="/logo.png" alt="Shiv Offset Logo" width={44} height={44} priority />
              </div>
            </div>
            <div>
              <span className={cn(
                "font-heading font-bold text-xl leading-none block tracking-tight",
                scrolled && isLight ? "text-slate-900" : "text-white"
              )}>Shiv Offset</span>
              <span className="text-[10px] text-brand-500 leading-none tracking-widest uppercase">Printing Press · Rajula</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              const lightScrolled = scrolled && isLight
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                    active
                      ? "text-brand-500"
                      : lightScrolled
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-brand-500 transition-all duration-300",
                    active ? "w-5" : "w-0 group-hover:w-5"
                  )} />
                </Link>
              )
            })}
          </nav>

          {/* CTA + Theme Toggle + Hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl bg-brand-500 text-white hover:bg-brand-600 transition-all duration-200 shadow-lg shadow-brand-500/15 hover:shadow-brand-500/40 hover:-translate-y-0.5"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled && isLight
                  ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={cn("h-0.5 bg-current rounded transition-all origin-left", menuOpen ? "rotate-45 translate-y-[-1px]" : "")} />
                <span className={cn("h-0.5 bg-current rounded transition-all", menuOpen ? "opacity-0" : "")} />
                <span className={cn("h-0.5 bg-current rounded transition-all origin-left", menuOpen ? "-rotate-45 translate-y-[1px]" : "")} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <nav className={cn(
            "flex flex-col gap-1 pb-4 pt-4 border-t",
            scrolled && isLight ? "border-slate-200" : "border-white/10"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-all",
                  pathname === link.href
                    ? "bg-brand-500/15 text-brand-500"
                    : scrolled && isLight
                      ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 flex items-center justify-center gap-2 bg-brand-500 text-slate-900 font-bold px-5 py-3 rounded-xl hover:bg-brand-400 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
