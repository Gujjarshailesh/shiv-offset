"use client"

import { useEffect, useRef, useState } from "react"
import { testimonials } from "@/data/testimonials"

const trustedBrands = [
  "Education Boards", "Pharma Companies", "FMCG Brands", "Textile Mills",
  "Ceramics Exporters", "Hotel Chains", "Corporate Houses", "Event Managers",
  "E-commerce Sellers", "Healthcare Groups", "NGOs & Trusts", "Government Bodies",
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const ob = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll(".reveal").forEach((el) => ob.observe(el))
    return () => ob.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-slate-900 relative overflow-hidden">
      {/* Animated trusted-by marquee */}
      <div className="py-4 bg-brand-500 overflow-hidden relative border-y border-brand-400">
        <div className="flex animate-marquee gap-10 whitespace-nowrap">
          {[...trustedBrands, ...trustedBrands].map((brand, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-slate-900 font-bold text-sm flex-shrink-0">
              <svg className="w-1.5 h-1.5 fill-slate-900/40" viewBox="0 0 4 4"><circle cx="2" cy="2" r="2" /></svg>
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 bg-brand-500/10 px-4 py-1.5 rounded-full">
            Client Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Long-term relationships built on trust, quality, and consistent delivery.
          </p>
        </div>

        {/* Large quote display */}
        <div className="max-w-3xl mx-auto reveal">
          <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12">
            {/* Quote mark */}
            <div className="absolute -top-6 left-10 text-8xl text-brand-500/15 font-black leading-none select-none">
              &#8220;
            </div>

            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`transition-all duration-500 ${i === active ? "opacity-100" : "opacity-0 absolute inset-0"}`}
              >
                {i === active && (
                  <>
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <svg key={j} className="w-5 h-5 text-brand-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-black text-slate-900 text-lg flex-shrink-0">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white">{t.name}</div>
                        <div className="text-sm text-slate-400">{t.title}, {t.company}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${i === active ? "w-8 h-2 bg-brand-500" : "w-2 h-2 bg-slate-600 hover:bg-slate-400"}`}
              />
            ))}
          </div>
        </div>

        {/* Mini testimonial cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                i === active
                  ? "border-brand-500/50 bg-brand-500/10"
                  : "border-slate-700 bg-slate-800/40 hover:border-slate-500"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-bold text-slate-900 text-sm mb-2">
                {t.name[0]}
              </div>
              <div className="text-white text-xs font-semibold truncate">{t.name}</div>
              <div className="text-slate-500 text-[10px] truncate">{t.company}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
