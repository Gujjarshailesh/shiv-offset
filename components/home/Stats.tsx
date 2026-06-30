"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { end: 2014, suffix: "", label: "Founded", prefix: "" },
  { end: 500, suffix: "+", label: "Happy Clients", prefix: "" },
  { end: 5000, suffix: "+", label: "Projects Delivered", prefix: "" },
  { end: 10, suffix: "+", label: "Industry Sectors", prefix: "" },
]

const equipment = [
  { label: "Multi-Colour Offset Press", sub: "In-house · 2016" },
  { label: "Digital Inkjet Printers", sub: "Multi-brand · 2014+" },
  { label: "Wide-Format Plotter", sub: "Banners & Signage" },
  { label: "UV Coating Machine", sub: "Spot UV & Full-sheet" },
]

function useCountUp(end: number, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    const steps = 50
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 1600 / steps)
    return () => clearInterval(timer)
  }, [started, end])
  return count
}

function CounterRow() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); ob.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  const counts = stats.map((s) => useCountUp(s.end, started))

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-20">
      {stats.map((s, i) => (
        <div key={s.label} className="text-center">
          <div className="text-5xl md:text-6xl font-black text-white mb-2 tabular-nums">
            {s.prefix}
            <span className="text-gradient">{counts[i].toLocaleString("en-IN")}</span>
            {s.suffix}
          </div>
          <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-brand-500/40" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-4 py-2 border border-brand-500/25 rounded-full">
            Numbers That Speak
          </span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-brand-500/40" />
        </div>

        <CounterRow />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {equipment.map((item) => (
            <div
              key={item.label}
              className="glass rounded-xl px-4 py-4 text-center border border-brand-500/10 hover:border-brand-500/25 transition-colors"
            >
              <div className="text-white text-sm font-bold mb-1 leading-snug">{item.label}</div>
              <div className="text-brand-400 text-xs">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
