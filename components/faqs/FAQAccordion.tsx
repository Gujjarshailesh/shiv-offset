"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { faqs } from "@/data/faqs"

function FAQ({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      layout
      className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${open ? "border-brand-500/50 shadow-md shadow-brand-500/10" : "border-slate-200 hover:border-slate-300"}`}
      whileHover={{ y: -2 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left bg-white hover:bg-brand-50/50 transition-colors"
        aria-expanded={open}
      >
        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 transition-all ${open ? "bg-brand-500 text-white" : "bg-slate-100 text-slate-500"}`}>
          {open ? "−" : String(index + 1).padStart(2, "0")}
        </span>
        <span className={`font-semibold text-[15px] leading-snug flex-1 transition-colors ${open ? "text-brand-600" : "text-slate-800"}`}>{q}</span>
        <motion.svg
          className={`w-5 h-5 flex-shrink-0 ${open ? "text-brand-500" : "text-slate-400"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => <FAQ key={i} q={faq.q} a={faq.a} index={i} />)}
    </div>
  )
}
