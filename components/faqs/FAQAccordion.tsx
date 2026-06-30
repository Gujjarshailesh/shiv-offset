"use client"

import { useState } from "react"
import { faqs } from "@/data/faqs"

function FAQ({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-brand-500/50 shadow-md shadow-brand-500/10" : "border-slate-200 hover:border-slate-300"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left bg-white hover:bg-brand-50/50 transition-colors"
        aria-expanded={open}
      >
        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 transition-all ${open ? "bg-brand-500 text-slate-900" : "bg-slate-100 text-slate-500"}`}>
          {open ? "−" : String(index + 1).padStart(2, "0")}
        </span>
        <span className={`font-semibold text-[15px] leading-snug flex-1 transition-colors ${open ? "text-brand-600" : "text-slate-800"}`}>{q}</span>
        <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-brand-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <p className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => <FAQ key={i} q={faq.q} a={faq.a} index={i} />)}
    </div>
  )
}
