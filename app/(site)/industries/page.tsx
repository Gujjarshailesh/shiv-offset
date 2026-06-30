import type { Metadata } from "next"
import Image from "next/image"
import { industries } from "@/data/industries"
import { INDUSTRY_ICONS } from "@/components/ui/Icons"
import CTA from "@/components/home/CTA"

const BASE_URL = "https://www.shivoffset.in"

export const metadata: Metadata = {
  title: "Industries We Serve – Pharma, FMCG, Textile, Education & More",
  description:
    "Shiv Offset serves pharma, FMCG, textile, ceramics, corporate, hospitality, education, e-commerce, and more — with tailored offset and digital printing solutions from Rajula.",
  alternates: {
    canonical: `${BASE_URL}/industries`,
  },
  openGraph: {
    url: `${BASE_URL}/industries`,
    title: "Industries We Serve – Shiv Offset Rajula",
    description:
      "Printing solutions tailored for pharma, FMCG, textile, ceramics, hospitality, education, and 10+ other industries across Gujarat and India.",
    images: [
      {
        url: `${BASE_URL}/images/services/digital-printing.jpg`,
        width: 1200,
        height: 630,
        alt: "Shiv Offset – Industries Served",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve – Shiv Offset Rajula",
    description: "Tailored print solutions for pharma, FMCG, textile, ceramics and more.",
    images: [`${BASE_URL}/images/services/digital-printing.jpg`],
  },
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/images/services/digital-printing.jpg"
            alt="Shiv Offset — industries served"
            fill className="object-cover opacity-35" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 bg-brand-500/10 px-4 py-1.5 rounded-full">Sectors We Serve</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Industries We Work With</h1>
          <p className="text-slate-300 text-xl max-w-2xl">
            We tailor our printing solutions to the specific demands of each industry — from pharmaceutical compliance to luxury retail aesthetics.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">Our Expertise</span>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Serving 15+ Industry Verticals</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              From regulated pharmaceutical packaging to luxury retail gifting — our expertise spans the full breadth of commerce and industry across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {industries.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.slug]
              return (
                <div
                  key={ind.slug}
                  className="group bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-400 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-5">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill className="object-cover brightness-50 group-hover:brightness-60 transition-all duration-300"
                        sizes="64px"
                      />
                      {Icon && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-brand-400" strokeWidth={1.8} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h2 className="font-black text-xl text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{ind.title}</h2>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">{ind.description}</p>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Printing Solutions</p>
                        <div className="flex flex-wrap gap-2">
                          {ind.printingNeeds.map((need) => (
                            <span key={need} className="text-xs bg-brand-50 border border-brand-200 text-brand-700 px-2.5 py-0.5 rounded-full font-medium">
                              {need}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* "Don't see your industry" section */}
      <section className="py-20 bg-navy-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-2xl bg-brand-500/15 border border-brand-500/25 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            We work with businesses across all sectors. If you need quality offset or digital printing, reach out — we will tailor a solution that fits your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-500 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/15"
            >
              Talk to Our Team
            </a>
<a
               href="https://wa.me/918140332132"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 border border-green-500/40 text-green-400 font-semibold px-8 py-4 rounded-xl hover:bg-green-500/10 transition-colors"
             >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
