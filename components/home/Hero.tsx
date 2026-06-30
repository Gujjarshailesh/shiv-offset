"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { IconCheck, IconPhone, IconWhatsApp } from "@/components/ui/Icons"

const slides = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "Offset printing press in action — Shiv Offset Rajula",
    tag: "World-Class Printing Press",
    headline: ["We Take Care", "of Print."],
    sub: "You Take Care of Business.",
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "Premium print products — brochures and marketing materials",
    tag: "Premium Quality. Every Job.",
    headline: ["Your Brand,", "Perfectly Printed."],
    sub: "From brochures to packaging — all under one roof.",
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "Modern printing facility — Shiv Offset",
    tag: "Rajula's Trusted Printing Press",
    headline: ["Quality That", "Speaks Volumes."],
    sub: "500+ clients. 5,000+ projects. Always on time.",
  },
]

const stats = [
  { value: "2014", label: "Established" },
  { value: "500+", label: "Happy Clients" },
  { value: "5K+", label: "Jobs Done" },
  { value: "9", label: "Services" },
]

const badges = ["ISO Quality Standards", "On-Time Delivery", "Pan-India Clients", "Full In-House Production"]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => { setHydrated(true) }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setPrev(current)
      setTransitioning(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length)
        setTransitioning(false)
      }, 700)
    }, 6000)
    return () => clearInterval(t)
  }, [current])

  const goTo = (i: number) => {
    if (i === current) return
    setPrev(current)
    setTransitioning(true)
    setTimeout(() => { setCurrent(i); setTransitioning(false) }, 700)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background images with Ken Burns + crossfade */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => {
          // Only render slide 0 on server; render others after hydration to save bandwidth
          if (!hydrated && i !== 0) return null
          return (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <div className={`absolute inset-0 ${i === current ? "animate-kenBurns" : ""}`}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  quality={i === 0 ? 75 : 65}
                  sizes="100vw"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          )
        })}

        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />

        {/* Subtle radial glow — CSS only, no blur filter */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(192,37,44,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,59,143,0.07) 0%, transparent 70%)" }} />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36 pb-24">
        <div className="max-w-4xl">
          {/* Tag badge */}
          <div
            key={`tag-${current}`}
            className="inline-flex items-center gap-2.5 glass-dark rounded-full px-5 py-2 mb-7 animate-fadeInUp"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
              {slides[current].tag}
            </span>
          </div>

          {/* Headline */}
          <div key={`h-${current}`} className="mb-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[1.0] animate-fadeInUp delay-100">
              {slides[current].headline[0]}
              <br />
              <span className="text-gradient">{slides[current].headline[1]}</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white/60 mt-2 animate-fadeInUp delay-200">
              <span className="relative inline-block">
                {slides[current].sub}
                <svg className="absolute -bottom-1 left-0 w-full opacity-60" viewBox="0 0 400 8" fill="none">
                  <path d="M2 5C80 2 200 1.5 398 5" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-6 mb-10 animate-fadeInUp delay-300">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2 text-xs text-slate-400">
                <IconCheck className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" strokeWidth={2.5} />
                {b}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fadeInUp delay-400">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-brand-500 hover:bg-brand-400 text-white font-black px-8 py-4 rounded-xl btn-glow text-base transition-colors"
            >
              Get Free Quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
<a
               href="https://wa.me/918140332132?text=Hi%20Shiv%20Offset%2C%20I%27d%20like%20a%20print%20quote."
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2.5 border-2 border-green-400/60 text-green-400 hover:bg-green-400/10 hover:border-green-300 font-bold px-7 py-4 rounded-xl transition-all text-base"
             >
               <IconWhatsApp className="w-5 h-5 flex-shrink-0" />
               WhatsApp Us
             </a>
             <a
               href="tel:08140332132"
               className="hidden sm:inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-semibold px-6 py-4 rounded-xl transition-all text-sm"
             >
               <IconPhone className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
               081403 32132
             </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fadeInUp delay-500 max-w-2xl">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-4 py-4 text-center group hover:bg-brand-500/10 transition-colors border border-white/5 hover:border-brand-500/25">
              <div className="text-3xl font-black text-brand-400 mb-1 group-hover:scale-110 transition-transform">{s.value}</div>
              <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-400 rounded-full ${
              i === current
                ? "w-10 h-2.5 bg-brand-500 shadow-lg shadow-brand-500/40"
                : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 hidden lg:flex flex-col items-center gap-2 text-white/25 z-20">
        <div className="flex flex-col gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-px bg-white/30 mx-auto"
              style={{ height: 16, animationDelay: `${i * 200}ms`, animation: "float 2s ease-in-out infinite" }}
            />
          ))}
        </div>
        <span className="text-[10px] tracking-[4px] uppercase mt-1 rotate-0">Scroll</span>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10">
        <svg viewBox="0 0 1440 64" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="#fff" fillOpacity="0.02" />
        </svg>
      </div>
    </section>
  )
}
