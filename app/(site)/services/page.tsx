import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { services } from "@/data/services"
import { SERVICE_ICONS } from "@/components/ui/Icons"
import CTA from "@/components/home/CTA"

const BASE_URL = "https://www.shivoffset.in"

export const metadata: Metadata = {
  title: "Printing Services – Offset, Digital, Brochure, Packaging & More",
  description:
    "Full-service printing from Shiv Offset, Rajula — pre-press, offset printing, digital printing, post-press, card printing, brochure, catalogue, book, and box printing.",
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    url: `${BASE_URL}/services`,
    title: "Printing Services – Shiv Offset Rajula",
    description:
      "Pre-press to post-press, offset to digital — everything under one roof. 9 services, 500+ clients, all of Gujarat.",
    images: [
      {
        url: `${BASE_URL}/images/services/offset-printing.jpg`,
        width: 1200,
        height: 630,
        alt: "Shiv Offset printing services – Rajula",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing Services – Shiv Offset Rajula",
    description: "Offset, digital, brochure, packaging and more — all under one roof in Rajula.",
    images: [`${BASE_URL}/images/services/offset-printing.jpg`],
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/images/services/offset-printing.jpg"
            alt="Shiv Offset services — printing press Rajula"
            fill className="object-cover opacity-35" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 bg-brand-500/10 px-4 py-1.5 rounded-full">What We Do</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Our Printing Services</h1>
          <p className="text-slate-300 text-xl max-w-2xl">
            Pre-press to post-press, offset to digital — everything under one roof. With regards to printing, there&apos;s not much we don&apos;t know or can&apos;t do.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 dark:text-brand-400 mb-3 bg-brand-50 dark:bg-brand-500/10 px-4 py-1.5 rounded-full">Full-Service Printing</span>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Everything You Need to Print</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              We control the entire workflow in-house — meaning consistent quality, faster turnaround, and a single point of accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = SERVICE_ICONS[service.slug]
              return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white dark:bg-navy-950 rounded-3xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-400 border border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-500/50 card-hover"
              >
                {/* Image */}
                <div className="img-zoom relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  {Icon && (
                    <div className="absolute top-4 left-4 w-11 h-11 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
                  <h2 className="font-black text-xl text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.shortDesc}
                  </p>
                  {/* Application pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.applications.slice(0, 3).map((a) => (
                      <span key={a} className="text-xs bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 px-2.5 py-0.5 rounded-full font-medium">
                        {a}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-brand-600 font-bold text-sm group-hover:gap-2 transition-all">
                    View Details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="py-20 bg-navy-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">Our Print Process</h2>
            <p className="text-slate-400">Simple, transparent, and efficient — from brief to delivery.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            {["Share Brief", "Get Quote", "Artwork Approval", "Proof Review", "Print & Finish", "Delivery"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-500 text-white font-black text-lg flex items-center justify-center shadow-lg mb-2">
                    {i + 1}
                  </div>
                  <span className="text-sm font-semibold text-white whitespace-nowrap">{step}</span>
                </div>
                {i < 5 && (
                  <div className="hidden md:block w-8 h-px bg-brand-500/25 mb-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
