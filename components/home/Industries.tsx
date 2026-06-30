"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { industries } from "@/data/industries"
import { INDUSTRY_ICONS } from "@/components/ui/Icons"

export default function IndustriesSection() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const ob = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll(".reveal").forEach((el) => ob.observe(el))
    return () => ob.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300" id="industries">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3 bg-blue-50 dark:bg-blue-400/10 px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-400/20">
            Sectors We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Industries We Work With</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Different industries have different print demands. We tailor our solutions to meet each sector's specific needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => {
            const Icon = INDUSTRY_ICONS[ind.slug]
            return (
              <div
                key={ind.slug}
                className={`reveal delay-${(i % 5) * 100} group relative rounded-2xl overflow-hidden cursor-default bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-400 dark:hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-100/50 dark:hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="relative h-28 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover brightness-50 group-hover:brightness-60 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {Icon && (
                      <div className="w-10 h-10 rounded-xl bg-brand-500/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-slate-900" strokeWidth={1.8} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="px-3 py-3 text-center">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 leading-snug transition-colors">
                    {ind.title}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 reveal">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 border-2 border-slate-900 dark:border-slate-200 text-slate-900 dark:text-slate-200 font-bold px-8 py-3.5 rounded-xl hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all duration-200"
          >
            View All Industries
          </Link>
        </div>
      </div>
    </section>
  )
}
