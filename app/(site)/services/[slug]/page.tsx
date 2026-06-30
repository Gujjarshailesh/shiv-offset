import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services, getServiceBySlug } from "@/data/services"
import { SERVICE_ICONS, IconCheck } from "@/components/ui/Icons"
import CTA from "@/components/home/CTA"

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

const BASE_URL = "https://www.shivoffset.in"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = getServiceBySlug(slug)
  if (!s) return { title: "Not Found" }
  return {
    title: `${s.title} in Rajula, Gujarat – Shiv Offset`,
    description: `${s.shortDesc} Shiv Offset, Rajula's trusted printing press, delivers premium ${s.title.toLowerCase()} across Gujarat and India.`,
    alternates: {
      canonical: `${BASE_URL}/services/${s.slug}`,
    },
    openGraph: {
      url: `${BASE_URL}/services/${s.slug}`,
      title: `${s.title} – Shiv Offset Rajula`,
      description: s.shortDesc,
      images: [
        {
          url: `${BASE_URL}${s.image}`,
          width: 1200,
          height: 630,
          alt: `${s.title} – Shiv Offset Rajula`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.title} – Shiv Offset Rajula`,
      description: s.shortDesc,
      images: [`${BASE_URL}${s.image}`],
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const Icon = SERVICE_ICONS[service.slug]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${BASE_URL}/services/${service.slug}` },
    ],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDesc,
    url: `${BASE_URL}/services/${service.slug}`,
    image: `${BASE_URL}${service.image}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Shiv Offset",
    },
    areaServed: { "@type": "State", name: "Gujarat" },
    serviceType: service.title,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill className="object-cover opacity-50" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/services" className="hover:text-brand-400 transition-colors">Services</Link>
            <span className="text-slate-600">›</span>
            <span className="text-brand-400">{service.title}</span>
          </nav>
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center mb-4 shadow-lg">
              <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 max-w-2xl leading-tight">{service.title}</h1>
          <p className="text-slate-300 text-xl max-w-xl">{service.shortDesc}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-5">Overview</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-10">{service.description}</p>

              {service.images && service.images.length > 1 && (
                <div className={`grid gap-4 mb-10 ${service.images.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                  {service.images.map((img, i) => (
                    <div key={i} className="relative rounded-2xl overflow-hidden img-zoom aspect-[4/3] shadow-md">
                      <Image
                        src={img} alt={`${service.title} — example ${i + 1}`}
                        fill className="object-cover"
                        sizes="(max-width:1024px)50vw,25vw"
                      />
                    </div>
                  ))}
                </div>
              )}

              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-5">Key Features &amp; Specifications</h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Common Applications</h2>
              <div className="flex flex-wrap gap-3">
                {service.applications.map((a) => (
                  <span key={a} className="bg-brand-50 dark:bg-brand-900/20 border border-brand-300 dark:border-brand-700/50 text-brand-700 dark:text-brand-300 font-medium px-4 py-2 rounded-full text-sm">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-navy-950 rounded-3xl p-7 sticky top-24 border border-brand-500/15">
                {Icon && (
                  <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-400" strokeWidth={1.8} />
                  </div>
                )}
                <h3 className="font-black text-xl text-white mb-2">Quote for {service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Tell us your requirements — quantity, size, paper, finish — and we&apos;ll respond within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-brand-500 text-white font-bold py-3.5 rounded-xl hover:bg-brand-400 transition-colors mb-3 shadow-lg shadow-brand-500/15"
                >
                  Request Quote
                </Link>
<a
                   href={`https://wa.me/918140332132?text=Hi%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(service.title)}`}
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 w-full border border-green-500/50 text-green-400 font-semibold py-3 rounded-xl hover:bg-green-500/10 transition-colors text-sm"
                 >
                  <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current">
                    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.73.69 5.31 1.99 7.57L.5 31.5l8.18-2.04A15.42 15.42 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.97 22.3c-.33.93-1.93 1.78-2.67 1.9-.68.11-1.53.15-2.47-.15-.57-.18-1.3-.43-2.24-.84-3.95-1.7-6.53-5.7-6.73-5.97-.2-.26-1.63-2.16-1.63-4.12s1.03-2.92 1.4-3.32c.37-.4.8-.5 1.07-.5.27 0 .53 0 .77.01.24.01.57-.09.89.68.33.8 1.13 2.77 1.23 2.97.1.2.17.43.03.7-.13.26-.2.43-.4.66-.2.23-.42.52-.6.7-.2.2-.4.4-.17.8.23.4 1.03 1.7 2.22 2.76 1.52 1.36 2.8 1.78 3.2 1.98.4.2.63.17.87-.1.23-.27.97-1.13 1.23-1.53.27-.4.53-.33.9-.2.37.13 2.33 1.1 2.73 1.3.4.2.67.3.77.47.1.17.1 1-.23 1.93z" />
                  </svg>
                  WhatsApp Us
                </a>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Why Shiv Offset</p>
                  {["20+ years experience", "In-house all finishing", "On-time guaranteed", "Quality controlled", "Pan-India delivery"].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                      <IconCheck className="w-4 h-4 text-brand-400 flex-shrink-0" strokeWidth={2.5} />
                      {b}
                    </div>
                  ))}
                </div>

<div className="mt-5 pt-5 border-t border-slate-800 text-center">
                   <a href="tel:08140332132" className="text-xs text-slate-500 hover:text-slate-400 transition-colors flex items-center justify-center gap-1.5">
                     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                     081403 32132
                   </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">You May Also Need</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((s) => {
              const RelIcon = SERVICE_ICONS[s.slug]
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white dark:bg-navy-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="img-zoom relative h-40">
                    <Image src={s.image} alt={s.title} fill className="object-cover" sizes="33vw" />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                    {RelIcon && (
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow">
                        <RelIcon className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-1">{s.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2">{s.shortDesc}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
