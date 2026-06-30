import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/home/CTA"
import FAQAccordion from "@/components/faqs/FAQAccordion"
import { faqs } from "@/data/faqs"

const BASE_URL = "https://www.shivoffset.in"

export const metadata: Metadata = {
  title: "FAQs – Printing Press Questions Answered",
  description:
    "Frequently asked questions about offset printing, digital printing, file formats, turnaround times, finishing options, and ordering from Shiv Offset in Rajula, Gujarat.",
  alternates: {
    canonical: `${BASE_URL}/faqs`,
  },
  openGraph: {
    url: `${BASE_URL}/faqs`,
    title: "FAQs – Shiv Offset Printing Press Rajula",
    description:
      "Answers to common questions about offset printing, digital printing, file prep, turnaround times, paper stocks, finishing, and pan-India delivery.",
    images: [
      {
        url: `${BASE_URL}/images/ui/faqs-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Shiv Offset FAQs – Printing Press Rajula",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs – Shiv Offset Printing Press Rajula",
    description: "Answers to common printing questions — offset, digital, turnaround, file formats & more.",
    images: [`${BASE_URL}/images/ui/faqs-hero.jpg`],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "FAQs", item: `${BASE_URL}/faqs` },
  ],
}

export default function FAQsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            <div className="mb-14">
              <FAQAccordion />
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
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-400 transition-colors text-sm">
                  Send Us a Message →
                </Link>
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
