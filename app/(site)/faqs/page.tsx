"use client"

import { useState } from "react"
import Image from "next/image"
import CTA from "@/components/home/CTA"

const faqs = [
  {
    q: "What is offset printing and how does it differ from digital printing?",
    a: "Offset printing transfers ink from a metal plate to a rubber blanket, then onto the paper — delivering exceptional colour fidelity and consistency across large runs. It accounts for nearly 40% of global printing production and is the gold standard for quality at volume. Digital printing, by contrast, prints directly from a digital file — ideal for short runs from a single copy, variable data, and faster turnaround. At Shiv Offset, we operate both technologies so we can recommend the right process for your specific job.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "There is no minimum for digital printing — we accept orders from a single copy. For offset printing, minimum quantities typically start at 500 copies for commercial items like brochures and leaflets, and 1,000 units for packaging cartons. Offset becomes increasingly cost-effective from 1,000+ copies. Tell us your quantity and we'll advise which process gives you the best quality-to-cost ratio.",
  },
  {
    q: "What file formats do you accept for artwork?",
    a: "We prefer print-ready PDF files (PDF/X-1a or PDF/X-4). We also accept EPS, PS, and high-resolution PDF formats via FTP or CD/email. Files should be set up in CMYK colour mode at minimum 300 DPI resolution, with 3mm bleed on all sides. Our pre-press specialists review every file and correct any issues before production. If you need guidance on file setup, our team is happy to assist.",
  },
  {
    q: "What are your typical turnaround times?",
    a: "Turnaround times vary by product: Business cards and stationery — 3–5 working days; Brochures and leaflets — 5–7 working days; Catalogues and booklets — 7–12 working days; Mono carton packaging — 10–15 working days (includes die-tool); Books (digital) — 5–8 working days; Books (offset) — 10–14 working days. Rush orders can be accommodated depending on press availability — please discuss your deadline at the time of enquiry.",
  },
  {
    q: "Do you provide colour proofing before printing?",
    a: "Yes, absolutely. We provide digital colour proofs (PDF) for all jobs and physical inkjet proofs on request. For colour-critical work — particularly pharmaceutical packaging, brand packaging, and premium publications — we strongly recommend approving a physical proof before we proceed to the full press run. We do not start printing without your written sign-off. Proofing charges are communicated upfront and are separate from the print cost.",
  },
  {
    q: "What paper stocks and finishing options are available?",
    a: "We work with a comprehensive range of substrates: Art Paper (90–350 GSM), Matt Art, Maplitho, Bond, Kraft, and SBS/FBB board (250–400 GSM) for packaging. Post-press finishing options include gloss, matte, and soft-touch lamination; aqueous and UV spot coating; hot foil stamping in gold, silver, and custom colours; embossing and debossing; UV varnishing; and die-cutting. Binding options include perfect binding, saddle stitching, case binding, and spiral binding.",
  },
  {
    q: "Do you offer pan-India delivery?",
    a: "Yes. We deliver locally within Rajula and across Gujarat directly from our facility. For clients in other states, we ship via reliable courier and freight partners. Shipping charges are calculated based on weight, dimensions, and destination and are quoted separately. We have delivered to clients across Maharashtra, Rajasthan, Delhi, Mumbai, and many other locations.",
  },
  {
    q: "How do I place an order with Shiv Offset?",
    a: "It's straightforward: (1) Contact us via the enquiry form on this website, email us at info@shivoffset.com, or call 081403 32132. (2) Share your requirements — product, quantity, size, paper, finishing, and deadline. (3) We'll send a detailed quotation within 24 hours. (4) On approval, share your artwork and we'll send a proof for sign-off. (5) We print after your written approval and deliver on the agreed date.",
  },
]

function FAQ({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-brand-500/50 shadow-md shadow-brand-500/10" : "border-slate-200 hover:border-slate-300"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left bg-white hover:bg-brand-50/50 transition-colors"
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

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pb-16 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/images/ui/faqs-hero.jpg"
            alt="Shiv Offset FAQs — printing press Rajula"
            fill className="object-cover opacity-30" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 bg-brand-500/10 px-4 py-1.5 rounded-full">Common Questions</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-300 text-xl max-w-2xl">
            Everything you need to know about working with Shiv Offset — from file prep to delivery.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3 mb-14">
              {faqs.map((faq, i) => <FAQ key={i} q={faq.q} a={faq.a} index={i} />)}
            </div>

            {/* Still have questions */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-brand-50 border border-brand-300 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Still Have a Question?</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-md mx-auto">
                Our team is available Monday to Saturday, 9 AM – 6:30 PM. We&apos;ll get back to you the same working day.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-500 text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-brand-400 transition-colors text-sm">
                  Send Us a Message →
                </a>
<a href="https://wa.me/918140332132" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-green-400/50 text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm">
                   <svg viewBox="0 0 32 32" className="w-4 h-4 fill-green-600 flex-shrink-0">
                     <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.73.69 5.31 1.99 7.57L.5 31.5l8.18-2.04A15.42 15.42 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.97 22.3c-.33.93-1.93 1.78-2.67 1.9-.68.11-1.53.15-2.47-.15-.57-.18-1.3-.43-2.24-.84-3.95-1.7-6.53-5.7-6.73-5.97-.2-.26-1.63-2.16-1.63-4.12s1.03-2.92 1.4-3.32c.37-.4.8-.5 1.07-.5.27 0 .53 0 .77.01.24.01.57-.09.89.68.33.8 1.13 2.77 1.23 2.97.1.2.17.43.03.7-.13.26-.2.43-.4.66-.2.23-.42.52-.6.7-.2.2-.4.4-.17.8.23.4 1.03 1.7 2.22 2.76 1.52 1.36 2.8 1.78 3.2 1.98.4.2.63.17.87-.1.23-.27.97-1.13 1.23-1.53.27-.4.53-.33.9-.2.37.13 2.33 1.1 2.73 1.3.4.2.67.3.77.47.1.17.1 1-.23 1.93z" />
                   </svg>
                   Chat on WhatsApp
                 </a>
                 <a href="tel:08140332132" className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                   081403 32132
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
